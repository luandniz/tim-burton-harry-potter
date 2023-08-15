import { useEffect } from "react";
import { useChars } from "../../providers/Characters";
import { Card } from "../Card";
import { InspirationSection } from "../Apresentation/Inspiration";
import { HogwartsSection } from "../Apresentation/Hogwarts";

export const CardSection = () => {
  const { chars, getChars } = useChars();

  useEffect(() => {
    getChars();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 w-[90%] lg:w-[90%] mx-auto">
        {chars.slice(0, 6).map((element) => (
          <Card item={element} key={element.id} />
        ))}
      </div>
      <div>
        <InspirationSection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 w-[90%] lg:w-[90%] mx-auto">
        {chars.slice(6, 12).map((element) => (
          <Card item={element} key={element.id} />
        ))}
      </div>
      <div>
        <HogwartsSection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 w-[90%] lg:w-[90%] mx-auto">
        {chars.slice(12, 18).map((element) => (
          <Card item={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};
