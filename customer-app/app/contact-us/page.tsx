'use client'

export default function ContactUsPage() {
  return (
    <>
      <main className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 my-10 space-y-6">
        <h1 className="text-2xl font-bold text-[#0057A0]">Contact Us</h1>

        <p className="text-gray-700">
          Have questions or need assistance? Reach out to us through any of the channels below.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-[#0057A0] mb-3">Our Office</h2>
          <p className="text-gray-700">Prime Pillars Real Estate Development Company</p>
          <p className="text-gray-700">Plot 23, Main Street, Victoria Island, Lagos, Nigeria</p>
          <p className="text-gray-700">Phone: +234 800 000 0000</p>
          <p className="text-gray-700">Email: support@primepillars.ng</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#0057A0] mb-3">Business Hours</h2>
          <p className="text-gray-700">Monday – Friday: 9:00am – 5:00pm</p>
          <p className="text-gray-700">Saturday – Sunday: Closed</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#0057A0] mb-3">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0057A0]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0057A0]"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0057A0]"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#0057A0] text-white px-6 py-2 rounded hover:bg-[#003f7a] transition"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
