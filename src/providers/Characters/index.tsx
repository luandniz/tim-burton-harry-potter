import { createContext, useContext, useState } from "react";
import { characters } from "../../utils/api-example";

interface ICharsProviderProps {
  children: React.ReactNode;
}
interface ICharsContext {
  getChars: () => void;
  chars: ICharacter[];
  loading: Boolean;
}
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

export const CharactersContenxt = createContext({} as ICharsContext);

export const CharsProvider = ({ children }: ICharsProviderProps) => {
  const [chars, setChars] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getChars = () => {
    const updatedChars: ICharacter[] = characters.map((element) => element);
    setChars(updatedChars);
    setLoading(false);
  };

  return (
    <CharactersContenxt.Provider value={{ getChars, chars, loading }}>
      {children}
    </CharactersContenxt.Provider>
  );
};

export const useChars = () => useContext(CharactersContenxt);
