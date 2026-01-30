import heroImage from "../assets/heroo-illustration.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media marketing,
            and content creation.
          </p>

          <button className="mt-8 bg-black text-white px-7 py-4 rounded-md text-sm font-medium">
            Book a consultation
          </button>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="flex justify-end">
          <img
            src={heroImage}
            alt="Hero illustration"
            className="w-full max-w-[520px] h-auto"
          />
        </div>

      </div>
    </section>
  );
}

