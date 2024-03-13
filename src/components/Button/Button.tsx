import "./Button.css";
import React from "react";
import { FunctionComponent } from "react";

interface ButtonProps {
  readonly label: string;
  readonly type?: "primary" | "outlined" | "normal" | "link";
  readonly size?: "small" | "medium" | "large";
  readonly icon?: "prefix" | null | "suffix";
  readonly iconName?: string;
  readonly color?: string;
  readonly hoverColor?: string;
  readonly activeColor?: string;
  readonly disableColor?: string;
  readonly onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  type = "primary",
  size = "medium",
  icon = null,
  iconName,
  color = "transparent",
  hoverColor = "transparent",
  activeColor = "transparent",
  disableColor = "transparent",
  onClick,
}) => {
  return (
    <>
      <button
        className={`storybook-button storybook-button--${type} storybook-button-${size}`}
        onClick={onClick}
        style={{
          backgroundColor: type === "primary" ? color : "transparent",
          borderColor:
            type === "primary" || type === "outlined" ? color : "transparent",
          color: type !== "primary" ? color : "white",
        }}
        onMouseOver={() => {}}
      >
        {icon === "prefix" ?? iconName}
        {label}
        {icon === "suffix" ?? iconName}
      </button>
    </>
  );
};

export { Button };
