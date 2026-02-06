export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/projects/bw-new-bg.webp')] bg-cover bg-center pointer-events-none" />

      {/* Top edge shadow */}
      <div
        className="
        absolute top-0 left-0 w-full h-32
        bg-linear-to-b
        from-white/80 dark:from-black/80
        via-white/40 dark:via-black/40
        to-transparent
        pointer-events-none
        z-10
      "
      />

      {/* Overlay */}
      <div
        className="
        absolute inset-0
        bg-white/60 dark:bg-black/60
        pointer-events-none
      "
      />

      {/* Vertical gradient */}
      <div
        className="
        absolute inset-0
        bg-linear-to-t
        from-white dark:from-black
        via-white/40 dark:via-black/40
        to-transparent
        pointer-events-none
      "
      />

      {/* Content */}
      <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center text-center px-6 gap-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white">
          Building Secure & Scalable <br />
          Web Applications
        </h1>

        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
          Hi! I’m{" "}
          <span
            className="
            bg-red-600
            text-white
            font-semibold
            px-2 py-1
            rounded-md
          "
          >
            Adrian
          </span>
          , a full-stack developer — focused on clean architecture, security,
          and real-world systems.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="
              border
              border-black/30 dark:border-white/40
              text-black dark:text-white
              hover:border-red-600
              hover:bg-red-600
              hover:text-white
              px-6 py-3
              rounded-md
              transition
            "
          >
            View Projects
          </a>

          <a
            href="#about"
            className="
              border
              border-black/30 dark:border-white/40
              text-black dark:text-white
              hover:border-red-600
              hover:bg-red-600
              hover:text-white
              px-6 py-3
              rounded-md
              transition
            "
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
