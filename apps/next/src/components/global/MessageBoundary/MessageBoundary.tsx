import React from "react";
import { twMerge } from "tailwind-merge";

import { MessageBoundaryProps as Props } from "./MessageBoundary.types";

const MessageBoundary = (props: Props) => {
  const { className, title, description, buttonText, button, onClick } = props;

  const renderButton = () => {
    if (button) return button;
    return (
      <button className="mt-6 w-full !font-semibold" onClick={onClick}>
        {buttonText}
      </button>
    );
  };

  return (
    <div
      className={twMerge(
        "MessageBoundary bg-background flex h-full w-full items-center justify-center",
        className
      )}
    >
      <div className="flex w-80 flex-col items-center text-center">
        <h1 className="text-2xl font-bold uppercase">{title}</h1>
        <p className="text-typography-3 pt-2 text-sm">{description}</p>
        {renderButton()}
      </div>
    </div>
  );
};

export default MessageBoundary;
