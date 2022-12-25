import React from "react";

type Props = {
  subheader: string;
  className: string | null;
  children: React.ReactNode;
};

const RoundedBox: React.FC<Props> = (props) => {
  return (
    <div
      className={`w-full bg-[#88D9CF] rounded-xl overflow-auto ${props.className}`}
    >
      <header className="w-full bg-[#494E4D] text-white text-center text-xl">
        {props.subheader}
      </header>
      {props.children}
    </div>
  );
};

export default RoundedBox;
