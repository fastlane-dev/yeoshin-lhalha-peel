import Image from "next/image";
import React from "react";
import classes from "@/styles/mobile.module.css";

const Mobile = () => {
  return (
    <section className="w-full h-full">
      <div className="p-8">
        <Image alt="logo" src={"/images/logo.png"} width={67} height={17} />
        <div className="whitespace-pre-wrap">{"벗기지 않고\n채워주는"}</div>
      </div>
    </section>
  );
};

export default Mobile;
