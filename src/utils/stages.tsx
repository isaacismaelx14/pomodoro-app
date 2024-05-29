import { TimerType } from "../enums/types";

export const Stages = [
  {
    label: "Work",
    value: TimerType.WORK,
    time: 25 * 60,
  },
  {
    label: "Short Break",
    value: TimerType.SHORT_BREAK,
    time: 5 * 60,
  },
  {
    label: "Long Break",
    value: TimerType.LONG_BREAK,
    time: 15 * 60,
  },
];

export const getStage = (timer: TimerType) => {
  return Stages.find((stage) => stage.value === timer);
};
