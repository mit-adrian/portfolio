export default function Contact() {
  return (
    <section id="contact" className="pb-24 text-center">
      <h2 className="text-3xl font-semibold mb-4">Let’s Talk</h2>

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
        <ContactLink href="mailto:appdev.adrian@gmail.com">Email</ContactLink>

        <ContactLink href="https://m.me/YOUR_PAGE_USERNAME" external>
          Messenger
        </ContactLink>

        <ContactLink href="https://www.linkedin.com/in/YOUR_USERNAME/" external>
          LinkedIn
        </ContactLink>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        text-slate-200
        transition-colors duration-200
        hover:text-red-500

        /* Touch devices */
        py-2
        md:py-0

        /* Subtle divider on mobile only */
        border-b border-white/10
        md:border-none
      "
    >
      {children}
    </a>
  );
}
