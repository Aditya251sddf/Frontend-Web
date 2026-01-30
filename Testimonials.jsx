export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              “Great service and clean UI work.”
            </p>
            <h4 className="font-semibold">Client One</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              “Very professional and responsive.”
            </p>
            <h4 className="font-semibold">Client Two</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">
              “Highly recommend this team.”
            </p>
            <h4 className="font-semibold">Client Three</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
