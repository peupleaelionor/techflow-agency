import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, TrendingUp, Users } from "lucide-react";

const ACTIVITIES = [
  { name: "Jean D.", city: "Paris", action: "a demandé un audit", type: "audit" },
  { name: "Sarah L.", city: "Londres", action: "a lancé un projet Web", type: "project" },
  { name: "Marc B.", city: "Lyon", action: "a rejoint le programme Scale", type: "join" },
  { name: "Emma W.", city: "New York", action: "a réservé une consultation", type: "call" },
  { name: "Thomas R.", city: "Bordeaux", action: "a téléchargé le guide", type: "download" },
  { name: "Sophie M.", city: "Paris", action: "a signé pour un redesign", type: "project" },
  { name: "David K.", city: "Berlin", action: "a demandé un devis", type: "quote" },
  { name: "Julie P.", city: "Marseille", action: "a optimisé son SEO", type: "success" },
];

export default function SocialProof() {
  const [notification, setNotification] = useState<typeof ACTIVITIES[0] | null>(null);

  useEffect(() => {
    // Initial delay
    const initialTimeout = setTimeout(() => {
      triggerNotification();
    }, 4000);

    // Loop
    const interval = setInterval(() => {
      triggerNotification();
    }, 15000 + Math.random() * 10000); // Random interval between 15s and 25s

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const triggerNotification = () => {
    const randomActivity = ACTIVITIES[Math.floor(Math.random() * ACTIVITIES.length)];
    setNotification(randomActivity);

    // Hide after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  if (!notification) return null;

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: 0 }}
          className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 max-w-xs w-full"
        >
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#CCFF00] p-4 flex items-center gap-4 relative overflow-hidden">
            {/* Icon based on type */}
            <div className="bg-black text-[#CCFF00] p-2 flex-shrink-0">
              {notification.type === 'audit' && <TrendingUp size={20} />}
              {notification.type === 'project' && <CheckCircle size={20} />}
              {notification.type === 'join' && <Users size={20} />}
              {['call', 'quote', 'download', 'success'].includes(notification.type) && <CheckCircle size={20} />}
            </div>
            
            <div className="flex-grow">
              <p className="font-bold uppercase text-sm">{notification.name} <span className="text-gray-500 text-xs normal-case">({notification.city})</span></p>
              <p className="font-mono text-xs text-gray-700 mt-1">{notification.action}</p>
            </div>

            {/* Close button (optional, but auto-close is better for this UX) */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#CCFF00] border-l-2 border-b-2 border-black"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
