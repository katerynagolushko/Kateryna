import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SocialButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  primary?: boolean;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ href, label, icon, primary = false }) => {
  const baseClasses = "flex items-center justify-between w-full p-4 rounded-xl border transition-all duration-300 group";
  const primaryClasses = "bg-slate-900 text-white border-slate-900 hover:bg-slate-800 hover:shadow-lg";
  const secondaryClasses = "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:shadow-md hover:bg-slate-50";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${primary ? 'text-slate-300' : 'text-slate-400'}`} />
    </a>
  );
};