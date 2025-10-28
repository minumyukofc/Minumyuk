import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { Button } from "./ui/button";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    url: "https://instagram.com/minumyuk_",
    color: "hover:bg-pink-500"
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle className="w-5 h-5" />,
    url: "https://wa.me/6285373990853",
    color: "hover:bg-green-500"
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    url: "mailto:minumyukzz04@gmail.com",
    color: "hover:bg-red-500"
  }
];

export function SocialLinks() {
  return (
    <div className="flex gap-3 justify-center">
      {socialLinks.map((social) => (
        <a 
          key={social.name} 
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Button 
            variant="outline" 
            size="icon"
            className={`transition-all duration-300 ${social.color} hover:text-white group-hover:scale-110`}
          >
            {social.icon}
            <span className="sr-only">{social.name}</span>
          </Button>
        </a>
      ))}
    </div>
  );
}
