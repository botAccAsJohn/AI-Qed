// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChatHeader } from './ChatHeader';
// import { ChatMessages } from './ChatMessages';
// import { ChatInput } from './ChatInput';
// import { Message, ChatState } from '@/types/chat';

// export function ChatInterface() {
//   const [chatState, setChatState] = useState<ChatState>({
//     messages: [
//       {
//         id: '1',
//         content: 'Hello! I\'m your AI-QEd assistant. I\'m here to help you learn and answer any questions you might have. How can I assist you today?',
//         role: 'assistant',
//         timestamp: new Date(),
//       },
//     ],
//     isLoading: false,
//   });

//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [chatState.messages]);

//   const sendMessage = async (content: string) => {
//     const userMessage: Message = {
//       id: Date.now().toString(),
//       content,
//       role: 'user',
//       timestamp: new Date(),
//     };

//     setChatState(prev => ({
//       ...prev,
//       messages: [...prev.messages, userMessage],
//       isLoading: true,
//     }));

//     // Simulate AI response with realistic delay
//     setTimeout(() => {
//       const aiResponse: Message = {
//         id: (Date.now() + 1).toString(),
//         content: generateAIResponse(content),
//         role: 'assistant',
//         timestamp: new Date(),
//       };

//       setChatState(prev => ({
//         ...prev,
//         messages: [...prev.messages, aiResponse],
//         isLoading: false,
//       }));
//     }, 1000 + Math.random() * 2000);
//   };

//   const generateAIResponse = (userInput: string): string => {
//     const responses = [
//       `That's a great question about "${userInput}". Let me break this down for you:\n\n**Key Points:**\n- This topic involves several important concepts\n- Understanding the fundamentals is crucial\n- There are practical applications you should consider\n\nWould you like me to elaborate on any specific aspect?`,
//       `I understand you're asking about "${userInput}". Here's a comprehensive explanation:\n\n**Overview:**\nThis is a complex topic that requires careful consideration of multiple factors.\n\n**Important Details:**\n1. First, we need to understand the core principles\n2. Then we can explore the practical implications\n3. Finally, we should consider real-world applications\n\nWhat specific part would you like to explore further?`,
//       `Excellent question! "${userInput}" is indeed an important topic. Let me provide you with a detailed analysis:\n\n**Background:**\nThis concept has evolved significantly over time and involves several key components.\n\n**Current Understanding:**\n- Modern approaches emphasize practical application\n- Research shows multiple perspectives are valuable\n- Best practices continue to evolve\n\nIs there a particular angle you'd like to focus on?`,
//     ];
    
//     return responses[Math.floor(Math.random() * responses.length)];
//   };

//   return (
//     <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
//       <ChatHeader />
//       <div className="flex-1 overflow-hidden">
//         <ChatMessages 
//           messages={chatState.messages} 
//           isLoading={chatState.isLoading}
//         />
//         <div ref={messagesEndRef} />
//       </div>
//       <ChatInput onSendMessage={sendMessage} disabled={chatState.isLoading} />
//     </div>
//   );
// }

'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { Message, ChatState } from '@/types/chat';

export function ChatInterface() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [
      {
        id: '1',
        content:
          "Hello! I'm your AI-QEd assistant. I'm here to help you learn and answer any questions you might have. How can I assist you today?",
        role: 'assistant',
        timestamp: new Date(),
      },
    ],
    isLoading: false,
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setChatState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: content }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.text ?? '[No response]',
        role: 'assistant',
        timestamp: new Date(),
      };

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, aiMessage],
        isLoading: false,
      }));
    } catch (error: any) {
      console.error('Failed to fetch AI response:', error);

      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: `⚠️ Failed to get response from AI: ${error.message || 'Unknown error'}`,
        role: 'assistant',
        timestamp: new Date(),
      };

      setChatState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false,
      }));
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <ChatHeader />
      {/* Scrollable chat messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        <ChatMessages
          messages={chatState.messages}
          isLoading={chatState.isLoading}
        />
        <div ref={messagesEndRef} />
      </div>
      {/* Message input */}
      <ChatInput onSendMessage={sendMessage} disabled={chatState.isLoading} />
    </div>
  );
}
