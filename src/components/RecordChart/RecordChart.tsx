import React, { use } from "react";
import Record from "./Record";
import RoundedBox from "../layout/RoundedBox";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
const RecordChart = () => {
  const recordList = useSelector((state: AppState) => state.record.recordList);
  return (
    <RoundedBox subheader="時間紀錄" className="min-h-[60vh]">
      <ul>
        {recordList.length > 0 &&
          recordList.map((record) => (
            <Record record={record} key={record.id} />
          ))}
      </ul>
    </RoundedBox>
  );
};

export default RecordChart;
