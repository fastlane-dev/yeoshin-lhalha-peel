import Head from "next/head";
import dynamic from "next/dynamic";

import localFont from "next/font/local";
import { useEffect, useState } from "react";

const Desktop = dynamic(() => import("../component/web/Desktop"), {
  ssr: false,
});
const Mobile = dynamic(() => import("../component/mobile/Mobile"), {
  ssr: false,
});

const FaktumTest = localFont({
  variable: "--font-faktumTest",
  src: [
    {
      path: "../../public/fonts/FaktumTest/Faktum_Test_Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/FaktumTest/Faktum_Test_Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/FaktumTest/Faktum_Test_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/FaktumTest/Faktum_Test_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const Pretendard = localFont({
  variable: "--font-pretendard",
  src: [
    {
      path: "../../public/fonts/Pretendard/Pretendard-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-SemiBold.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Regular.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Medium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Light.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-ExtraLight.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-ExtraBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Bold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard/Pretendard-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function Home() {
  const [isWeb, setIsWeb] = useState(true);

  useEffect(() => {
    setIsWeb(window.innerWidth > 800);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setIsWeb(false);
      } else {
        setIsWeb(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 800) {
          setIsWeb(false);
        } else {
          setIsWeb(true);
        }
      });
    };
  }, []);
  return (
    <>
      <Head>
        <title>LHALALA</title>
      </Head>
      <main
        className={`whitespace-pre-wrap text-orange ${Pretendard.variable} ${FaktumTest.variable}`}
      >
        {isWeb ? <Desktop /> : <Mobile />}
      </main>
    </>
  );
}
