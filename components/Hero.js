import { AiFillLinkedin, AiOutlineGithub, AiTwotoneMail } from "react-icons/ai";
import Image from "next/image";
import webdev from "../public/web-dev-robertaf.png";
import TypingAnimation from "./TypingAnimation";

function Hero() {
  return (
    <div id="home" className="text-center p-10">
      <h2 className="text-2xl py-2 font-medium dark:text-teal-400">
        Hi, I am Roberta Freitas
      </h2>

      <TypingAnimation />

      <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
        Welcome to my Portfolio.
      </p>

      <div className="text-5xl flex justify-center gap-16 py-5 text-gray-600 dark:text-gray-400">
        <a
          href="https://www.linkedin.com/in/roberta-efreitas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/Roberta-Freitas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a href="mailto:robertaefreitas@gmail.com">
          <AiTwotoneMail />
        </a>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 sm:h-80 sm:w-80 flex justify-center items-center overflow-hidden">
          <div>
            <Image src={webdev} alt="Roberta Web Developer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
