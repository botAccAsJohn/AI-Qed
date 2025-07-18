'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Personalized learning paths powered by AI',
  'Real-time feedback and assessment',
  'Adaptive content difficulty adjustment',
  'Multi-modal learning support',
  'Progress tracking and analytics',
  'Seamless integration with existing curricula',
];

export function AboutSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Education is Here
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              AI-QEd represents a paradigm shift in educational technology. Our platform
              combines artificial intelligence with proven pedagogical methods to create
              truly personalized learning experiences.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">50K+</div>
                  <div className="text-xl opacity-90 mb-6">Active Learners</div>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold">95%</div>
                      <div className="text-sm opacity-80">Satisfaction Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">40%</div>
                      <div className="text-sm opacity-80">Faster Learning</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}