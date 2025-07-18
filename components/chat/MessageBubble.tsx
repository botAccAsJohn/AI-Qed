'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { User, Brain } from 'lucide-react';
import { Message } from '@/types/chat';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      {!isUser && (
        <Avatar className="w-8 h-8 mt-1">
          <AvatarFallback className="bg-blue-600 text-white">
            <Brain className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`max-w-[80%] ${isUser ? 'order-1' : 'order-2'}`}
      >
        <Card
          className={`${
            isUser
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
          } shadow-md hover:shadow-lg transition-all duration-200`}
        >
          <CardContent className="p-4">
            <div className={`prose prose-sm max-w-none ${
              isUser 
                ? 'prose-invert' 
                : 'prose-gray dark:prose-invert'
            }`}>
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                  ul: ({ children }) => <ul className="ml-4 mb-2">{children}</ul>,
                  ol: ({ children }) => <ol className="ml-4 mb-2">{children}</ol>,
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  code: ({ children }) => (
                    <code className={`px-1 py-0.5 rounded text-sm ${
                      isUser 
                        ? 'bg-blue-700 text-blue-100' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                    }`}>
                      {children}
                    </code>
                  ),
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
            <div className={`text-xs mt-2 ${
              isUser ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'
            }`}>
              {message.timestamp.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {isUser && (
        <Avatar className="w-8 h-8 mt-1">
          <AvatarFallback className="bg-gray-600 text-white">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}