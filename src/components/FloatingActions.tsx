import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const PHONE_NUMBER = "+919945224243"; // change
const WHATSAPP_NUMBER = "919945224243"; // change (no +)

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: "Call Now",
      icon: Phone,
      bg: "bg-green-500",
      href: `tel:${PHONE_NUMBER}`,
      external: true,
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      bg: "bg-emerald-500",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      external: true,
    },
    {
      label: "Book Appointment",
      icon: Calendar,
      bg: "bg-sky-500",
      href: "/register",
      external: false,
    },
  ];

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((item, index) => {
            const Icon = item.icon;

            const content = (
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <span className="bg-white text-sm font-medium px-4 py-2 rounded-full shadow">
                  {item.label}
                </span>

                <div
                  className={`w-12 h-12 rounded-full ${item.bg} text-white flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </motion.div>
            );

            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={item.label} to={item.href}>
                {content}
              </Link>
            );
          })}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen((p) => !p)}
        className="w-14 h-14 rounded-full bg-slate-700 text-white flex items-center justify-center shadow-xl"
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Plus className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
