import Image from "next/image";
import React from "react";

const Mobile = () => {
  return (
    <section>
      {/* first section - main */}
      <article>
        <div className="flex-start-column gap-[69px] pl-[31px] pt-[44px]">
          <img alt="logo" src={"/images/logo.png"} width={67} height={17} />
          <div className="font-pretendard text-[50px] font-[600] leading-[59.67px]">
            {"벗기지 않고\n채워주는"}
          </div>
        </div>
        <div className="relative  mt-[88px] h-[328px]">
          <div className="absolute left-[calc(2%+26px)] top-[calc(12%+80px)] w-fit origin-left -rotate-90 text-[14px] leading-[19.2px] tracking-[0.05em]">
            LHALA FILL
          </div>
          <div className="absolute right-[calc(0%-29px)] top-0 z-[1] inline-block h-[328px] w-[328px]">
            <Image
              priority
              alt="main_image"
              src={"/images/main_image.png"}
              fill
            />
          </div>
          <div className="absolute top-[85%] w-[100%] origin-left -rotate-[9deg] border-b-[1px] border-[#FE3B1F]"></div>
        </div>
      </article>

      {/* second section - Product*/}
      <article className="mt-[79.48px]">
        <div>
          <div className="flex-start-column gap-[64px] px-[30px]">
            <p className="font-faktumTest text-[20px] font-[300] leading-[20px]">
              Product
            </p>
            <div className="flex-start-column gap-[32px]">
              <p className="font-faktumTest text-[30px] leading-[37.65px]">
                LHALA PEEL
              </p>
              <p className="font-pretendard text-[16px] font-[500] leading-[28.8px]">
                {
                  "라라필은 글로벌 뷰티 1위 기업에서 개발한 LHA 성분에 특허받은 알칼리 성분을 결합한 필링 솔루션입니다.인위적으로 벗겨내는 일반적인 필링과는 달리 LHA와 P-sol, Lipids 성분으로 단백질을 천천히 녹이면서 피부 깊숙이 유효성분을 침투시켜 속부터 건강한 피부가 되도록 도와줍니다."
                }
              </p>
            </div>
          </div>
        </div>
        <div className="flex-center">
          <div className="w-[30px]"></div>
          <div className="flex-center mt-[44px] h-fit min-w-[315px] flex-wrap gap-[8px]  border-[#FE3B1F]  font-pretendard text-[14px] font-[400] leading-[16.8px]">
            <div className="flex-center h-[46px] min-w-[152px] rounded-[65px] border ">
              4세대 필링
            </div>
            <div className="flex-center h-[46px] min-w-[152px] rounded-[65px] border">
              자극없는 피부 재생
            </div>
            <div className="flex-center h-[46px] min-w-[152px] rounded-[65px] border">
              부드러운 각질 제거
            </div>
            <div className="flex-center h-[46px] min-w-[152px] rounded-[65px] border">
              콜라겐 리모델링
            </div>
            <div className="flex-center h-[46px] min-w-[152px] rounded-[65px] border">
              피지 분비 조절
            </div>
          </div>
          <div className="w-[30px]"></div>
        </div>
        <div className="relative mt-[100px] h-fit">
          <div className="relative left-[30px]  h-[210px] w-[280px]">
            <Image src={"/images/lala_card.png"} alt="card" fill />
          </div>
          <div className="relative h-[313px]">
            <div className="absolute right-[30px] top-[48px] z-[1] h-[264px] w-[210px]">
              <Image src={"/images/lala_bubble.png"} alt="bubble" fill />
            </div>
            <div className="absolute left-[calc(2%+26px)] top-[calc(12%+96px)] w-fit origin-left -rotate-90  text-[14px] leading-[19.2px] tracking-[0.05em]">
              LHALA FILL
            </div>
          </div>
          <div className="absolute top-[80%] w-[110%] origin-left rotate-[3deg] border-b-[1px] border-[#FE3B1F]"></div>
        </div>
      </article>

      {/* third section - Core Ingredients*/}
      <article className="flex-start-column mt-[80px] gap-[58px] px-[30px] font-faktumTest">
        <p className="text-[20px] font-[300] leading-[20px]">
          Core Ingredients
        </p>
        <div className="flex-start-column gap-[60px]">
          <div>
            <p className="mb-[9px] text-[14px] font-[200] leading-[22px]">1</p>
            <p className="mb-[32px] text-[30px] font-[300] leading-[40px]">
              LHA
            </p>
            <p className="font-pretendard text-[16px] font-[500] leading-[24px]">
              {
                "표피 세포 사이를 통과하는 작은 LHA 성분은 진피까지 깊숙이 도달하여 진피층 재생을 유도하고, 자극 없이 피부 장벽을 보호합니다."
              }
            </p>
          </div>
          <div>
            <p className="mb-[9px] text-[14px] font-[200] leading-[22px]">2</p>
            <div>
              <span className="align-top text-[10px] tracking-[0.05em]">H</span>
              <p className="mb-[32px] inline-block text-[30px] font-[300] leading-[30px]">
                P-Sol
              </p>
              <span className="align-top text-[10px] tracking-[0.05em]">
                TM
              </span>
            </div>
            <p className="font-pretendard text-[16px] font-[500] leading-[24px]">
              {
                "특허받은 알칼리 성분 P-sol은 섬유아세포를 활성화해 콜라겐과 피부 지지 구조의 복원을 돕고, LHA와 결합 하여 멜라닌을 녹여 피부 투명도를 개선해줍니다."
              }
            </p>
          </div>
          <div>
            <p className="mb-[9px] text-[14px] font-[200] leading-[22px]">3</p>
            <p className="mb-[32px] text-[30px] font-[300] leading-[40px]">
              Lipids
            </p>
            <p className="font-pretendard text-[16px] font-[500] leading-[24px]">
              {
                "Lipids 성분은 각질층과 비슷한 천연 피부 구조체로 손상된 피부를 보호하여 회복을 돕습니다."
              }
            </p>
          </div>
        </div>
      </article>

      {/* fourth section - certification details spinning*/}
      <section className="relative mt-[60px] h-fit">
        <div className="relative h-[216px] ">
          <div className="absolute right-[30px] h-[216px] w-[210px] hover:animate-logoSpin">
            <img
              src={"/images/lala_spinning_logo.png"}
              alt="lala_spinning_logo"
            />
          </div>
        </div>
        <div className="absolute top-[130px] w-[101vw] origin-left -rotate-[4.8deg] border-b-[1px] border-[#FE3B1F]"></div>
      </section>

      {/* fifth section - news title */}
      <section className="mt-[60px] h-fit font-pretendard">
        <div className="flex-center mb-[32px]">
          <img
            className="h-[315px] w-[315px] rounded-[37px]"
            src="/images/lala_last.png"
            alt="lala_last"
          />
        </div>
        <article className="flex-start-column  gap-[20px] px-[39px] text-[16px] font-[500] leading-[22.4px]">
          <p className="w-full">세계 최초 4세대 필링제 LHALAPEEL 개발 </p>
          <p className="w-full">
            {
              "조선일보가 주최하는 2021 소비자추천 브랜드\n‘필링 솔루션‘ 부문 1위 ‘라라필’"
            }
          </p>
          <p className="w-full">{"20’ LHA 제품 국내 첫 출시"}</p>
        </article>
        <div className="mt-[60px] px-[30px] font-[600] text-gray">
          <p className="text-[12px]  leading-[21.6px]">
            {
              "본사의 유통 제품을 허가나 동의 없이 비정상 유통경로로 판매하는 업체들이 있습니다. 병의원이 아닌 곳에서 시술을 제공받을시 피해를 입을 수 있으며, 품질 보증이나 고객지원이 불가하니 반드시 정식 유 통 제품으로 서비스 받으시기 바랍니다."
            }
          </p>
          <div className="mt-[19px] text-[10px] leading-[18px]">
            <p>
              {
                "LHALALA 브랜드의 BI를 도용하여 사용할 경우 상표법 제 93조에 의거하여 처벌받게 됩니다."
              }
            </p>
            <div className="mt-[5px] flex items-start justify-start">
              <div className="mr-[3px] text-[15px]">•</div>
              <p>
                {
                  "상표법 제 93조 - 상표권 및 전용사용권의 침해행위를 한 자는 7년 이하의 징역 또는 1억원 이하의 벌금에 처한다."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-[60px] h-[418px] border-t-[1px] border-[#C0C0C0] px-[30px] pt-[65px]">
        <p className="item-center flex justify-between">
          <div className="h-[23px] w-[123px]">
            <img src={"/images/logo_black.png"} alt="logo_black" />
          </div>
          <div className="flex-center gap-[6px] text-[16px] leading-[20px] tracking-[0.02em]">
            <div>KR</div>
            <div className="text-[#CCCCCC]">|</div>
            <div className="text-[#CCCCCC]">EN</div>
          </div>
        </p>
        <p className="flex-start-column mt-[106px] gap-[24px] font-faktumTest text-[12px] font-[400] leading-[16.07px] text-[#000000]">
          <div className="flex-start-column gap-[6px] tracking-[0.04em]">
            <p>TEL. 070-4858-4686</p>
            <p>Email. beauty@ysmedi.kr</p>
          </div>

          <div className="flex-start-column gap-[6px]">
            <p className="font-pretendard font-[300]">
              서울특별시 강남구 테헤란로 423 현대타워, 10층
            </p>
            <p>Ⓒ Ysmedi Co. Ltd.</p>
          </div>
        </p>
      </footer>
    </section>
  );
};

export default Mobile;
