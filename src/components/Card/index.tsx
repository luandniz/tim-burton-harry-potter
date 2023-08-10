import { motion } from "framer-motion";
import { ParallaxImage } from "../Card/ParallaxImage";

interface ICharacter {
  id: number;
  name: string;
  description: string;
  img_path: string;
  house: string;
  img_house: string;
  blood: string;
  patronus: string;
}

interface ICardProps {
  item: ICharacter;
}

export const Card = ({ item }: ICardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="group w-full h-[25rem] xs:h-[35rem] lg:h-[40rem] [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <ParallaxImage
              src={require(`../../assets/images/${item.img_path}`)}
              alt={item.name}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 px-2 lg:px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center space-y-4 max-w-full font-poppins">
              <img
                src={item.img_house}
                alt={item.house}
                className="w-32 h-32"
              />

              <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold">
                {item.name}
              </h1>

              <p className="text-xs xs:text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
