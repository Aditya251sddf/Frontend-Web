export default function Partners() {
  const partners = [
    "Amazon",
    "Dribbble",
    "HubSpot",
    "Notion",
    "Netflix",
    "Zoom",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-between items-center gap-6 opacity-70">
        {partners.map((name) => (
          <span
            key={name}
            className="text-lg font-semibold tracking-wide"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
