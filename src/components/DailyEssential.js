import React from "react";
import { ShieldCheckIcon, BanIcon } from "@heroicons/react/outline";

const DailyEssential = () => {
  return (
    <>
      <section className="mt-5 mb-[80px]">
        <div className="mx-1 text-ritual1 flex flex-grow flex-col">
          <div className="px-[15px]">
            <div className="flex grow mb-10 md:mx-[116.656px] md:text-center">
              <h2 className="text-[22px] font-semibold">
                Daily essentials with good intentions — for living life or
                creating it.
              </h2>
            </div>
          </div>
          <div className="px-[15px]">
            <div className="flex mb-6">
              <div className="mr-2">
                <ShieldCheckIcon className="h-8 w-8 text-ritual1" />
              </div>
              <span className="font-normal text-[16px] w-full">
                Traceable Ingredients
              </span>
            </div>
            <div className="flex mb-6">
              <div className="mr-2">
                <BanIcon className="h-8 w-8 text-ritual1" />
              </div>
              <span className="font-normal text-[16px] w-full tracking-wide">
                Non-GMO
              </span>
            </div>
            <div className="flex mb-6">
              <div className="mr-2">
                <ShieldCheckIcon className="h-8 w-8 text-ritual1" />
              </div>
              <span className="font-normal text-[16px] w-full tracking-wide">
                Third Party Tested
              </span>
            </div>
            <div className="flex mb-6">
              <div className="mr-2">
                <ShieldCheckIcon className="h-8 w-8 text-ritual1" />
              </div>
              <span className="font-normal text-[16px] w-full tracking-wide">
                Vegan
              </span>
            </div>
            <div className="flex mb-6">
              <div className="mr-2">
                <ShieldCheckIcon className="h-8 w-8 text-ritual1" />
              </div>
              <span className="font-normal text-[16px] w-full tracking-wide">
                No Artificial Flavors or Synthetic Fillers
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-[-15px] px-[15px]">
        <div className="px-[15px] pb-5 ">
          <div className="object-contain object-bottom">
            <img
              src="/images/home-feat-dyson.jpg"
              alt=""
              className="h-[320px] w-[320px] sm:h-[443px] sm:w-full sm:mx-auto"
            />
          </div>
          <div className="flex flex-col flex-grow ">
            <div className="">
              <div className="mt-8 mb-4">
                <span className="text-[24px] text-ritual1 font-medium leading-8 tracking-wide">
                  We're not about pseudoscience and half-truths
                </span>
              </div>
              <span className="text-ritual1 font-normal text-[15px] leading-none tracking-[0.020em]">
                From Omega-3 DHA from microalgae to regeneratively-farmed pea
                protein, our scientists studied diets and genetics to make daily
                essentials based on what we need.
              </span>
            </div>
            <div className="mt-6">
              <div className="mb-6">
                <span className="border-b-2 text-ritual1 text-[16px] font-semibold">
                  Multivitamin for Women 18+
                </span>
              </div>
              <div className="mb-6">
                <span className="border-b-2 text-ritual1 text-[16px] font-semibold">
                  The Prenatal Multivitamin
                </span>
              </div>
              <div className="mb-6">
                <span className="border-b-2 text-ritual1 text-[16px] font-semibold">
                  Multivitamin for Men 18+
                </span>
              </div>
              <div className="mb-6 flex">
                <span className="border-b-2 text-ritual1 text-[16px] font-semibold">
                  Essential Protein Daily Shake 18+
                </span>
                <div className="ml-[15px] w-[58.32px] bg-ritual2">
                  <p className="text-ritual1 px-[14px]">NEW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DailyEssential;
