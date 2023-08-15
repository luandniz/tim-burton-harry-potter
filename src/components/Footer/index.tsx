import { BsLinkedin, BsBehance } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div
        className="flex flex-col w-[90%] m-auto justify-center text-gray-400 font-poppins leading-6 space-y-3 text-sm sm:text-base 
      py-[50px]"
      >
        <div className="flex space-x-2 justify-between">
          <div className="h-5 w-[25%] bg-[#0B0A10ff]"></div>
          <div className="h-5 w-[25%] bg-[#381C27ff]"></div>
          <div className="h-5 w-[25%] bg-[#61324Fff]"></div>
          <div className="h-5 w-[25%] bg-[#4D293Bff]"></div>
        </div>

        <p>
          A incorporação das qualidades oníricas e ligeiramente surreais, pelas
          quais Burton é amplamente reconhecido, teve como objetivo criar uma
          experiência de Harry Potter que fosse simultaneamente familiar e
          completamente nova. Acreditamos que esta colaboração proporcionou aos
          fãs de Harry Potter e Tim Burton algo verdadeiramente especial para
          apreciar. Esperamos que este trabalho sirva como inspiração para que
          outras pessoas explorem o potencial de combinar diferentes estéticas
          de maneiras igualmente criativas.
        </p>
        <div className="flex justify-center space-x-5 bg-slate-800 p-4">
          <Link to={"https://www.linkedin.com/in/luan-dniz/"}>
            <BsLinkedin className="text-2xl" />
          </Link>
          <Link
            to={
              "https://www.behance.net/gallery/170607787/Tim-Burtons-Harry-Potter"
            }
          >
            <BsBehance className="text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
