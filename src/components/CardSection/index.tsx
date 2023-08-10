import { useEffect } from "react";
import { useChars } from "../../providers/Characters";
import { Card } from "../Card";

export const CardSection = () => {
  const { chars, getChars } = useChars();

  useEffect(() => {
    getChars();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 w-[90%] lg:w-[80%] mx-auto">
      {chars.map((element) => (
        <Card item={element} key={element.id} />
      ))}
    </div>
  );
};
