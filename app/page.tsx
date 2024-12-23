"use client";
import { useState } from "react";

const data = [
  { value: "AC", style: "operator", size: "big-vertical" },
  { value: "*", style: "operator" },
  { value: "/", style: "operator" },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: "-", style: "operator" },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: "+", style: "operator" },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: "=", style: "operator", size: "big-horizontal" },
  { value: 0, size: "big-vertical" },
  { value: "." },
];

export default function Home() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const buttonValue = (event.target as HTMLDivElement).innerText;
    if (buttonValue === "=") {
      try {
        setResult(eval(value).toString());
      } catch (e: unknown) {
        setValue((e as Error).message);
      }
    } else if (buttonValue === "AC") {
      setValue("");
      setResult("");
    } else {
      setValue(value + buttonValue);
    }
  };

  return (
    <main className="w-full h-svh flex justify-center items-center">
      <div className=" w-[390px] h-[720px] bg-container-gradient rounded-2xl shadow-[0_2px_30px_-50px_hsla(225,33%,98%,40%)] justify-end items-center flex flex-col pb-12">
        <div className="w-[312px] mb-8">
          <p className="w-full text-[#4799D1] text-4xl text-right">{value}</p>
          <p className="w-full h-12 text-[#1475B8] text-5xl text-right">
            {result}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {data.map((item) => {
            if (item.style === "operator") {
              return (
                <div
                  key={item.value}
                  onClick={handleButtonClick}
                  className={`flex justify-center items-center size-16 ${
                    item.size === "big-vertical"
                      ? "w-[148px] col-span-2"
                      : item.size === "big-horizontal"
                      ? "h-[148px] row-span-2"
                      : ""
                  } bg-operator-gradient rounded-md text-3xl text-white hover:bg-operator-hover cursor-pointer transition-colors`}
                >
                  {item.value}
                </div>
              );
            } else {
              return (
                <div
                  key={item.value}
                  onClick={handleButtonClick}
                  className={`flex justify-center items-center size-16
                  ${
                    item.size === "big-vertical"
                      ? "w-[148px] col-span-2"
                      : item.size === "big-horizontal"
                      ? "h-[148px] row-span-2"
                      : ""
                  } bg-number-gradient rounded-md text-3xl text-white hover:bg-number-hover  cursor-pointer transition-colors`}
                >
                  {item.value}
                </div>
              );
            }
          })}
        </div>
      </div>
    </main>
  );
}
