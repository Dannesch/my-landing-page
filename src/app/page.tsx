"use client";

import React from "react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-2xl shadow-lg text-black text-center"
      >
        <h1 className="text-3xl font-bold mb-4">Daniel Schembri</h1>
        <p className="text-lg mb-6">
          Network Administrator / Occasional Vegan / Visionary
        </p>
        <motion.img
          src="/DSC05546_v0.jpg"
          alt="My Image"
          className="w-64 h-64 mx-auto mb-4 rounded-full border-4 border-blue-500 shadow-lg object-cover"
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>
    </div>
  );
}
