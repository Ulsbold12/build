export const Badmaa = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-30 gap-10">
        <h1>Explore Properties</h1>
        <div className="flex gap-4">
          <button className="w-[90px] h-[36px] bg-orange-500 text-white rounded-2xl ">
            House
          </button>
          <button className="w-[90px] h-[36px] bg-orange-500 text-white rounded-2xl ">
            Villa
          </button>
          <button className="w-[90px] h-[36px] bg-orange-500 text-white rounded-2xl ">
            Apartment
          </button>
        </div>
      </div>
      <div className="w-screen h-[972px] flex justify-center flex-col items-center">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cold-3 gap-2 w-[1280px] h-[972px]">
          {badmaa.map((b) => (
            <div
              key={b.id}
              className=" w-[406px] h-[370px] border-black rounded-xl flex flex-col gap-4 border-1 ">
              <img
                alt="photo"
                src={b.image}
                className="w-[406px] h-[192px] rounded-xl content-cover"
              />
              <h1 className="text-orange-500">{b.price}</h1>
              <h1>{b.title}</h1>
              <p>{b.text}</p>
              <p>{b.text1}</p>
            </div>
          ))}
        </div>
        <button className="w-[180px] h-[50px] text-white bg-orange-500 rounded-2xl ">
          Load more Listing
        </button>
      </div>
    </>
  );
};
const badmaa = [
  {
    id: 1,
    price: "$216,000",
    title: "Piney Hills",
    text: "4 Bedrooms",
    text1: "2 Bathrooms   2,150sqft",
    image: "/App (3).png",
  },
  {
    id: 2,
    price: "$450,000",
    title: "River Oak",
    text: "3 Bedrooms",
    text1: "2 Bathrooms   1,800sqft",
    image: "/ImageWithFallback.png",
  },
  {
    id: 3,
    price: "$318,000",
    title: "Maple Glen",
    text: "5 Bedrooms",
    text1: "3 Bathrooms   2,850sqft",
    image: "/App (4).png",
  },
  {
    id: 4,
    price: "$325,000",
    title: "Forest Hill",
    text: "4 Bedrooms",
    text1: "2 Bathrooms   2,200sqft",
    image: "/ImageWithFallback (1).png",
  },
  {
    id: 5,
    price: "$295,000",
    title: "Cedar Park",
    text: "3 Bedrooms",
    text1: "2 Bathrooms   1,650sqft",
    image: "/ImageWithFallback (2).png",
  },
  {
    id: 6,
    price: "$425,000",
    title: "Willow Creek",
    text: "4 Bedrooms",
    text1: "3 Bathrooms   2,650sqft",
    image: "/ImageWithFallback (3).png",
  },
];


