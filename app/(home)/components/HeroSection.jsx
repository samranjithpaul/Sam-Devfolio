"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { HiCode, HiArrowRight } from "react-icons/hi";
import { config } from "@/config";
import Link from "next/link";
import { BackgroundPresets } from "@/components/ui/background-effects";
import { motion } from "framer-motion";
import SkillsShowcase from "./SkillsShowcase";

// Smooth parallax animation
const parallax = (mouse, strength = 15) => ({
  x: (mouse.x - 0.5) * strength,
  y: (mouse.y - 0.5) * strength,
  transition: { type: "spring", stiffness: 30, mass: 1, damping: 12 }
});

const HeroSection = () => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  return (
    <section
      className="relative min-h-[calc(100vh-140px)] flex flex-col items-center justify-center overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }}
    >
      {/* GRID background */}
      <BackgroundPresets.Grid />

      {/* Ambient parallax glow */}
      <motion.div
        className="absolute -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        animate={parallax(mouse, 35)}
      />

      {/* Top spacing */}
      <div className="container mx-auto px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* Chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
          >
            <HiCode className="text-primary w-5 h-5" />
            <span className="text-sm text-primary font-medium">
              Welcome to my Devfolio
            </span>
          </motion.div>

          {/* Title block */}
          <motion.div
            className="relative select-none"
            animate={parallax(mouse, 10)}
          >
            <div className="relative inline-block px-4 py-2 rounded-2xl overflow-hidden group select-none">

  {/* Top glossy reflection */}
  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b 
    from-white/10 to-transparent opacity-30 pointer-events-none" />

  {/* Shine sweep like skills */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
    transition-opacity duration-700 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r 
      from-transparent via-white/20 to-transparent 
      animate-hero-shine" />
  </div>

  {/* Text */}
  <h1 className="relative text-4xl md:text-7xl font-extrabold tracking-tight 
    text-primary drop-shadow-lg z-10">
    Hi, I'm {config.developer.name}
  </h1>

</div>


            <p className="mt-4 text-white/70 text-lg md:text-2xl leading-relaxed">
              I build modern, scalable web experiences.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/60 max-w-2xl mx-auto text-base md:text-lg"
          >
            Full-stack builder creating digital experiences that respect humans and
            scale with clarity. Accessibility is my north star.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex justify-center"
          >
            <Link href="/projects">
              <Button
                variant="expandIcon"
                Icon={HiArrowRight}
                iconPlacement="right"
                className="rounded-full px-7 py-6 text-lg hover:scale-[1.04] transition"
              >
                View Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* SKILLS SECTION — YOU MISSED THIS BEFORE */}
      <div className="mt-20 w-full">
        <SkillsShowcase />
      </div>
    </section>
  );
};

export default HeroSection;
