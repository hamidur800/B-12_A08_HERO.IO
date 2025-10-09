import React, { Component } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../public/logo.png";
import { NavLink } from "react-router";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-[#001931] text-white py-12 px-6 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <NavLink to={"#"}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="">
                    <img className="h-10 w-10" src={logo} alt="" />
                  </div>
                  <h2 className="text-2xl font-bold">HERO.IO</h2>
                </div>
              </NavLink>
              <p className="text-sm text-gray-100 leading-relaxed">
                Trusted by millions, Bloomify helps you focus, plan and grow.
                Your everyday productivity companion.
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  href="#"
                  className="hover:bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="hover:bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white transition-colors"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-sm text-gray-100 mb-4">
                Join our newsletter to stay updated with new apps & features.
              </p>
              <form className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] py-2 px-3 rounded-sm text-white transition"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-[#E5E7EB] mt-10 pt-6 text-center text-gray-200 text-sm">
            {/* © {new Date().getFullYear()}{" "} */}
            <span className="font-semibold">
              Copyright © 2025 - All right reserved
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
