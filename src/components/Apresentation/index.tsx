import { useEffect, useState } from "react";

export const ApresentationSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    setScrollY(yOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scrollY);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="text-gray-400 font-poppins mx-auto w-[90%] lg:w-[80%] xl:w-[60%] space-y-2 mb-20">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
        Tim Burton's Harry Potter{" "}
      </h1>
      <section className="leading-7 space-y-3 text-sm sm:text-base">
        <p>
          O projeto que desejo apresentar é uma colaboração entre o designer
          <span
            className={
              scrollY > 400
                ? "font-semibold bg-purple-900 text-white px-1 mx-1 transition ease-linear duration-700"
                : " mx-1"
            }
          >
            Domenico Ruffo e a Midjourney,
          </span>
          resultando em uma fascinante reinterpretação do universo de Harry
          Potter sob a influência do renomado cineasta Tim Burton. A nossa
          proposta foi infundir a inconfundível estética de Burton no mundo de
          Harry Potter, criando assim uma abordagem única e mágica desta adorada
          franquia.
        </p>
        <p>
          Durante o desenvolvimento do projeto, Domenico dedicou especial
          atenção ao distintivo estilo visual de Burton. Foram utilizadas as
          paletas de cores características, a arquitetura gótica e os elaborados
          desenhos de personagens para reimaginar o ambiente de Hogwarts e seus
          habitantes. Desde as imponentes torres do Castelo de Hogwarts até as
          peculiares vestimentas dos alunos, cada aspecto do projeto foi
          minuciosamente impregnado com o inconfundível toque de Burton.
        </p>
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
      </section>
    </div>
  );
};
