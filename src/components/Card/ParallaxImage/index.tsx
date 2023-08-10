import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IParallaxImageProps {
  src: string;
  alt: string;
}

export const ParallaxImage = ({ src, alt }: IParallaxImageProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Anima somente uma vez quando entra no campo de visão
    threshold: 0.5, // Porcentagem de visibilidade para disparar a animação
  });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 0.8 }} // Estado inicial (invisível e escala menor)
      animate={{ opacity: inView ? 1 : 0.5, scale: inView ? 1 : 0.8 }} // Animar opacidade e escala
      transition={{ duration: 0.8 }} // Duração da animação
      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
    />
  );
};
