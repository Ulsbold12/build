export const Person = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-col items-center gap-2">
        <h1 className="">Meet the People</h1>
        <h2>Behind the Process </h2>
        <p>
          Our experienced team is dedicated to helping you find your perfect
          home
        </p>
      </div>
      <div className=" w-[1280px] h-[390px] grid grid-cols-1 sm:grid-cols-4 gap-2 border-black rounded-2xl">
        {person.map((p) => (
          <div key={p.id} className="w-[302px] h-[390px] border rounded-2xl ">
            <img
              alt="photo"
              src="/ImageWithFallback (4).png"
              className="w-[300px] h-[256px] rounded-2xl"
            />
            <div className="flex flex-col gap-2 text-center mt-10">
              <h1>{p.name}</h1>
              <h2>{p.ff}</h2>
              <h2 className="text-orange-500 ">{p.num} Properties sold</h2>
            </div>
          </div>
        ))}
      </div>
      <button className="w-[161px] h-[36px]  text-white bg-orange-500 rounded-2xl mt-10">
        Meet the Team
      </button>
    </div>
  );
};

const person = [
  {
    id: 1,
    name: "Micheal Chen",
    ff: "Senior Real Estate Agent",
    num: "24",
    image: "/ImageWithFallback (4).png",
  },
  {
    id: 2,
    name: "David Martinez",
    ff: "Property Specialist",
    num: "18",
  },
  {
    id: 3,
    name: "James Wilson",
    ff: "Investment Advisor",
    num: "32",
  },
  {
    id: 4,
    name: "Robert Thompson",
    ff: "Luxury Home Expert",
    num: "28",
  },
];
