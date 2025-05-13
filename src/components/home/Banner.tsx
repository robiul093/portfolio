import Image from "next/image";
import { MdDownload } from "react-icons/md";

export default function Banner() {
  return (
    <div>
      <div
        className="h-[400px] flex justify-between md:px-12 px-8 place-items-start items-center mt-[2px]"
        style={{
          background:
            "linear-gradient(to right, #000000 0%, #272727 50%, #494949 100%)",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="text-neutral-content">
          <div className="max-w-2xl mt-5 text-left">
            <h2 className="text-xl mb-4">Hello, i am</h2>
            <h1 className="mb-2 text-5xl text-[#70FF00] font-bold">
              <span className="">&lt; Robiul </span>
              <br />
              Hasan /&gt;
            </h1>
            <p className="mb-5 text-xl tracking-[8px] mt-4">
              FRONTEND DEVELOPER
            </p>

            <p data-aos="fade-up" className="">
              I am a passionate front-end developer specializing in building
              responsive and dynamic web applications using React, Next.js, and
              modern technologies like Tailwind CSS, TypeScript, and MongoDB.
              With a solid foundation in HTML, CSS, and JavaScript, I enjoy
              transforming ideas into engaging digital experiences. Let&apos;s create
              something amazing together!
            </p>

            <div data-aos="fade-right" className="flex gap-7 mt-5">
              <a
                href="https://drive.google.com/uc?export=download&id=15TkGJXMhsAqmNLmKc3f_A8r3tp65sxJH"
                className="relative btn font-normal bg-transparent text-white border-2 tracking-[1.5px] border-split group rounded-md"
              >
                Resume <MdDownload className="text-xl" />
                <span></span>
                <span className="bottom"></span>
              </a>
              <button className="btn font-normal bg-transparent text-white border-2">
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/profileImg.png"
            width={500}
            height={500}
            alt=""
            className="hidden lg:block max-w-sm rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
