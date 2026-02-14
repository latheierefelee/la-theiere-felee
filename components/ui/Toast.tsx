"use client";

import { useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 border border-kraft bg-creme px-6 py-4 shadow-lg animate-in slide-in-from-bottom-5">
      <CheckCircle className="h-5 w-5 text-kraft flex-shrink-0" />
      <p className="font-sans text-sm text-noir-anthracite">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 text-gris-fonce hover:text-noir-anthracite transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}