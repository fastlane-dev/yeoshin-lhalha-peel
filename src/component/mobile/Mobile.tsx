import Image from "next/image";
import React from "react";

const Mobile = () => {
  return (
    <section>
      {/* first section */}
      <article>
        <div className="flex-start-column gap-[69px] pl-[31px] pt-[44px]">
          <Image alt="logo" src={"/images/logo.png"} width={67} height={17} />
          <div className="whitespace-pre-wrap font-pretendard text-[50px] font-[300] leading-[59.67px]">
            {"벗기지 않고\n채워주는"}
          </div>
        </div>
        <div className="relative  mt-[88px] h-[378px]">
          <div className="absolute left-[calc(2%+26px)] top-[calc(12%+80px)] w-fit origin-left -rotate-90 text-[16px] leading-[19.2px] tracking-[0.05em]">
            LHALA FILL
          </div>
          <div className="absolute right-[calc(0%-29px)] top-0 z-10 inline-block h-[328px] w-[328px]">
            <Image
              priority
              alt="main_image"
              src={"/images/main_image.png"}
              fill
            />
          </div>
          <div className="absolute top-[81%] w-[110%] origin-left -rotate-[8deg] border border-[#FE3B1F]"></div>
        </div>
      </article>
    </section>
  );
};

export default Mobile;
