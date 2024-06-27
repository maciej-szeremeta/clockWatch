import { useTimer } from "../../hooks/useTimer";

type TimerProps = { time: number };

const Timer = ({ time }: TimerProps) => {
   const [hh, mm, ss, ms] = useTimer(time);
   
  return (
    <span>
      {hh}:{mm}:{ss}.{ms}
    </span>
  );
};

export { Timer };