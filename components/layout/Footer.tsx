import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-20 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Image src="/logo.png" alt="KhakiConsult Logo" width={150} height={40} />
          <p className="text-sm text-gray-600">
            Trusted China product sourcing experts. We help businesses import
            quality products from China with verified suppliers and door-to-door
            delivery.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="#" target="_blank" className="hover:text-blue-600">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="hover:text-blue-600">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="hover:text-blue-600">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-600">
            Email:{" "}
            <a
              href="mailto:info@khakiconsult.com"
              className="underline hover:text-blue-600"
            >
              info@khakiconsult.com
            </a>
          </p>
          <p className="text-sm text-gray-600">
            Phone:{" "}
            <a
              href="tel:+233000000000"
              className="underline hover:text-blue-600"
            >
              +233 000 000 000
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Serving businesses globally from China sourcing to door-to-door
            delivery.
          </p>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Khaki Consult — All rights reserved.
        
      </div>
    </footer>
  );
}
