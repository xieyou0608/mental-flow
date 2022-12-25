import React from "react";
import { useDispatch } from "react-redux";
import { Record, recordActions } from "../../store/recordSlice";

const Record: React.FC<{ record: Record }> = ({ record }) => {
  const dispatch = useDispatch();

  const formattedStartTime = record.startTime
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace("上午", "AM ")
    .replace("下午", "PM ");

  let watchTime;
  let formattedEndTime;
  if (record.watchSeconds) {
    if (record.watchSeconds >= 60) {
      watchTime = Math.floor(record.watchSeconds / 60) + " mins";
    } else {
      watchTime = (record.watchSeconds % 60) + " secs";
    }

    if (record.endTime) {
      formattedEndTime = record.endTime
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace("上午", "")
        .replace("下午", "");
    }
  }

  return (
    <li className="bg-[#463C3C] flex items-center p-3">
      <div className="flex-grow">
        <div>
          <p className="text-white text-xl font-bold">
            {formattedStartTime}~
            {formattedEndTime ? formattedEndTime : "進行中"}
            <br />
            {watchTime ? watchTime : ""}
          </p>
        </div>
        <div className="flex gap-x-1">
          {record.doneList.map((doneTask) => (
            <button
              key={doneTask.id}
              className="bg-green-600 hover:bg-green-800 duration-500 text-white rounded-3xl px-4 py-1"
              onClick={() => dispatch(recordActions.undoneTodo(doneTask))}
            >
              {doneTask.content}
            </button>
          ))}
        </div>
      </div>
      {/* <Box>
        <Tooltip title="Edit">
          <IconButton onClick={() => {}}>
            <EditIcon sx={{ color: "black" }} fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box> */}
    </li>
  );
};

export default Record;
