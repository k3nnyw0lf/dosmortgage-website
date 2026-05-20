"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
} as const;

const scaleVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
} as const;

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-neutral-50 overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="DOS Mortgage"
              width={120}
              height={120}
              className="w-auto h-auto"
              priority
            />
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#solutions" className="text-neutral-600 hover:text-primary-600 transition">Solutions</a>
            <a href="#about" className="text-neutral-600 hover:text-primary-600 transition">About</a>
            <button className="px-6 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition font-body font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl -z-10" />

        {mounted && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={false}
            className="max-w-5xl mx-auto text-center z-10"
          >
          <motion.h1
            initial={{ y: 0, opacity: 1 }}
            animate={false}
            className="font-display text-6xl md:text-7xl font-bold text-primary-950 leading-tight mb-6"
          >
            Premium Mortgage Solutions for Real Estate Professionals
          </motion.h1>

          <motion.p
            initial={{ y: 0, opacity: 1 }}
            animate={false}
            className="font-body text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Expert lending tailored for investors and professionals. Fast approvals, competitive rates, and personalized service.
          </motion.p>

          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={false}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-body font-semibold text-lg shadow-lg hover:shadow-xl transition"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full font-body font-semibold text-lg hover:bg-primary-50 transition"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={false}
            className="relative w-full max-w-3xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-primary-400/20 to-primary-400/0 rounded-3xl blur-2xl" />
            <div className="relative bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-600 mb-2">25+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-600 mb-2">$2B+</div>
                  <div className="text-sm text-neutral-600">Funded Mortgages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-600 mb-2">48hrs</div>
                  <div className="text-sm text-neutral-600">Fast Approval</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl font-bold text-primary-950 mb-4">
              Tailored Solutions
            </h2>
            <p className="text-xl text-neutral-600">Choose the mortgage option that fits your needs</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Investment Mortgages",
                description: "Flexible terms for income-producing properties and portfolio expansion",
                features: ["Up to 90% LTV", "Quick turnaround", "Competitive rates"],
              },
              {
                title: "Bridge Loans",
                description: "Fast funding to bridge the gap between purchase and sale",
                features: ["24-48hr funding", "No pre-payment penalty", "Flexible terms"],
              },
              {
                title: "Fix & Flip Financing",
                description: "Construction loans designed for real estate investors",
                features: ["Interest-only terms", "Monthly funding", "Expert guidance"],
              },
            ].map((solution, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border border-neutral-200 hover:border-primary-300 transition group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent-400/10 rounded-full -z-10 group-hover:bg-accent-400/20 transition" />
                <h3 className="font-display text-2xl font-bold text-primary-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-neutral-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ x: 4 }}
                  className="mt-6 text-primary-600 font-semibold flex items-center gap-2 text-sm"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let our experts guide you to the perfect mortgage solution
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent-500 text-primary-900 rounded-full font-body font-semibold text-lg hover:bg-accent-400 transition shadow-lg"
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2026 DOS Mortgage. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
/* Rebuild trigger */
