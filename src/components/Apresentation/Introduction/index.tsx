export const IntroductionSection = () => {
  return (
    <div className="text-gray-400 font-poppins mx-auto w-[90%] lg:w-[80%] xl:w-[60%] space-y-2 mb-20">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold" translate="no">
        Tim Burton's Harry Potter
      </h1>
      <section className=" space-y-3 text-sm sm:text-base">
        <p className="leading-7">
          O projeto que desejo apresentar é uma colaboração entre o designer
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-1 before:bg-purple-900 relative inline-block mx-2">
            <span className="relative text-white">
              Domenico Ruffo e a Midjourney,
            </span>
          </span>
          resultando em uma fascinante reinterpretação do universo de Harry
          Potter sob a influência do renomado cineasta Tim Burton. A proposta
          foi infundir a inconfundível estética de Burton no mundo de Harry
          Potter, criando assim uma abordagem única e mágica desta adorada
          franquia.
        </p>
      </section>
    </div>
  );
};
