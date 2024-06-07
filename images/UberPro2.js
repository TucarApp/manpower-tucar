import React from 'react';

const Icon = ({ color, ...props }) => (
  <svg
    data-name="Capa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    {...props}>
    <path
      style={{
        fill: palette[color].primary,
      }}
      d="m10 19.9 9.9-9.9L10 .1.1 10H10v9.9z"
    />
    <path
      style={{
        fill: palette[color].secondary,
      }}
      d="M.1 10H10v9.9L.1 10"
    />
  </svg>
);

const palette = {
  blue: { primary: '#518af3', secondary: '#afcbfd' },
  gold: { primary: '#fec133', secondary: '#ffe2a8' },
  platinum: { primary: '#88a4b0', secondary: '#c4e0eb' },
  diamond: { primary: '#000', secondary: '#797a7c' }
};

export default Icon;