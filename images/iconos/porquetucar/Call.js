import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    fill={props.fill}
    {...props}
  >
    <path d="M22 42v-3h17V23.8q0-2.9-1.25-5.575Q36.5 15.55 34.4 13.5t-4.8-3.275Q26.9 9 24 9q-2.9 0-5.6 1.225-2.7 1.225-4.8 3.275-2.1 2.05-3.35 4.725T9 23.8V36H8q-1.65 0-2.825-1.175Q4 33.65 4 32v-4q0-1.15.55-2.025T6 24.55l.15-2.65q.45-3.65 2.075-6.6 1.625-2.95 4.05-5t5.45-3.175Q20.75 6 24 6q3.3 0 6.325 1.125 3.025 1.125 5.425 3.2t4.025 5Q41.4 18.25 41.85 21.85l.15 2.6q.9.45 1.45 1.325.55.875.55 1.925v4.6q0 1.1-.55 1.95-.55.85-1.45 1.3V39q0 1.25-.875 2.125T39 42Zm-4-14.5q-.6 0-1.05-.45-.45-.45-.45-1.1 0-.6.45-1.025.45-.425 1.1-.425.6 0 1.025.425.425.425.425 1.075 0 .6-.425 1.05-.425.45-1.075.45Zm12 0q-.6 0-1.05-.45-.45-.45-.45-1.1 0-.6.45-1.025.45-.425 1.1-.425.6 0 1.025.425.425.425.425 1.075 0 .6-.425 1.05-.425.45-1.075.45Zm-17.95-2.6q-.2-2.95.825-5.35 1.025-2.4 2.75-4.075Q17.35 13.8 19.6 12.9q2.25-.9 4.5-.9 4.55 0 7.65 2.875 3.1 2.875 3.8 7.175-4.7-.05-8.275-2.525T21.75 13.1q-.8 4.05-3.375 7.175T12.05 24.9Z" />
  </svg>
);

export default SvgComponent;