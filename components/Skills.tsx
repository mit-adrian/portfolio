export default function Skills() {
  return (
    <section id="skills" className="pb-24">
      {/* Section Header */}
      <h2 className="text-3xl font-semibold mb-4">Capabilities</h2>
      <p className="text-slate-400 mb-10 max-w-xl">
        Different ways I can contribute to building, securing, and scaling
        real-world applications.
      </p>

      {/* Horizontal Scroll */}
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
        {/* Card 1 */}
        <div className="min-w-70 snap-start border border-white/10 rounded-lg p-6 hover:border-red-600 transition">
          <h3 className="font-semibold mb-2">Frontend Engineering</h3>
          <p className="text-slate-400 text-sm">
            Building responsive, accessible interfaces using React, Next.js, and
            Tailwind CSS.
          </p>
        </div>

        {/* Card 2 */}
        <div className="min-w-70 snap-start border border-white/10 rounded-lg p-6 hover:border-red-600 transition">
          <h3 className="font-semibold mb-2">Backend Development</h3>
          <p className="text-slate-400 text-sm">
            Designing RESTful APIs with Node.js and Express, following clean
            architecture principles.
          </p>
        </div>

        {/* Card 3 */}
        <div className="min-w-70 snap-start border border-white/10 rounded-lg p-6 hover:border-red-600 transition">
          <h3 className="font-semibold mb-2">Database Design</h3>
          <p className="text-slate-400 text-sm">
            Structuring relational data with PostgreSQL for performance,
            integrity, and scalability.
          </p>
        </div>

        {/* Card 4 */}
        <div className="min-w-70 snap-start border border-white/10 rounded-lg p-6 hover:border-red-600 transition">
          <h3 className="font-semibold mb-2">Application Security</h3>
          <p className="text-slate-400 text-sm">
            Implementing JWT authentication, role-based access control, and
            robust input validation.
          </p>
        </div>
      </div>
    </section>
  );
}
