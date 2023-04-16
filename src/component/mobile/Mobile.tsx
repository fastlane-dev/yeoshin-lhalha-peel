import Image from "next/image";
import React from "react";

const Mobile = () => {
  return (
    <section>
      {/* first section */}
      <article>
        <div className="flex-start-column gap-[69px] pl-[31px] pt-[44px]">
          <Image alt="logo" src={"/images/logo.png"} width={67} height={17} />
          <div className="font-pretendard text-[50px] font-[300] leading-[59.67px]">
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

      {/* second section */}
      <article className="mt-[79.48px]">
        <div>
          <div className="flex-start-column gap-[64px] px-[30px]">
            <p className="font-faktumTest text-[18px] font-[300] leading-[18px]">
              Product
            </p>
            <div className="flex-start-column gap-[32px]">
              <p className="font-faktumTest text-[30px] leading-[37.65px]">
                LHALA PEEL
              </p>
              <p className="font-pretendard text-[15px] font-[300] leading-[27px]">
                {
                  "라라필은 글로벌 뷰티 1위 기업에서 개발한 LHA 성분\n에 특허받은 알칼리 성분을 결합한 필링 솔루션입니다.\n인위적으로 벗겨내는 일반적인 필링과는 달리 LHA와\n P-sol, Lipids 성분으로 단백질을 천천히 녹이면서\n피부 깊숙이 유효성분을 침투시켜 속부터 건강한\n피부가 되도록 도와줍니다."
                }
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[44px] flex h-fit w-full justify-start gap-[8px] overflow-x-scroll">
          <div className="flex-center h-[60px] min-w-[125px] rounded-[59.3387px] border border-[#FE3B1F] font-pretendard text-[11.87px] leading-[14.16px]">
            4세대 필링
          </div>
          <div className="flex-center h-[60px] min-w-[125px] rounded-[59.3387px] border border-[#FE3B1F] font-pretendard text-[11.87px] leading-[14.16px]">
            자극없는 피부 재생
          </div>
          <div className="flex-center h-[60px] min-w-[125px] rounded-[59.3387px] border border-[#FE3B1F] font-pretendard text-[11.87px] leading-[14.16px]">
            부드러운 각질 제거
          </div>
          <div className="flex-center h-[60px] min-w-[125px] rounded-[59.3387px] border border-[#FE3B1F] font-pretendard text-[11.87px] leading-[14.16px]">
            4세대 필링
          </div>
          <div className="flex-center h-[60px] min-w-[125px] rounded-[59.3387px] border border-[#FE3B1F] font-pretendard text-[11.87px] leading-[14.16px]">
            자극없는 피부 재생
          </div>
          <div className="flex-center h-[60px] min-w-[125px] rounded-[59.3387px] border border-[#FE3B1F] font-pretendard text-[11.87px] leading-[14.16px]">
            부드러운 각질 제거
          </div>
        </div>
        <div className="relative mt-[100px] h-fit">
          <div className="relative left-[30px]  h-[210px] w-[280px]">
            <Image src={"/images/lala_card.png"} alt="card" fill />
          </div>
          <div className="relative h-[313px]">
            <div className="absolute right-[30px] top-[48px] z-[1] h-[264px] w-[210px]">
              <Image src={"/images/lala_bubble.png"} alt="bubble" fill />
            </div>
            <div className="absolute left-[calc(2%+26px)] top-[calc(12%+96px)] w-fit origin-left -rotate-90  text-[16px] leading-[19.2px] tracking-[0.05em]">
              LHALA FILL
            </div>
          </div>
          <div className="absolute top-[80%] w-[110%] origin-left rotate-[8deg] border border-[#FE3B1F]"></div>
        </div>
      </article>
    </section>
  );
};

export default Mobile;
