import Image from "next/image";
import localFont from "next/font/local";

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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      lha lha peel
    </main>
  );
}
