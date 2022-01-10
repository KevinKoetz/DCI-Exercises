import React, { useState } from "react";
import "./Chronometer.css";
import moment from "moment";

function Chronometer() {
  const [duration, setDuration] = useState(moment.duration(0));
  const [updateInterval, setUpdateInterval] = useState<NodeJS.Timer | null>(
    null
  );

  const updateFrequencyMs = 10;

  const handleStart = () => {
    if (updateInterval) return;

    const interval = setInterval(() => {
      setDuration((duration) => {     
        return moment.duration(duration.asMilliseconds() + updateFrequencyMs);
      });
    }, updateFrequencyMs)

    setUpdateInterval(interval);
  };

  const handleStop = () => {
    if (updateInterval) clearInterval(updateInterval);
    setUpdateInterval(null);
  };

  const handleReset = () => {
    if (updateInterval) clearInterval(updateInterval);
    setUpdateInterval(null);
    setDuration(moment.duration(0));
  };

  return (
    <div className="Chronometer">
      <Display
        className="Display"
        min={duration.minutes()}
        sec={duration.seconds()}
        mil={duration.milliseconds()}
      />
      <Controls
        className="Controls"
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  );
}

function Display({
  min,
  sec,
  mil,
  className,
}: {
  min: number;
  sec: number;
  mil: number;
  className?: string;
}) {
  return (
    <div className={className ? className + " Display" : className}>
      {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}:
      {mil.toString().slice(0, 2).padStart(2, "0")}
    </div>
  );
}

function Controls({
  onStart,
  onStop,
  onReset,
  className,
}: {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  className?: string;
}) {
  return (
    <div className={className ? className + " Controls" : className}>
      <input type="button" value="START" onClick={onStart} />
      <input type="button" value="STOP" onClick={onStop} />
      <input type="button" value="RESET" onClick={onReset} />
    </div>
  );
}

export default Chronometer;
