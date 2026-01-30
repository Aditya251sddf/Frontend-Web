export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <p className="text-gray-400 text-sm">
            We build modern digital products with clean UI and scalable code.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-sm outline-none"
            />
            <button className="bg-green-500 text-black px-4 rounded text-sm font-medium">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-gray-500 text-sm">
        © 2026 Company Name. All rights reserved.
      </div>
    </footer>
  );
}
