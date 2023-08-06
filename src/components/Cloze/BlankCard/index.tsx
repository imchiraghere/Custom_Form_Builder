import React from "react";

type Props = {
  children?: React.ReactNode;
  data: {
    id: number;
    uuid: string;
    title: string;
    subtitle: string;
  };
};

const BlankCard = ({ data }: Props) => {
  return (
    <div className="shadow-lg w-30 items-center justify-center flex w-full cursor-pointer">
      <main className="w-30 p-0.5 rounded-md w-full bg-white">
        {/* <span className="flex flex-row justify-between">
          <h4 className="uppercase font-normal">{data.subtitle}</h4>
        </span> */}
        <h1 className="font-bold ml-10 text-xl">{data.title}</h1>
      </main>
    </div>
  );
};

export default BlankCard;
