'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Target } from 'lucide-react';

export function HeroSection() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1] as  [number, number, number, number],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const, // ✅ explicitly narrow the type
      },
    },
  };

  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-32">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Floating background elements */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-32 right-16 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-xl"
            style={{ animationDelay: '2s' }}
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 blur-xl"
            style={{ animationDelay: '4s' }}
          />

          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/20">
            <Brain className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              AI-Powered Education Revolution
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AI-QEd
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-600 dark:text-gray-400">
              Intelligent Learning
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your learning experience with AI-powered personalized education. 
            Adaptive questioning, intelligent feedback, and dynamic content generation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={() => router.push('/chat')}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-white/20 hover:bg-white/70 dark:hover:bg-gray-800/70"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-white/30 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-300"
            >
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Instant Feedback
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Get immediate, intelligent responses to your questions
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-white/30 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-300"
            >
              <Target className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Personalized Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Adaptive content tailored to your learning style
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-white/30 dark:bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-300"
            >
              <Brain className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Smart Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                AI-driven insights into your learning progress
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}