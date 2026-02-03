export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-100 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <span className="font-semibold text-white">Adrian Karlo</span>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-200">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>

        {/* 🔥 CTA BUTTON — Same as About Me, red on hover */}
        <a
          href="#contact"
          className="
            border border-white/40 
            hover:border-red-500 
            hover:bg-red-500 
            text-white 
            text-sm 
            px-5 py-2 
            rounded-md 
            font-medium 
            transition
          "
        >
          Let&rsquo;s Start Your Project
        </a>
      </div>
    </header>
  );
}
