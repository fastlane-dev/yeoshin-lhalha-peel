import Image from "next/image";
import React from "react";

const Desktop = () => {
  return (
    <section>
      {/* first section - main */}
      <article>
        <div className="flex-center justify-between gap-[69px] pl-[160px] pr-[201px] pt-[60px]">
          <Image alt="logo" src={"/images/logo.png"} width={137} height={37} />
          <div className="flex-center gap-[10px] text-[20px] leading-[24.68px] tracking-[0.02em]">
            <div>KR</div>
            <div className="text-[#CCCCCC]">|</div>
            <div className="text-[#CCCCCC]">EN</div>
          </div>
        </div>

        <div className="relative h-[943px]">
          <div className="absolute left-[359px] top-[352px] z-[2] font-pretendard text-[90px] font-[600] leading-[108.02px]">
            {"벗기지 않고\n채워주는"}
          </div>
          <div className="absolute left-[80px] top-[491px] w-fit origin-left -rotate-90 text-[14px] leading-[19.2px] tracking-[0.05em]">
            LHALA FILL
          </div>
          <div className="absolute right-[80px] top-[491px] w-fit origin-right rotate-90 text-[14px] leading-[19.2px] tracking-[0.05em]">
            LHALA FILL
          </div>
          <div className="absolute right-[247px] top-0 z-[1] inline-block h-[943px] w-[943px]">
            <img alt="main_image" src={"/images/main_image.png"} />
          </div>

          <div className="absolute top-[105%] w-[110%] origin-left -rotate-[9deg] border border-[#FE3B1F]"></div>
        </div>
      </article>

      {/* second section - Product*/}
      <article className="relative mt-[124px]">
        <div className="pl-[360px] pr-[441px]">
          <div className="flex-start-column gap-[80px]">
            <p className="font-faktumTest text-[30px] font-[300] leading-[30px]">
              Product
            </p>
            <div className="flex-start-column gap-[30px]">
              <p className="font-faktumTest text-[70px] leading-[115.59px]">
                LHALA PEEL
              </p>
              <p className="font-pretendard text-[26px] font-[500] leading-[46.8px]">
                {
                  "라라필은 글로벌 뷰티 1위 기업에서 개발한 LHA 성분에 특허받은 알칼리 성분을 결합한 필링 솔루션입니다. 인위적으로 벗겨내는 일반적인 필링과는 달리 LHA와 P-sol, Lipids 성분으로 단백질을 천천히 녹이면서 피부 깊숙이 유효성분을 침투시켜 속부터 건강한 피부가 되도록 도와줍니다."
                }
              </p>
            </div>
          </div>
          <div className="flex-center mt-[60px] flex h-fit w-full flex-wrap justify-start gap-[16px]  border-[#FE3B1F]  font-pretendard text-[20px] font-[500] leading-[23.87px]">
            <div className="flex-center h-[104px] min-w-[211px] rounded-[65px] border ">
              4세대 필링
            </div>
            <div className="flex-center h-[104px] min-w-[211px] rounded-[65px] border">
              자극없는 피부 재생
            </div>
            <div className="flex-center h-[104px] min-w-[211px] rounded-[65px] border">
              부드러운 각질 제거
            </div>
            <div className="flex-center h-[104px] min-w-[211px] rounded-[65px] border">
              콜라겐 리모델링
            </div>
            <div className="flex-center h-[104px] min-w-[211px] rounded-[65px] border">
              피지 분비 조절
            </div>
          </div>
        </div>
        <div>
          <div className="relative mx-[360px] mt-[100px] h-[840px]">
            <div className="relative left-0 h-[450px] w-[600px]">
              <Image fill src={"/images/lala_card.png"} alt="card" />
            </div>
            <div className="absolute bottom-0 right-0 z-[1] h-[670px] w-[552px]">
              <Image fill src={"/images/lala_bubble.png"} alt="bubble" />
            </div>
          </div>
        </div>
        <div className="absolute top-[86%] w-[110%] origin-left rotate-[3deg] border border-[#FE3B1F]"></div>
      </article>

      {/* third section - Core Ingredients*/}
      <article className="flex-start-column mt-[100px] gap-[100px] pl-[356px] pr-[594px] font-faktumTest">
        <p className="text-[30px] font-[300] leading-[30px]">
          Core Ingredients
        </p>
        <div className="flex-start-column gap-[100px]">
          <div>
            <p className="mb-[24px] text-[22px] font-[200] leading-[22px]">1</p>
            <p className="mb-[30px] text-[70px] font-[300] leading-[80px]">
              LHA
            </p>
            <p className="font-pretendard text-[26px] font-[500] leading-[39px]">
              {
                "표피 세포 사이를 통과하는 작은 LHA 성분은 진피까지 깊숙이 도달하여 진피층 재생을 유도하고, 자극 없이 피부 장벽을 보호합니다."
              }
            </p>
          </div>
          <div>
            <p className="mb-[24px] text-[22px] font-[200] leading-[22px]">2</p>
            <div>
              <span className="align-top text-[24px] leading-[30px] tracking-[0.05em]">
                H
              </span>
              <p className="mb-[30px] inline-block text-[70px] font-[300] leading-[64px]">
                P-Sol
              </p>
              <span className="align-top text-[24px] leading-[30px] tracking-[0.05em]">
                TM
              </span>
            </div>
            <p className="font-pretendard text-[26px] font-[500] leading-[39px]">
              {
                "특허받은 알칼리 성분 P-sol은 섬유아세포를 활성화해 콜라겐과 피부 지지 구조의 복원을 돕고, LHA와 결합 하여 멜라닌을 녹여 피부 투명도를 개선해줍니다."
              }
            </p>
          </div>
          <div>
            <p className="mb-[24px] text-[22px] font-[200] leading-[22px]">3</p>
            <p className="mb-[30px] text-[70px] font-[300] leading-[80px]">
              Lipids
            </p>
            <p className="font-pretendard text-[26px] font-[500] leading-[39px]">
              {
                "Lipids 성분은 각질층과 비슷한 천연 피부 구조체로 손상된 피부를 보호하여 회복을 돕습니다."
              }
            </p>
          </div>
        </div>
      </article>

      {/* fourth section - certification details spinning*/}
      <section className="relative mt-[133px] h-fit">
        <div className="relative h-[373px] ">
          <div className="absolute right-[193px] h-[373px] w-[364px] hover:animate-logoSpin">
            <img
              src={"/images/lala_spinning_logo.png"}
              alt="lala_spinning_logo"
            />
          </div>
        </div>
        <div className="absolute top-[88%] w-[101vw] origin-left -rotate-[4.8deg] border border-[#FE3B1F]"></div>
      </section>

      {/* fifth section - news title */}
      <section className="mt-[10px] h-fit font-pretendard">
        <div className="relative h-[520px]">
          <div className="absolute left-[360px]">
            <img
              className="h-[520px] w-[520px] rounded-[37px]"
              src="/images/lala_last.png"
              alt="lala_last"
            />
          </div>
          <article className="flex-start-column absolute right-[306px] top-[100px] w-[654px] gap-[60px] text-[36px] font-[500] leading-[50.4px]">
            <p className="w-full">세계 최초 4세대 필링제 LHALAPEEL 개발 </p>
            <p className="w-full">
              {
                "조선일보가 주최하는 2021 소비자추천 브랜드 ‘필링 솔루션‘ 부문 1위 ‘라라필’"
              }
            </p>
            <p className="w-full">{"20’ LHA 제품 국내 첫 출시"}</p>
          </article>
        </div>
        <div className="mt-[201px] pl-[160px] pr-[283px] text-[20px] font-[600] leading-[36px] text-gray">
          <p className="">
            {
              "본사의 유통 제품을 허가나 동의 없이 비정상 유통경로로 판매하는 업체들이 있습니다.\n병의원이 아닌 곳에서 시술을 제공받을시 피해를 입을 수 있으며, 품질 보증이나 고객지원이 불가하니 반드시 정식 유통 제품으로 서비스 받으시기 바랍니다."
            }
          </p>
          <div className="mt-[36px] ">
            <p>
              {
                "LHALALA 브랜드의 BI를 도용하여 사용할 경우 상표법 제 93조에 의거하여 처벌받게 됩니다."
              }
            </p>
            <p className="before:mr-[4px] before:content-['•']">
              {
                "상표법 제 93조 - 상표권 및 전용사용권의 침해행위를 한 자는 7년 이하의 징역 또는 1억원 이하의 벌금에 처한다."
              }
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-[100px] h-[320px] border-t-[1px] border-[#C0C0C0] px-[163px] pt-[57px]">
        <div className="flex-center items-start justify-between">
          <div className="flex-start-column w-[470px]  gap-[30px] font-faktumTest  font-[400]  text-[#000000]">
            <div className="flex-center w-full justify-between  text-[18px] leading-[24.1px] tracking-[0.04em]">
              <p>TEL. 070-4858-4686</p>
              <p>Email. beauty@ysmedi.kr</p>
            </div>

            <div className="flex-start-column gap-[5px]">
              <p className="font-pretendard text-[18px] font-[300] leading-[24.1px]">
                서울특별시 강남구 테헤란로 423 현대타워, 10층
              </p>
              <p className="text-[20px] leading-[26.78px]">Ⓒ Ysmedi Co. Ltd.</p>
            </div>
          </div>
          <div className="h-[41px] w-[221px]">
            <img src={"/images/logo_black.png"} alt="logo_black" />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Desktop;
