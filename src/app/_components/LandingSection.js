export const LandingSection = () => {
  return (
    <div className="w-screen h-[590px] flex flex-col items-center  bg-white gap-20">
      <div className="w-[1280px] h-[112px] flex flex-col items-center justify-center gap-2 pt-10">
        <h1 className="text-black text-2xl font-inter">Smart Tools</h1>
        <h2 className="text-black text-2xl font-inter">
          Real Expert, Easy Moves
        </h2>
        <p className="text-gray-700">
          Your journey to finding the perfect home starts here
        </p>
      </div>

      <div className="mt-10 flex gap-20">
        <div className="w-[310px] h-[234px] flex flex-col items-center gap-10">
          <img alt="logo" src="/app.png" className="h-[48px] w-[48px]" />
          <h1 className="">Top-end Curation</h1>
          <h2 className="font-thin 20 text-center">
            Carefully selected properties that meet our high standards of
            quality
          </h2>
        </div>
        <div className="w-[310px] h-[234px] flex flex-col items-center gap-10">
          <img alt="logo" src="/app.png" className="h-[48px] w-[48px]" />
          <h1 className="">Top-end Curation</h1>
          <h2 className="font-thin 20 text-center">
            Carefully selected properties that meet our high standards of
            quality
          </h2>
        </div>
        <div className="w-[310px] h-[234px] flex flex-col items-center gap-10">
          <img alt="logo" src="/app.png" className="h-[48px] w-[48px]" />
          <h1 className="">Top-end Curation</h1>
          <h2 className="font-thin 20 text-center">
            Carefully selected properties that meet our high standards of
            quality
          </h2>
        </div>
      </div>
      <button className="bg-orange-500 w-[140px] h-[36px] rounded-sm text-white">
        Get Started
      </button>
    </div>
  );
};
