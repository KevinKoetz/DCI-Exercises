import React, { useLayoutEffect, useRef, useState } from "react";
import { BoatState } from "./App";
import "./Boat.css";

function Boat({ isStarted, speed, gear }: BoatState) {
  const [parentDimensions, setParentDimensions] = useState({
    height: 0,
    width: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current || !ref.current.parentElement) return;

    const onResizeListener: ResizeObserverCallback = (entries) => {
      setParentDimensions({
        width: entries[0].contentRect.width,
        height: entries[0].contentRect.height,
      });
    };

    const observer = new ResizeObserver(onResizeListener);
    observer.observe(ref.current.parentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;
    if (speed === 0) return;

    const animation = new Animation((interval) => {        
      if (!ref.current) return;
      const pixelPerSecond = 20;
      const distance = pixelPerSecond * speed * (interval / 1000);

      const currentX = Number.parseFloat(ref.current.style.left);
      const parentWidth = Number.parseFloat(parentDimensions.width.toFixed(3));

      ref.current.style.left =
        
          (ref.current.style.left === ""
            ? 0
            : currentX > parentWidth
            ? -1 * (ref.current.clientWidth)
            : currentX < -1 * (ref.current.clientWidth)
            ? parentWidth
            : currentX + distance).toString()
         + "px";        
        
    })

    animation.start();

    /* () => {


      if (!ref.current) return;
      const distance = (20 * speed * 16) / 1000;

      const currentX = Number.parseFloat(ref.current.style.left);

      ref.current.style.left =
        
          (ref.current.style.left === ""
            ? 0
            : currentX > parentDimensions.width
            ? -1 * (ref.current.clientWidth)
            : currentX < -1 * (ref.current.clientWidth)
            ? parentDimensions.width
            : currentX + distance).toString()
         + "px";

    } */

  
    return () => {
      animation.stop();
    };
  }, [speed, parentDimensions]);

  return (
    <>
      <div
        className="Boat"
        /*         style={{ top: boatPosition.y, left: boatPosition.x }} */
        ref={ref}
      ></div>
      <div>
        isStarted: {String(isStarted)}, speed: {String(speed)}, gear:{" "}
        {String(gear)},
      </div>
    </>
  );
}

class Animation {
  constructor(callback: (timeSinceLastCall: number, duration: number) => void) {
    this.callback = callback;
    this.isRunning = false;
    this.startTime = 0;
    this.callbackTime = 0;
  }
  callback: (timeSinceLastCall: number, duration: number) => void;
  isRunning: boolean;
  startTime: number;
  callbackTime: number;
  start(){
    this.isRunning = true;
    this.startTime = performance.now()
    const recurse:FrameRequestCallback = (time) => {
      if(this.isRunning){
        const timeSinceLastCall = time - (this.callbackTime ? this.callbackTime : time); 
        this.callback(timeSinceLastCall, time - this.startTime);
        this.callbackTime = performance.now();
        requestAnimationFrame(recurse)
      }
    }
    requestAnimationFrame(recurse)
  }
  stop(){
    this.isRunning = false;
    this.startTime = 0;
    this.callbackTime = 0;
  }
}

export default Boat;
