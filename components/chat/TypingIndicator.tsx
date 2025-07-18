'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export function TypingIndicator() {
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -8 },
  };

  const dotTransition = {
    duration: 0.6,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
  };

  return (
    <div className="flex gap-3 justify-start mb-6">
      <Avatar className="w-8 h-8 mt-1">
        <AvatarFallback className="bg-blue-600 text-white">
          <Brain className="w-4 h-4" />
        </AvatarFallback>
      </Avatar>
      
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md">
        <CardContent className="p-4">
          <div className="flex items-center gap-1">
            <span className="text-gray-600 dark:text-gray-400 mr-2">AI is typing</span>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                variants={dotVariants}
                initial="initial"
                animate="animate"
                transition={{
                  ...dotTransition,
                  delay: index * 0.2,
                }}
                className="w-2 h-2 bg-blue-600 rounded-full"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}