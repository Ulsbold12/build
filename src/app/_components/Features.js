export const Features = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center font-medium">
        <h1 className="">Buying Doesn't Have to </h1>
        <h2 className="">Be Overwhelming</h2>
        <h3 className="font-light">
          Our streamlined process makes finding your dream home simple and
          stress-free
        </h3>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f) => (
          <div key={f.id} className="flex items-start gap-4">
            <div className="flex-none w-10 h-10 rounded-full border border-orange-300 flex items-center justify-center text-orange-600 font-semibold">
              {f.num}
            </div>
            <div className="">
              <h4 className="font-medium">{f.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    id: 1,
    title: "Browse Curated Homes",
    text: "Explore our carefully selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information ",
    num: "1",
  },
  {
    id: 2,
    title: "Build a Tour",
    text: "Schedule viewings at your convenience and visit multiple properties in one trip. Our team coordinates everything to save you time.",
    num: "2",
  },
  {
    id: 3,
    title: "Get expert Advice",
    text: "Connect with experienced agents who understand the market and can guide you through every step of your home-buying journey.",
    num: "3",
  },
  {
    id: 4,
    title: "offer & Close",
    text: "Make confident offers with our support and navigate the closing process smoothly. We handle the paperwork so you can focus on moving in.",
    num: "4",
  },
];
