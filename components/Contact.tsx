export default function Contact() {
  return (
    <section id="contact" className="pb-24 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <p className="text-slate-400 mb-6">
        Want to work together or discuss a project?
      </p>

      <div className="flex justify-center gap-6">
        <a href="mailto:your@email.com" className="hover:text-sky-400">
          Email
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="hover:text-sky-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="hover:text-sky-400"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
