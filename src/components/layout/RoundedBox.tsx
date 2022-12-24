import React from "react";

type Props = {
  title: string;
  className: string | null;
  children: React.ReactNode;
};

const RoundedBox: React.FC<Props> = (props) => {
  return (
    <div
      className={`w-full bg-teal-400 rounded-xl overflow-auto ${props.className}`}
    >
      <header className="w-full bg-zinc-700 text-white text-center text-lg">
        {props.title}
      </header>
      {props.children}
    </div>
  );
};

export default RoundedBox;
