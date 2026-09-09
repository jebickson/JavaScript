import React, { useState } from 'react';
import { Send, Copy, Check, Terminal, Mail, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSoundEffects } from '../../hooks/useSoundEffects';

const PROJECT_TYPES = [
  '3D Web App / WebGL',
  'Design System / Architecture',
  'Creative Dev / Awwwards',
  'Consulting / Advisory',
];

export const ContactTerminal: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '3D Web App / WebGL',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const { playHover, playClick, playSuccessChime } = useSoundEffects();

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText('kaelen.vance.architect@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Identity identifier required';
    if (!formData.email.trim()) {
      newErrors.email = 'Transmission channel required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid frequency/email syntax';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Payload must exceed 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate cyber network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSuccessChime();

      // Confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f0ff', '#a855f7', '#10b981', '#ffffff'],
      });
    }, 1200);
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-space-950/90 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>COMM_TERMINAL // SECURE TRANSMISSION CHANNEL</span>
          </span>
        </div>

        {/* Quick Email Copy */}
        <button
          onClick={handleCopyEmail}
          onMouseEnter={playHover}
          aria-label="Copy direct contact email"
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass-pill text-xs font-mono text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-cyber-emerald" />
              <span className="text-cyber-emerald">COPIED TO CLIPBOARD</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>kaelen.vance.architect@gmail.com</span>
            </>
          )}
        </button>
      </div>

      {/* Main Terminal Form Body */}
      <div className="p-6 sm:p-10">
        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/40 flex items-center justify-center text-cyber-emerald mb-4 animate-bounce">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Transmission Confirmed
            </h3>
            <p className="text-sm font-mono text-slate-300 max-w-md mb-6">
              Packet received. Response telemetry will initialize within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  projectType: PROJECT_TYPES[0],
                  message: '',
                });
              }}
              className="px-6 py-2 rounded-xl glass-pill text-xs font-mono text-cyber-cyan hover:border-cyber-cyan transition-colors"
            >
              Send New Transmission
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Type Selectors */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Project Category / Objective
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = formData.projectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        playClick();
                        setFormData({ ...formData, projectType: type });
                      }}
                      onMouseEnter={playHover}
                      className={`p-2.5 rounded-xl text-xs font-mono text-left transition-all border ${
                        isSelected
                          ? 'bg-cyber-cyan/15 border-cyber-cyan text-cyber-cyan font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                          : 'bg-space-950/40 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name & Email inputs */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                  Your Identifier (Name)
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className={`w-full px-4 py-3 rounded-xl bg-space-950/70 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-rose-500 focus:border-rose-400'
                      : 'border-white/10 focus:border-cyber-cyan'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs font-mono text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                  Transmission Frequency (Email)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@studio.design"
                  className={`w-full px-4 py-3 rounded-xl bg-space-950/70 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-rose-500 focus:border-rose-400'
                      : 'border-white/10 focus:border-cyber-cyan'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs font-mono text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Message payload */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Project Payload (Scope, Timeline, Technical Goals)
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your vision, technological challenges, or architectural requirements..."
                className={`w-full px-4 py-3 rounded-xl bg-space-950/70 border text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors ${
                  errors.message
                    ? 'border-rose-500 focus:border-rose-400'
                    : 'border-white/10 focus:border-cyber-cyan'
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs font-mono text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                <span>Encrypted 256-bit Web Transmission</span>
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={playHover}
                className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyber-cyan via-sky-400 to-cyber-purple text-space-950 font-bold font-mono text-sm tracking-wider hover:opacity-90 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-50 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>TRANSMITTING PACKET...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>INITIALIZE TRANSMISSION</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
