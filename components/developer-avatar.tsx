"use client"

import { motion } from "framer-motion"

export function DeveloperAvatar() {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Main avatar container */}
      <motion.div
        className="relative"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 400 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Background circle */}
          <circle cx="200" cy="200" r="150" fill="url(#bgGradient)" opacity="0.3" />
          
          {/* Laptop */}
          <motion.g
            initial={{ y: 10 }}
            animate={{ y: [10, 0, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Laptop screen */}
            <rect x="100" y="260" width="200" height="130" rx="8" fill="#1e1b4b" />
            <rect x="110" y="270" width="180" height="100" rx="4" fill="#312e81" />
            
            {/* Code lines on screen */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <rect x="120" y="285" width="60" height="6" rx="3" fill="#a78bfa" />
              <rect x="120" y="300" width="100" height="6" rx="3" fill="#60a5fa" />
              <rect x="130" y="315" width="80" height="6" rx="3" fill="#34d399" />
              <rect x="130" y="330" width="60" height="6" rx="3" fill="#f472b6" />
              <rect x="120" y="345" width="90" height="6" rx="3" fill="#a78bfa" />
            </motion.g>
            
            {/* Laptop base */}
            <path d="M80 390 L100 390 L100 395 L300 395 L300 390 L320 390 L310 410 L90 410 Z" fill="#1e1b4b" />
            <ellipse cx="200" cy="400" rx="40" ry="4" fill="#312e81" />
          </motion.g>
          
          {/* Character body */}
          <g>
            {/* Hair */}
            <ellipse cx="200" cy="120" rx="75" ry="85" fill="#1a1625" />
            <path d="M130 140 Q130 60 200 50 Q270 60 270 140" fill="#1a1625" />
            
            {/* Face */}
            <ellipse cx="200" cy="140" rx="55" ry="60" fill="#fcd5c0" />
            
            {/* Hair bangs */}
            <path d="M145 110 Q160 130 175 115 Q190 135 205 120 Q220 140 235 125 Q250 145 255 130" 
                  stroke="#1a1625" strokeWidth="20" strokeLinecap="round" fill="none" />
            
            {/* Eyes */}
            <ellipse cx="175" cy="145" rx="12" ry="14" fill="white" />
            <ellipse cx="225" cy="145" rx="12" ry="14" fill="white" />
            <motion.g
              animate={{ x: [0, 2, 0, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <circle cx="177" cy="147" r="6" fill="#4c1d95" />
              <circle cx="227" cy="147" r="6" fill="#4c1d95" />
              <circle cx="179" cy="145" r="2" fill="white" />
              <circle cx="229" cy="145" r="2" fill="white" />
            </motion.g>
            
            {/* Eyebrows */}
            <path d="M160 125 Q175 120 190 125" stroke="#1a1625" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M210 125 Q225 120 240 125" stroke="#1a1625" strokeWidth="3" strokeLinecap="round" fill="none" />
            
            {/* Nose */}
            <path d="M200 155 L198 170 Q200 175 205 172" stroke="#e5a88a" strokeWidth="2" fill="none" />
            
            {/* Smile */}
            <path d="M180 185 Q200 200 220 185" stroke="#c97878" strokeWidth="3" strokeLinecap="round" fill="none" />
            
            {/* Cheeks */}
            <ellipse cx="160" cy="175" rx="10" ry="6" fill="#f5b5a8" opacity="0.5" />
            <ellipse cx="240" cy="175" rx="10" ry="6" fill="#f5b5a8" opacity="0.5" />
            
            {/* Glasses */}
            <rect x="155" y="135" width="40" height="30" rx="4" stroke="#8b5cf6" strokeWidth="3" fill="none" />
            <rect x="205" y="135" width="40" height="30" rx="4" stroke="#8b5cf6" strokeWidth="3" fill="none" />
            <line x1="195" y1="148" x2="205" y2="148" stroke="#8b5cf6" strokeWidth="3" />
            <line x1="155" y1="148" x2="145" y2="145" stroke="#8b5cf6" strokeWidth="2" />
            <line x1="245" y1="148" x2="255" y2="145" stroke="#8b5cf6" strokeWidth="2" />
            
            {/* Neck */}
            <rect x="185" y="195" width="30" height="25" fill="#fcd5c0" />
            
            {/* Body/Sweater */}
            <path d="M140 220 Q140 280 150 300 L250 300 Q260 280 260 220 Q230 210 200 210 Q170 210 140 220" fill="#7c3aed" />
            
            {/* Arms */}
            <path d="M140 230 Q100 260 110 290 L130 280 Q130 260 150 250" fill="#7c3aed" />
            <path d="M260 230 Q300 260 290 290 L270 280 Q270 260 250 250" fill="#7c3aed" />
            
            {/* Hands */}
            <ellipse cx="130" cy="290" rx="15" ry="12" fill="#fcd5c0" />
            <ellipse cx="270" cy="290" rx="15" ry="12" fill="#fcd5c0" />
            
            {/* Sweater collar */}
            <path d="M175 215 L200 235 L225 215" stroke="#6d28d9" strokeWidth="4" fill="none" />
          </g>
          
          {/* Floating elements */}
          <motion.g
            animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* React logo */}
            <g transform="translate(50, 150)">
              <ellipse cx="0" cy="0" rx="25" ry="10" stroke="#61dafb" strokeWidth="2" fill="none" transform="rotate(0)" />
              <ellipse cx="0" cy="0" rx="25" ry="10" stroke="#61dafb" strokeWidth="2" fill="none" transform="rotate(60)" />
              <ellipse cx="0" cy="0" rx="25" ry="10" stroke="#61dafb" strokeWidth="2" fill="none" transform="rotate(120)" />
              <circle cx="0" cy="0" r="5" fill="#61dafb" />
            </g>
          </motion.g>
          
          <motion.g
            animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            {/* Mobile phone */}
            <g transform="translate(320, 180)">
              <rect x="0" y="0" width="35" height="60" rx="6" fill="#1e1b4b" />
              <rect x="3" y="8" width="29" height="44" rx="2" fill="#312e81" />
              <rect x="12" y="3" width="11" height="3" rx="1.5" fill="#312e81" />
              <circle cx="17.5" cy="55" r="3" fill="#312e81" />
            </g>
          </motion.g>
          
          <motion.g
            animate={{ y: [-3, 3, -3], x: [3, -3, 3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            {/* Code brackets */}
            <g transform="translate(330, 100)">
              <text x="0" y="0" fill="#a78bfa" fontSize="28" fontFamily="monospace">{"{ }"}</text>
            </g>
          </motion.g>
          
          {/* Sparkles */}
          <motion.g
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            <circle cx="80" cy="100" r="3" fill="#a78bfa" />
          </motion.g>
          <motion.g
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <circle cx="320" cy="130" r="4" fill="#60a5fa" />
          </motion.g>
          <motion.g
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <circle cx="60" cy="250" r="3" fill="#34d399" />
          </motion.g>
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  )
}
