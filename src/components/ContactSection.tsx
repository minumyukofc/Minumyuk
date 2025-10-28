import { Instagram, Music, Mail, Sparkles } from "lucide-react";

export function ContactSection() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      url: "https://instagram.com/minumyuk_",
      color: "from-pink-500 to-purple-500",
      hoverColor: "hover:from-pink-600 hover:to-purple-600"
    },
    {
      name: "TikTok",
      icon: <Music className="w-8 h-8" />,
      url: "https://tiktok.com/@minumyuk_",
      color: "from-gray-800 to-gray-900",
      hoverColor: "hover:from-gray-900 hover:to-black"
    },
    {
      name: "Email",
      icon: <Mail className="w-8 h-8" />,
      url: "mailto:minumyukzz04@gmail.com",
      color: "from-orange-500 to-red-500",
      hoverColor: "hover:from-orange-600 hover:to-red-600"
    }
  ];

  return (
    <section id="kontak" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-md">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600">Kontak</span>
          </div>
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Yuk, Ikuti Kami!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            Dapatkan update terbaru, promo menarik, dan konten seru lainnya. 
            Jangan sampai ketinggalan ya! ✨
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className={`bg-gradient-to-br ${social.color} ${social.hoverColor} rounded-2xl p-8 text-white text-center transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer`}>
                  <div className="flex justify-center mb-4">
                    {social.icon}
                  </div>
                  <h4 className="text-xl">{social.name}</h4>
                  <p className="text-white/80 mt-2">
                    {social.name === "Email" ? "minumyukzz04@gmail.com" : "@minumyuk_"}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Atau hubungi kami langsung via WhatsApp:
            </p>
            <a 
              href="https://wa.me/6285373990853"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              📱 085373990853
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
