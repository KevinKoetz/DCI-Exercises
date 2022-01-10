import React from "react";
import "./Avatar.scss";

interface AvatarProps {
  src: string;
  size?: "s" | "m" | "l" | "xl";
  type?: "square" | "rounded" | "circle";
  className?: string;
}

function Avatar({ size = "m", type = "square", className, src }: AvatarProps) {
    
  return (
    <img
      className={`Avatar ${size} ${type} ${className ? className : ""}`}
      src={src}
      alt="User Avatar"
    />
  );
}

export default Avatar;
