import { CardSection } from "../../components/CardSection";
import { IntroductionSection } from "../../components/Apresentation/Introduction";
import { Footer } from "../../components/Footer";

import BackgroundImage from "../../assets/images/hogwarts.webp";
import { useChars } from "../../providers/Characters";

export const Home = () => {
  const { loading } = useChars();
  return (
    <div className="w-full flex flex-col h-full relative bg-[#000000]">
      <main>
        <img src={BackgroundImage} alt="" className="w-full object-cover" />
      </main>
      {!loading && <IntroductionSection />}
      <CardSection />
      <Footer />
    </div>
  );
};
