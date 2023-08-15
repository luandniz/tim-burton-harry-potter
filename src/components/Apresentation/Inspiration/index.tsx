import { ParallaxImage } from "../../Card/ParallaxImage";

export const InspirationSection = () => {
  const item = {
    id: 13,
    name: "Remo Lupin",
    house: "Gryffindor",
    img_house: "https://i.ibb.co/Gcx316n/Gryffindor.png",
    description:
      "Remo Lupin, um lobisomem atormentado, protege segredos noturnos e luta contra as sombras no mundo mágico gótico de Tim Burton. Sua dualidade entre a humanidade e a bestialidade adiciona profundidade à história.",
    img_path: "remo_lupin.png",
    blood: "Meio-sangue",
    patronus: "Lobo",
  };
  return (
    <div className="flex-col md:grid md:grid-cols-2 w-[90%] m-auto my-16 relative rounded">
      <div className="flex items-center justify-center relative w-full xl:p-5">
        <div className="xl:w-[80%] xl:h-[90%]  rounded-xl shadow-2xl">
          <ParallaxImage
            src={require(`../../../assets/images/${item.img_path}`)}
            alt={item.name}
          />
        </div>
      </div>
      <div className="flex flex-col my-7 px-5 xl:px-12 justify-center text-gray-400 font-poppins leading-6 space-y-3 text-sm sm:text-base">
        <div className="flex space-x-2 items-start">
          <div className="h-16 w-16 bg-[#5C5759ff]"></div>
          <div className="h-16 w-16 bg-[#405359ff]"></div>
          <div className="h-16 w-16 bg-[#4E7179ff]"></div>
          <div className="h-16 w-16 bg-[#466971ff]"></div>
        </div>
        <p>
          Durante o desenvolvimento do projeto, Domenico dedicou especial
          atenção ao distinto estilo visual de Burton. Foram utilizadas as
          paletas de cores características, a arquitetura gótica e os elaborados
          desenhos de personagens para reimaginar o ambiente de Hogwarts e seus
          habitantes. Desde as imponentes torres do Castelo de Hogwarts até as
          peculiares vestimentas dos alunos, cada aspecto do projeto foi
          minuciosamente impregnado com o inconfundível toque de Burton.
        </p>
      </div>
    </div>
  );
};
