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

const OptionCard = ({ data }: Props) => {
  return (
    <div className="shadow-lg rounded-md h-20 flex w-full cursor-pointer bg-emerald-100">
      <main className=" items-center flex justify-center rounded-md w-full m-2 bg-white w-40">
        <h1 className="font-bold text-xl">{data.title}</h1>
      </main>
    </div>
  );
};

export default OptionCard;
