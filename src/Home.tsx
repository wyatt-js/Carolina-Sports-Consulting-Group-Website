import './index.css';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <img
        src="/playdesign.png"
        alt="Football play background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"      />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center fade-in-up">
        <div>
          <h1 className="text-4xl pt-14 md:text-5xl md:pt-0 font-bold text-[var(--color-white)] mb-6">
            Connecting Brands With The Next <span className="text-[var(--color-secondary)]">Generation</span>
          </h1>
          <p className="text-[var(--color-gray)] text-lg mb-6 fade-in-up">
          Carolina Sports Consulting Group is a student-run organization at UNC that delivers strategic, data-driven solutions to sports industry partners—helping them grow their reach and impact through innovative, real-world consulting.          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-white bg-[var(--color-secondary)] rounded-lg font-semibold hover:bg-white hover:text-[var(--color-secondary)] fade-in-up transition"
          >
            Contact Us
          </a>
          <a
            href="https://docs.google.com/forms/d/1y2qeOSWUZTYnjiQDjbplEpdL4WcBBiQRkA_7Mnr54ik/edit"
            className="inline-block px-6 py-3 text-white bg-[var(--color-black)] rounded-lg font-semibold hover:bg-white hover:text-[var(--color-black)] fade-in-up transition ml-4"
          >
            Apply Now
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src="/tower.png"
            className="max-h-[500px] w-auto rounded-lg shadow-lg z-10"
            alt="Carolina Sports Consulting Group"
          />
        </div>
      </div>
    </div>
  );
}