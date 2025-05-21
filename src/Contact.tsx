import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Message: ''
  });

  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await fetch('https://usebasin.com/f/79c1542f7938', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Message sent!');
    setForm({ FirstName: '', LastName: '', Email: '', Message: '' });
  };

  return (
    <>
    <div className="bg-[var(--color-black)] text-white flex items-center justify-center">
        <section>
        <div>
            <img src="LogoFull.png" alt="Logo" className="mx-auto mb-8 w-60" />
            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.linkedin.com/company/carolinascg">
                    <img src="LinkedIn.png" alt="LinkedIn" className="h-16 w-16 mb-7" />
                </a>
                <a href="https://www.instagram.com/carolina_sports_consulting/">
                    <img src="Instagram.png" alt="Instagram" className="h-16 w-16" />
                </a>
                </div>
                <h1>© 2025 Carolina Sports Consulting Group</h1>
        </div>
        </section>
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-lg shadow">
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            value={form.FirstName}
            onChange={handleChange}
            required
            className="col-span-1 p-3 border border-gray-300 text-white rounded"
          />
          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            value={form.LastName}
            onChange={handleChange}
            required
            className="col-span-1 p-3 border border-gray-300 text-white rounded"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email Address"
            value={form.Email}
            onChange={handleChange}
            required
            className="col-span-2 p-3 border border-gray-300 text-white rounded"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            value={form.Message}
            onChange={handleChange}
            required
            className="col-span-2 p-3 border border-gray-300 text-white rounded h-40"
          ></textarea>
          <button
            type="submit"
            className="col-span-2 bg-[var(--color-secondary)] text-white font-semibold py-3 rounded hover:bg-[var(--color-primary)] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    </div>
    </>
  );
}
