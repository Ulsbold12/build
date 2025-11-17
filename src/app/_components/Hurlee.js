export const Hurlee = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 w-[1064px] h-[152px] border">
        {Bold.map((h) => (
          <div
            key={h.id}
            className="w-[333px] h-[152px] flex flex-col items-center text-center gap-2">
            <img alt="logo" src={h.image} className="w-[64px] h-[64px]" />
            <h1>{h.title}</h1>
            <p>{h.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Bold = [
  {
    id: 1,
    image: "/Container.png",
    title: "Find your dream home for life",
    text: "Browse thousands of properties and find the perfect place",
  },
  {
    id: 2,
    image: "/Container (1).png",
    title: "Pre-Approved Loan $1 to $5",
    text: "Get pre-approved quickly and know your budget",
  },
  {
    id: 3,
    image: "/Container (2).png",
    title: "Commission free for life",
    text: "Save thousands with our commission-free model",
  },
];
