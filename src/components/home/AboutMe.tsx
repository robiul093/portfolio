import Image from "next/image";
import image from "../../../public/aboutMeImg.jpg";

export default function AboutMe() {
  return (
    <div id="about">
      <section
        style={{
          background:
            "linear-gradient(to right, #000000 0%, #272727 50%, #494949 100%)",
        }}
        id="about-me"
        className="py-16"
      >
        <div className="mx-auto flex flex-col md:flex-row-reverse items-center md:px-12 px-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src={image}
            //   width={400}
            //   height={400}
              alt="aboutMe"
              className="rounded-full shadow-lg w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] object-cover"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#70FF00] mb-4">
              About Me()
            </h2>

            {/* Brief Introduction */}
            <p data-aos="fade-right" className="text-[#F2F2F2] mb-6 text-justify text-lg">
              I&apos;m Robiul Hasan, currently a 4th-year student pursuing a BSc
              Honors in Mathematics at the National University. My passion for
              problem-solving led me to front-end development, where I enjoy
              creating interactive and responsive web applications using React.
              With a blend of analytical skills from my mathematics background
              and creativity in coding, I&apos;m always eager to learn and grow as a
              developer. I aim to build user-friendly digital experiences that
              make a difference.
            </p>

            {/* Personal Touch */}
            <p data-aos="fade-down" className="text-gray-300 italic">
            &ldquo;Coding for me is not just about building websites; it&apos;s about
              solving real-world problems and creating seamless digital
              experiences. I thrive on challenges and am constantly looking for
              opportunities to learn new technologies and improve my craft.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
