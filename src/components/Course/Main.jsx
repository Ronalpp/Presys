import { useEffect } from "react";
import {
  revealFromRight,
  revealFromLeft,
  revealFromBottom,
} from "../../constants/variants";

export default function Main() {
  useEffect(() => {
    revealFromBottom(".reveal-bottom");
    revealFromLeft(".reveal-left");
    revealFromRight(".reveal-right");
  }, []);

  return (
    <>
      <div
        className="w-full h-[50vh] md:h-[70vh]  lg:h-[80vh] sm:h-[80vh] bg-gradient-to-br from-blue-50 to-indigo-100  flex flex-col"
        style={{
          backgroundImage:
            'url("https://elcomercio.pe/resizer/8IFfNwYUBvXeiGKAthwJpwVbpkU=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UI7DZEAMURHMVF5RTIRM4YJKPM.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full flex-grow flex items-center justify-center">
          <div className="w-full h-full bg-cover bg-center  relative">
            <div className="absolute inset-0  bg-black bg-opacity-40 backdrop-blur-[2px] flex items-center justify-center ">
              <div className="text-center text-white px-4 reveal-bottom pt-16">
                <h1 className="text-[14vw] sm:text-[5vw]  leading-tight text-center font-bold">
                  Nuestras clases <br /> Y clases
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
