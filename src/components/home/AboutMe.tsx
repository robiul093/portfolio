import Image from "next/image";
import image from "../../../public/aboutMeImg.jpg";

export default function AboutMe() {
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(to right, #000000 0%, #272727 50%, #494949 100%)",
        }}
        id="about-me"
        className="py-16"
      >
        <div className="mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center">
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
          <div className="w-full md:w-1/2 md:pl-10">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#70FF00] mb-4">
              About Me()
            </h2>

            {/* Brief Introduction */}
            <p className="text-[#F2F2F2] mb-6 text-justify text-lg">
              I&apos;m Robiul Hasan, currently a 4th-year student pursuing a BSc
              Honors in Mathematics at the National University. My passion for
              problem-solving led me to front-end development, where I enjoy
              creating interactive and responsive web applications using React.
              With a blend of analytical skills from my mathematics background
              and creativity in coding, I&apos;m always eager to learn and grow as a
              developer. I aim to build user-friendly digital experiences that
              make a difference.
            </p>

            {/* Skills Section */}
            {/* <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  <FaReact size={30} className="text-blue-500" />
                  <span>React</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                  <FaJs size={30} className="text-yellow-500" />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                  <FaHtml5 size={30} className="text-orange-500" />
                  <span>HTML</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  <FaCss3Alt size={30} className="text-blue-700" />
                  <span>CSS</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full">
                  <SiTailwindcss size={30} className="text-teal-500" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                  <SiFirebase size={30} className="text-yellow-500" />
                  <span>Firebase</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 rounded-full">
                  <SiMongodb size={30} className="text-green-500" />
                  <span>MongoDB CRUD</span>
                </div>
              </div>
            </div> */}

            {/* Personal Touch */}
            <p className="text-gray-300 italic">
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
