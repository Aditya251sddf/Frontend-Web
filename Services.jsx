export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="rounded-2xl bg-lime-300 p-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Search engine optimization
            </h3>
            <a href="#" className="font-medium underline">
              Learn more
            </a>
          </div>
          <div className="w-16 h-16 bg-black rounded-full" />
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border p-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Pay-per-click advertising
            </h3>
            <a href="#" className="font-medium underline">
              Learn more
            </a>
          </div>
          <div className="w-16 h-16 bg-lime-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}
