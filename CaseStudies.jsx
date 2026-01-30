export default function CaseStudies() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Case Studies</h2>
        <p className="text-gray-600 max-w-xl mt-2">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-black text-white rounded-3xl p-8">
          <p className="text-sm text-gray-300 mb-6">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a href="#" className="text-lime-400 font-semibold">
            Learn more →
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-black text-white rounded-3xl p-8">
          <p className="text-sm text-gray-300 mb-6">
            For a B2B software company, we developed an SEO strategy that resulted
            in a first page ranking for key keywords and a 200% increase in
            organic traffic.
          </p>
          <a href="#" className="text-lime-400 font-semibold">
            Learn more →
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-black text-white rounded-3xl p-8">
          <p className="text-sm text-gray-300 mb-6">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a href="#" className="text-lime-400 font-semibold">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
}
