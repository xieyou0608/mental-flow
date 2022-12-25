import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/store";
import { recordActions } from "../../store/recordSlice";
import RoundedBox from "../layout/RoundedBox";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};
const StyledButton: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="text-white bg-[#7D5B5B] w-1/2 h-full hover:opacity-50 duration-500 text-xl disabled:opacity-20"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

const Stopwatch: React.FC = () => {
  const { isActive, watchSeconds } = useSelector(
    (state: AppState) => state.record
  );
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch(recordActions.startCounting());
  };

  const handlePause = () => {
    dispatch(recordActions.pauseCounting());
  };

  const handleEnd = (): void => {
    dispatch(recordActions.stopCounting());
  };

  useEffect(() => {
    if (isActive) {
      const interval = window.setInterval(() => {
        dispatch(recordActions.countSeconds());
      }, 1000);
      return () => window.clearInterval(interval);
    }
  }, [isActive]);

  const timeString =
    ("0" + Math.floor(watchSeconds / 60)).slice(-2) +
    ":" +
    ("0" + (watchSeconds % 60)).slice(-2);

  return (
    <RoundedBox
      subheader="Timer"
      className="h-[20vh] flex flex-col justify-between"
    >
      <h2 className="text-[#463C3C] text-center">{timeString}</h2>
      <div className="w-full h-1/3">
        {!isActive && watchSeconds === 0 && (
          <StyledButton onClick={handleStart}>開始計時</StyledButton>
        )}
        {!isActive && watchSeconds > 0 && (
          <StyledButton onClick={handleStart}>繼續</StyledButton>
        )}
        {isActive && <StyledButton onClick={handlePause}>暫停</StyledButton>}
        <StyledButton
          onClick={handleEnd}
          disabled={watchSeconds > 0 ? false : true}
        >
          結束
        </StyledButton>
      </div>
    </RoundedBox>
  );
};

export default Stopwatch;
