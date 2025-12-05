"use client";

export default function ContactPage() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center px-6 bg-gray-50">
      <div className="text-center max-w-lg bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Get in Touch with KhakiConsult
        </h1>
        <p className="text-gray-700 mb-6">
          Need help sourcing products from China? Chat with our team directly on
          WhatsApp for fast support.
        </p>
        <a
          href="https://wa.me/233000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </main>
  );
}
