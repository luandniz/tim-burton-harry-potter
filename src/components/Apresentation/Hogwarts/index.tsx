import { ParallaxImage } from "../../Card/ParallaxImage";

export const HogwartsSection = () => {
  return (
    <div className="flex items-center justify-center relative xl:p-5 w-[90%] m-auto my-16">
      <div className=" rounded-xl shadow-2xl opacity-60">
        <ParallaxImage
          src={"https://i.ibb.co/Tc9LV0C/hogwarts-logo-removebg-preview.png"}
          alt="Hogwarts Brasão"
        />
      </div>
    </div>
  );
};
