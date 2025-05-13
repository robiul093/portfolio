import React from "react";

export default function BlogSection() {
  const blogs = [
    {
      title: "5 Tips to Improve Your Frontend Skills",
      description:
        "Explore techniques to write cleaner, faster, and more efficient frontend code using modern frameworks.",
      date: "May 10, 2025",
      link: "#",
    },
    {
      title: "Using Next.js for Scalable Web Applications",
      description:
        "Learn how to structure and optimize your Next.js projects for performance and scalability.",
      date: "April 25, 2025",
      link: "#",
    },
    {
      title: "Tailwind CSS: Utility-First Magic",
      description:
        "Discover how Tailwind can accelerate your development process while keeping your UI consistent.",
      date: "April 8, 2025",
      link: "#",
    },
  ];

  return (
    <div id="blog" className="bg-[#161616] md:px-12 px-8 py-10">
      <h2 className="text-3xl font-bold text-[#70FF00] mb-8">Blog</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((post, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.description}</p>
            </div>
            <div className="mt-auto">
              <a
                href={post.link}
                className="text-[#70FF00] font-medium hover:underline inline-block pt-2"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
