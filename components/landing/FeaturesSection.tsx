'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, MessageCircle, BarChart3, Users, Lightbulb, Clock } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Learning',
    description: 'Engage with dynamic content that adapts to your learning pace and style.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
  },
  {
    icon: MessageCircle,
    title: 'Conversational AI',
    description: 'Learn through natural conversation with our advanced AI tutor.',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics and insights.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900',
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Connect with peers and learn together in virtual study groups.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900',
  },
  {
    icon: Lightbulb,
    title: 'Smart Suggestions',
    description: 'Receive personalized recommendations for optimal learning outcomes.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Learn anytime, anywhere with our always-available AI assistant.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900',
  },
];

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Modern Learning
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how AI-QEd revolutionizes education with cutting-edge technology
            and personalized learning experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-white/20 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}