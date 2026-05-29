'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Thermometer, RotateCcw, Play, Pause } from 'lucide-react';
import LeafCanvas from '@/components/LeafCanvas';

const CIRCUMFERENCE = 2 * Math.PI * 130;

function SteamLine({ delay }) {
  return (
    <motion.span
      className="block w-1 h-12 bg-[#EBDAB0]/20 rounded-full filter blur-[1px]"
      animate={{
        y: [0, -45],
        scaleX: [1, 1.5, 0.5],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: 2.8,
        ease: 'easeInOut',
        delay,
        repeat: Infinity,
      }}
    />
  );
}

export default function BrewTimer() {
  const [timerDuration, setTimerDuration] = useState(180);
  const [timerRemaining, setTimerRemaining] = useState(180);
  const [isRunning, setIsRunning] = useState(false);
  const [temperature, setTemperature] = useState('80°C / 175°F');
  const [selectedPreset, setSelectedPreset] = useState('green');

  useEffect(() => {
    let interval;
    if (isRunning && timerRemaining > 0) {
      interval = setInterval(() => {
        setTimerRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerRemaining]);

  const setTimerPreset = (type, duration, temp) => {
    setSelectedPreset(type);
    setTimerDuration(duration);
    setTimerRemaining(duration);
    setTemperature(temp);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimerRemaining(timerDuration);
  };

  const minutes = Math.floor(timerRemaining / 60);
  const seconds = timerRemaining % 60;
  const progress = timerRemaining / timerDuration;
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  const presets = [
    { type: 'green', duration: 180, temp: '80°C / 175°F', label: 'Green Tea' },
    { type: 'oolong', duration: 300, temp: '90°C / 195°F', label: 'Oolong' },
    { type: 'herbal', duration: 420, temp: '100°C / 212°F', label: 'Herbal' },
  ];

  let statusText = 'Ready to brew';
  if (isRunning) {
    statusText = 'Steeping your tea...';
  } else if (timerRemaining === 0 && timerDuration > 0) {
    statusText = 'Brew complete! Enjoy ✨';
  } else if (timerRemaining > 0 && timerRemaining < timerDuration) {
    statusText = 'Brew paused';
  }

  return (
    <section id="timer" className="py-28 px-6 relative z-10 overflow-hidden bg-stone-950 text-stone-100 border-t border-stone-900">
      
      {/* 🍃 Canvas Backdrop */}
      <LeafCanvas />

      {/* Dark Luxury Radial Aura */}
      <div className="absolute right-1/4 bottom-10 w-[500px] h-[500px] bg-[#EBDAB0]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side: Text Controls */}
        <motion.div
          className="md:col-span-6 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#EBDAB0] font-semibold block">
              Sensory Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#F4EADE] font-medium tracking-wide leading-tight">
              Interactive Steep Guide
            </h2>
            <p className="text-stone-400 font-light text-sm leading-relaxed max-w-xl">
              Correct steeping extracts the ultimate balance of complex flavor notes without
              bringing any bitterness. Choose your preferred premium tea blend, set up your teapot, and hit start.
            </p>
          </div>

          {/* Premium Selector Tabs */}
          <div className="grid grid-cols-3 gap-3 max-w-md">
            {presets.map((preset) => (
              <motion.button
                key={preset.type}
                onClick={() => setTimerPreset(preset.type, preset.duration, preset.temp)}
                className={`px-2 py-3.5 rounded-xl border text-[11px] uppercase tracking-widest font-semibold text-center transition-all duration-300 ${
                  selectedPreset === preset.type
                    ? 'bg-[#EBDAB0] text-stone-950 border-transparent shadow-xl'
                    : 'bg-stone-900/60 text-stone-400 border-stone-800 hover:text-stone-200 hover:border-stone-700'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {preset.label}
              </motion.button>
            ))}
          </div>

          {/* Temperature Status Box */}
          <motion.div
            className="flex items-center space-x-4 bg-stone-900/40 border border-stone-800 p-4 rounded-xl max-w-md shadow-lg"
            layout
          >
            <div className="p-2.5 bg-stone-950 border border-stone-800 rounded-lg text-[#EBDAB0]">
              <Thermometer className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[10px] block text-stone-500 uppercase tracking-widest font-bold">
                Recommended Temperature
              </span>
              <motion.span
                key={temperature}
                className="font-serif text-base text-[#F4EADE] font-medium block mt-0.5"
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {temperature}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Circular Timer Ring Showcase */}
        <motion.div
          className="md:col-span-6 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Pure Dark Dial Sphere */}
          <div className="relative w-80 h-80 rounded-full border border-stone-900 bg-stone-900/30 backdrop-blur-md flex items-center justify-center shadow-2xl">
            
            <AnimatePresence>
              {isRunning && (
                <motion.div
                  className="absolute -top-12 flex space-x-2.5 z-0"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <SteamLine delay={0} />
                  <SteamLine delay={0.7} />
                  <SteamLine delay={1.4} />
                </motion.div>
              )}
            </AnimatePresence>

            <svg className="absolute inset-0 w-full h-full transform -rotate-90 scale-[1.01]">
              <circle
                cx="160"
                cy="160"
                r="130"
                stroke="#1c1917"
                strokeWidth="4"
                fill="transparent"
              />
              <motion.circle
                cx="160"
                cy="160"
                r="130"
                stroke="#EBDAB0"
                strokeWidth="4"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray={CIRCUMFERENCE}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1, ease: 'linear' }}
              />
            </svg>

            <div className="text-center z-10 space-y-1 select-none">
              <motion.span
                key={`${minutes}:${seconds}`}
                className="text-5xl font-extralight font-serif tracking-widest text-[#F4EADE] block tabular-nums"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
              </motion.span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#EBDAB0] font-bold block">
                {statusText}
              </span>
            </div>
          </div>

          {/* Controls Hook */}
          <div className="flex items-center space-x-4 mt-10">
            <motion.button
              onClick={toggleTimer}
              className="px-10 py-4 bg-[#EBDAB0] text-stone-950 text-xs uppercase tracking-widest font-bold rounded-full hover:bg-stone-900 hover:text-[#EBDAB0] border border-transparent hover:border-[#EBDAB0]/30 transition-all duration-300 shadow-xl flex items-center gap-2.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isRunning ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              {isRunning ? 'Pause' : timerRemaining === 0 ? 'Restart' : 'Start'} Brew
            </motion.button>
            
            <motion.button
              onClick={resetTimer}
              className="p-4 border border-stone-800 bg-stone-900/60 rounded-full text-stone-400 hover:text-[#EBDAB0] hover:border-[#EBDAB0]/30 transition-all duration-300 focus:outline-none flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-4 h-4 stroke-[2]" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}