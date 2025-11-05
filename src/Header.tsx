import './index.css'

export default function Header() {

  return (
    <header className="w-full px-6 py-4 border-b bg-[var(--color-secondary)] shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home">
        <img src='LogoFull.png' alt="Carolina Sports Consulting Group" width="134" height="72"/>
        </a>
        <nav className="flex space-x-6 text-lg font-black">
          <a href="#services" className="hidden md:inline hover:text-[var(--color-primary)] text-white transition pt-2">Services</a>
          <a href="#clients" className="hidden md:inline hover:text-[var(--color-primary)] text-white transition pt-2">Clients</a>
          <a href="#teams" className="hidden md:inline hover:text-[var(--color-primary)] text-white transition pt-2">Teams</a>
          <a
            href="#contact"
            className="inline-block px-4 py-2 text-white bg-[var(--color-primary)] rounded hover:bg-white hover:text-[var(--color-primary)] transition"
          >
            Contact Us
          </a>
        </nav>

      </div>
    </header>
  )
}