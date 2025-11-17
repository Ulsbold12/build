export const Bolormaa = () => {
  return (
    <div className="w-screen h-[260px] bg-blue-950 flex flex-col items-center justify-center gap-4 text-center mt-20">
      <div className="text-white">
        <h1>The Only Market Update</h1>
        <h2>You'll Actually Want to Read</h2>
      </div>
      <p className="text-white">
        Get weekly insights on the real estate market, new listings, and expert
        tips delivered to your inbox
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Your email address"
          className="w-[305px] h-[36px]  text-white border-white border"
        />
        <button className="w-[130px] h-[36px] bg-orange-500 text-white rounded-2xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};
