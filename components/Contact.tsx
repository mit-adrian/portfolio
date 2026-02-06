import { Mail, MessageCircle, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pb-24 text-center">
      <h2 className="text-3xl font-semibold mb-4">Let’s Start Your Project</h2>

      <p className="text-slate-400 mb-10 max-w-xl mx-auto">
        Have a project in mind or want to discuss a collaboration? Reach out
        through any of the channels below.
      </p>

      {/* Desktop: horizontal | Mobile/Tablet: vertical */}
      <div
        className="
          flex flex-col items-center gap-6
          md:flex-row md:justify-center md:gap-10
          text-base md:text-lg
        "
      >
        <ContactLink
          href="mailto:appdev.adrian@gmail.com"
          icon={<Mail size={18} />}
        >
          Email
        </ContactLink>

        <ContactLink
          href="https://m.me/1079063291946469"
          external
          icon={<MessageCircle size={18} />}
        >
          Messenger
        </ContactLink>

        <ContactLink
          href="https://www.linkedin.com/in/adrian-karlo-siangco-4aa504281/"
          external
          icon={<Linkedin size={18} />}
        >
          LinkedIn
        </ContactLink>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  children,
  icon,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group
        inline-flex items-center gap-2
        text-slate-200

        transition-colors duration-200
        hover:text-red-500

        py-2 md:py-0

        border-b border-white/10
        md:border-none
      "
    >
      <span
        className="
          text-slate-400
          transition-colors duration-200
          group-hover:text-red-500
        "
      >
        {icon}
      </span>
      {children}
    </a>
  );
}
