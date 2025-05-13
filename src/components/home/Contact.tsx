'use client';

import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d0d0d] px-8 py-10 text-white">
      <div className="">
        <h2 className="text-4xl font-semibold text-[#70FF00] mb-10 pb-2">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div data-aos="zoom-in-right" className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-800">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-[#0f0f0f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#70FF00]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-[#0f0f0f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#70FF00]"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-md bg-[#0f0f0f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#70FF00]"
              ></textarea>
              <button
                type="submit"
                className="w-full relative btn font-normal bg-transparent text-white border-2 tracking-[1.5px] border-split group rounded-md"
              >
                Send Message
                <span></span>
                <span className="bottom"></span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div data-aos="zoom-in-left" className="flex flex-col justify-center bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-800">
            <div className="flex items-center mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-100 hover:text-[#70FF00] mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-400 mb-6 hover:text-[#70FF00]">
                  Whether you want to discuss a project or just say hello, feel free to email me or connect through social platforms.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:robiul093@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#70FF00] transition-colors"
              >
                <Mail size={20} /> robiul093@gmail.com
              </a>
              <a
                href="https://github.com/robiul093"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#70FF00] transition-colors"
              >
                <Github size={20} /> github.com/robiul093
              </a>
              <a
                href="https://www.linkedin.com/in/robiul093/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#70FF00] transition-colors"
              >
                <Linkedin size={20} /> linkedin.com/in/robiul093
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
