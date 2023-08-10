import { CharsProvider } from "./Characters";

interface IProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IProviderProps) => {
  return <CharsProvider>{children}</CharsProvider>;
};
