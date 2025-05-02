import React from 'react'
import { MdDownload } from 'react-icons/md'

export default function Banner() {
    return (
        <div>
            <div
                className="hero place-items-start items-center min-h-screen"
                style={{
                    // backgroundImage: `url(${banner})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content md:p-24">
                    <div className="max-w-lg text-left">
                        <h1 className="mb-2 text-5xl font-bold"><span className="text-3xl font-medium ">Robiul </span><br />Hasan</h1>
                        <p className="mb-5 text-xl tracking-[8px]">FRONTEND DEVELOPER</p>

                        <p className="">I am a passionate front-end developer specializing in creating responsive, user-friendly web applications using React. With a strong foundation in HTML, CSS, and JavaScript, I love turning ideas into interactive digital experiences. Let's build something amazing together!</p>

                        <div className="flex gap-7 mt-5">
                            <button className="btn font-normal bg-transparent text-white hover:bg-black hover:bg-opacity-35 border-2 tracking-[1.5px]">Resume <MdDownload className='text-xl'/></button>
                            <button className="btn font-normal bg-transparent text-white hover:bg-black hover:bg-opacity-35 border-2">Let's Talk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
