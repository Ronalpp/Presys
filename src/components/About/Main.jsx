import { useEffect } from "react";
import {
  revealFromRight,
  revealFromLeft,
  revealFromBottom,
} from "../../constants/variants";
import image25 from "../../assets/23.jpg"

export default function Main() {
  useEffect(() => {
    revealFromBottom(".reveal-bottom");
    revealFromLeft(".reveal-left");
    revealFromRight(".reveal-right");
  }, []);

  return (
    <>
      <div
        className="w-full h-[30vh] md:h-[70vh]  lg:h-[80vh] sm:h-[80vh] bg-gray-100 flex flex-col"
        style={{
          backgroundImage: `url(${image25})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full flex-grow flex items-center justify-center">
          <div className="w-full h-full bg-cover bg-center  relative">
            <div className="absolute inset-0  bg-black bg-opacity-40 backdrop-blur-[2px] flex items-center justify-center ">
              <div className="text-center text-white px-4 reveal-bottom pt-16">
                <h1 className="text-[12vw] sm:text-[5vw]  leading-tight text-center font-bold">
               ¡Conócenos!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
