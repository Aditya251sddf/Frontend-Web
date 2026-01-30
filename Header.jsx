import starLogo from "../assets/star.svg";

export default function Navbar() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-6">
      <nav className="flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={starLogo} alt="Positivus logo" className="w-6 h-6" />
          <span className="text-xl font-bold">Positivus</span>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">About us</li>
          <li className="hover:text-black cursor-pointer">Services</li>
          <li className="hover:text-black cursor-pointer">Use Cases</li>
          <li className="hover:text-black cursor-pointer">Pricing</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <button className="border border-black px-5 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white transition">
            Request a quote
          </button>
        </div>

      </nav>
    </header>
  );
}

