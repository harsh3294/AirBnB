import Image from "next/image";
import BackgroundImage from "../assets/BackgroundImage.webp";
function Banner() {
  return (
    <div className="relative h-[350px] sm:h[450px] lg:h-[500px] xl:h[550px] 2xl:h-[650px]">
      <Image src={BackgroundImage} layout="fill" object="cover" />

      <div className="absolute top-[40px] w-[100px] ml-10 text-center">
        <div className="text-[30px] sm:text-[60px] md:text-[60px] text-bold text-white font-bold leading-[40px] md:leading-[67px]">
          <h2>Olympian &</h2>
          <h2>Paralympian</h2>
          <h2>Online</h2>
          <h2>Experiences</h2>
        </div>
        <button
          className="text-purple-500 mt-6 font-bold bg-white px-6 py-2 w-[200px] shadow-lg rounded-full my-3 h-[50px]
        hover:shadow-xl active:scale-90 transition duration-150
        "
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
