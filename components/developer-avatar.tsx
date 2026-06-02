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
          viewBox="0 0 400 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Background circle */}
          <circle cx="200" cy="210" r="160" fill="url(#bgGradient)" opacity="0.25" />

          {/* ── LAPTOP ── */}
          <motion.g
            animate={{ y: [4, 0, 4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="95"  y="310" width="210" height="125" rx="10" fill="#1e1b4b" />
            <rect x="106" y="320" width="188" height="96"  rx="5"  fill="#312e81" />
            <motion.g
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <rect x="116" y="333" width="55"  height="5" rx="2.5" fill="#a78bfa" />
              <rect x="116" y="346" width="95"  height="5" rx="2.5" fill="#60a5fa" />
              <rect x="126" y="359" width="75"  height="5" rx="2.5" fill="#34d399" />
              <rect x="126" y="372" width="55"  height="5" rx="2.5" fill="#f472b6" />
              <rect x="116" y="385" width="85"  height="5" rx="2.5" fill="#a78bfa" />
            </motion.g>
            <path d="M75 435 L95 435 L95 440 L305 440 L305 435 L325 435 L315 455 L85 455 Z" fill="#1e1b4b" />
            <ellipse cx="200" cy="445" rx="38" ry="4" fill="#312e81" />
          </motion.g>

          {/* ── BODY / HOODIE ── */}
          <g>
            <path
              d="M138 268 Q120 290 118 320 L282 320 Q280 290 262 268 Q238 255 200 255 Q162 255 138 268Z"
              fill="#9333ea"
            />
            {/* Hoodie pocket */}
            <path d="M172 295 Q200 303 228 295 L228 318 Q200 322 172 318Z" fill="#7e22ce" />
            {/* Arms */}
            <path d="M138 272 Q96 300 104 336 L128 324 Q126 306 148 290Z" fill="#9333ea" />
            <path d="M262 272 Q304 300 296 336 L272 324 Q274 306 252 290Z" fill="#9333ea" />
            {/* Hands */}
            <ellipse cx="116" cy="338" rx="14" ry="11" fill="#f9c5a8" />
            <ellipse cx="284" cy="338" rx="14" ry="11" fill="#f9c5a8" />
            {/* Hoodie neckline V */}
            <path d="M178 260 L200 282 L222 260" stroke="#7e22ce" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>

          {/* ── NECK ── */}
          <rect x="186" y="238" width="28" height="24" rx="4" fill="#f9c5a8" />

          {/* ── HEAD ── */}
          <g>
            {/* Long hair — back layer */}
            <ellipse cx="200" cy="155" rx="78" ry="88" fill="#2d1b69" />
            {/* Hair flowing down sides */}
            <path d="M124 155 Q112 200 118 250 Q130 260 148 255 Q138 220 136 175Z" fill="#2d1b69" />
            <path d="M276 155 Q288 200 282 250 Q270 260 252 255 Q262 220 264 175Z" fill="#2d1b69" />
            {/* Hair top arch */}
            <path d="M128 158 Q128 72 200 60 Q272 72 272 158" fill="#2d1b69" />

            {/* Face skin */}
            <ellipse cx="200" cy="168" rx="58" ry="65" fill="#f9c5a8" />

            {/* Forehead base — solid hair fill, no skin gap */}
            <rect x="148" y="108" width="104" height="36" fill="#2d1b69" />

            {/* Hair bangs — wavy */}
            <path
              d="M148 106 Q163 128 178 112 Q193 134 208 116 Q223 138 238 120 Q250 138 252 122"
              stroke="#2d1b69"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />

            {/* Hair highlight streak */}
            <path d="M172 72 Q180 90 176 115" stroke="#6d28d9" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.5" />

            {/* Eyebrows — thin arched */}
            <path d="M162 148 Q176 142 190 147" stroke="#4a2040" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M210 147 Q224 142 238 148" stroke="#4a2040" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Eyes white */}
            <ellipse cx="176" cy="163" rx="13" ry="15" fill="white" />
            <ellipse cx="224" cy="163" rx="13" ry="15" fill="white" />

            {/* Irises */}
            <motion.g animate={{ x: [0, 1.5, 0, -1.5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              <circle cx="176" cy="165" r="7.5" fill="#5b21b6" />
              <circle cx="224" cy="165" r="7.5" fill="#5b21b6" />
              <circle cx="179" cy="162" r="2.5" fill="white" opacity="0.9" />
              <circle cx="227" cy="162" r="2.5" fill="white" opacity="0.9" />
              <circle cx="174" cy="168" r="1.2" fill="white" opacity="0.5" />
              <circle cx="222" cy="168" r="1.2" fill="white" opacity="0.5" />
            </motion.g>

            {/* Eyelashes top */}
            <path d="M163 157 Q168 153 172 150 M176 155 L176 150 M180 157 Q184 153 187 150" stroke="#2d1b69" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M211 157 Q216 153 219 150 M224 155 L224 150 M228 157 Q232 153 235 150" stroke="#2d1b69" strokeWidth="1.5" strokeLinecap="round" fill="none" />

            {/* Glasses — round frames */}
            <circle cx="176" cy="163" r="17" stroke="#c084fc" strokeWidth="2.5" fill="none" opacity="0.85" />
            <circle cx="224" cy="163" r="17" stroke="#c084fc" strokeWidth="2.5" fill="none" opacity="0.85" />
            <line x1="193" y1="163" x2="207" y2="163" stroke="#c084fc" strokeWidth="2" />
            <line x1="159" y1="160" x2="148" y2="157" stroke="#c084fc" strokeWidth="1.8" />
            <line x1="241" y1="160" x2="252" y2="157" stroke="#c084fc" strokeWidth="1.8" />

            {/* Nose */}
            <path d="M200 175 L198 188 Q200 193 204 190" stroke="#e8967a" strokeWidth="1.8" fill="none" strokeLinecap="round" />

            {/* Lips */}
            <path d="M184 202 Q192 196 200 198 Q208 196 216 202 Q208 212 200 213 Q192 212 184 202Z" fill="#e06090" />
            <path d="M184 202 Q192 205 200 204 Q208 205 216 202" stroke="#c04878" strokeWidth="1" fill="none" />
            <ellipse cx="196" cy="204" rx="5" ry="2" fill="#f090b8" opacity="0.5" />

            {/* Blush cheeks */}
            <ellipse cx="154" cy="188" rx="13" ry="8" fill="#f4a0b0" opacity="0.35" />
            <ellipse cx="246" cy="188" rx="13" ry="8" fill="#f4a0b0" opacity="0.35" />

            {/* Earrings */}
            <circle cx="140" cy="178" r="5"   fill="#c084fc" opacity="0.9" />
            <circle cx="140" cy="178" r="2.5" fill="white"   opacity="0.7" />
            <circle cx="260" cy="178" r="5"   fill="#c084fc" opacity="0.9" />
            <circle cx="260" cy="178" r="2.5" fill="white"   opacity="0.7" />
          </g>

          {/* ── FLOATING ELEMENTS ── */}

          {/* React logo */}
          <motion.g
            animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <g transform="translate(50, 160)">
              <ellipse cx="0" cy="0" rx="26" ry="10" stroke="#61dafb" strokeWidth="2" fill="none" />
              <ellipse cx="0" cy="0" rx="26" ry="10" stroke="#61dafb" strokeWidth="2" fill="none" transform="rotate(60)" />
              <ellipse cx="0" cy="0" rx="26" ry="10" stroke="#61dafb" strokeWidth="2" fill="none" transform="rotate(120)" />
              <circle cx="0" cy="0" r="5" fill="#61dafb" />
            </g>
          </motion.g>

          {/* Mobile */}
          <motion.g
            animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <g transform="translate(322, 185)">
              <rect x="0" y="0" width="34" height="58" rx="6" fill="#1e1b4b" />
              <rect x="3" y="7" width="28" height="42" rx="2" fill="#312e81" />
              <rect x="11" y="2" width="12" height="3" rx="1.5" fill="#312e81" />
              <circle cx="17" cy="53" r="3" fill="#312e81" />
            </g>
          </motion.g>

          {/* Code brackets */}
          <motion.g
            animate={{ y: [-3, 3, -3], x: [3, -3, 3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <g transform="translate(328, 108)">
              <text x="0" y="0" fill="#a78bfa" fontSize="26" fontFamily="monospace">{"{ }"}</text>
            </g>
          </motion.g>

          {/* Sparkles */}
          <motion.circle cx="78"  cy="105" r="3"   fill="#a78bfa" animate={{ opacity: [0,1,0], scale: [0.7,1.3,0.7] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0   }} />
          <motion.circle cx="322" cy="135" r="4"   fill="#60a5fa" animate={{ opacity: [0,1,0], scale: [0.7,1.3,0.7] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }} />
          <motion.circle cx="58"  cy="260" r="3"   fill="#34d399" animate={{ opacity: [0,1,0], scale: [0.7,1.3,0.7] }} transition={{ duration: 2.2, repeat: Infinity, delay: 1   }} />
          <motion.circle cx="340" cy="260" r="3"   fill="#f472b6" animate={{ opacity: [0,1,0], scale: [0.7,1.3,0.7] }} transition={{ duration: 2.2, repeat: Infinity, delay: 1.5 }} />
          <motion.circle cx="105" cy="70"  r="2.5" fill="#fbbf24" animate={{ opacity: [0,1,0], scale: [0.7,1.3,0.7] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }} />

          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#c084fc" stopOpacity="0.35" />
              <stop offset="50%"  stopColor="#818cf8" stopOpacity="0.2"  />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1"  />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  )
}