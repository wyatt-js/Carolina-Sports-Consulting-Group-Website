import './index.css'

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-white)] mb-6">
            Connecting Brands With The Next <span className="text-[var(--color-secondary)]">Generation</span>
          </h1>
          <p className="text-[var(--color-gray)] text-lg mb-6">
            CSCG is...
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-white bg-[var(--color-secondary)] rounded-lg font-semibold hover:bg-white hover:text-[var(--color-secondary)] transition"
          >
            Contact Us
          </a>
        </div>  

        <div className="flex justify-center">
          <img
            src="/fellas.png"
            className="max-h-[500px] w-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
    );
}