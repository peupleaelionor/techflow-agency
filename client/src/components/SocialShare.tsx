import { Reveal } from "./Reveal";
import { Share2, Twitter, Linkedin, Mail, Copy } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "hover:bg-blue-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:bg-blue-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
      color: "hover:bg-red-500"
    }
  ];

  return (
    <Reveal width="100%">
      <div className="border-4 border-black dark:border-[#CCFF00] bg-[#F0F0F0] dark:bg-gray-900 p-8 my-12">
        <div className="flex items-center gap-3 mb-6">
          <Share2 size={24} />
          <h3 className="text-2xl font-black uppercase">Partager cet article</h3>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {shareLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 bg-white dark:bg-black border-2 border-black dark:border-[#CCFF00] font-bold uppercase transition-all ${link.color} dark:hover:bg-[#CCFF00] dark:hover:text-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
              >
                <Icon size={18} />
                {link.name}
              </a>
            );
          })}
          
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-6 py-3 bg-white dark:bg-black border-2 border-black dark:border-[#CCFF00] font-bold uppercase transition-all ${copied ? 'bg-[#CCFF00] text-black' : 'hover:bg-[#CCFF00]'} dark:hover:bg-[#CCFF00] dark:hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
          >
            <Copy size={18} />
            {copied ? "Copié !" : "Copier le lien"}
          </button>
        </div>
      </div>
    </Reveal>
  );
}
