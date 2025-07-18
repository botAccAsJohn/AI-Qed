'use client';

import { motion } from 'framer-motion';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { AboutSection } from './AboutSection';
import { Footer } from './Footer';

export function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <Footer />
      </motion.div>
    </main>
  );
}