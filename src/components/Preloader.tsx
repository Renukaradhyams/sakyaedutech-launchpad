import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  phase?: string;
}

const Preloader: React.FC<PreloaderProps> = ({ phase = "loading" }) => {
  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* MAIN CENTER CONTAINER */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: phase === "expanding" ? 1.4 : 1,
              opacity: phase === "expanding" ? 0 : 1,
            }}
            transition={{
              duration: phase === "expanding" ? 0.7 : 1.2,
              ease: "easeOut",
            }}
          >
            {/* LIGHT BACKGROUND CIRCLE */}
            <motion.div
              className="absolute w-[440px] h-[440px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(42,157,219,0.18) 0%, rgba(42,157,219,0.05) 50%, transparent 80%)",
              }}
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* THIN OUTER ROTATING RING */}
            <motion.div
              className="absolute w-[380px] h-[380px] border border-blue-300/70 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* MAIN LOGO IMAGE */}
            <motion.div
              className="relative z-20 mb-1"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/Logo.png"
                alt="Sakya Edu Tech Logo"
                className="w-[240px] object-contain"
              />
            </motion.div>

            {/* SMALL ORBITING DOT */}
            <motion.div
              className="absolute w-3 h-3 bg-[#2A9DDB] rounded-full"
              style={{ top: "12%", left: "50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* TEXT CLOSE TO LOGO */}
            <motion.h1
              className="mt-0 text-3xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-[#0D3B66]">SAKYA  </span>
              <span className="text-[#2A9DDB]">EDUTECH</span>
            </motion.h1>
          </motion.div>

          {/* FLOATING LIGHT PARTICLES */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-15, -100],
                opacity: [0, 0.9, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
