import * as React from "react";

const SvgComponent = ({ variant, ...props }) => {
  const isLight = variant === "light";
  const stroke = "#0057b8";
  const fill = "#f9f9f9";

  return (
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 264.8"
      {...props}
    >
      <defs>
        <style>
          {`.cls-94,.cls-93{fill:none;stroke:${stroke};stroke-miterlimit:10;stroke-width:.5px}.cls-93{fill:${fill}}`}
        </style>
      </defs>
      <path
        className="cls-94"
        d="M56.77 210.31v-49.19h3.32v-5.54h-1.66v-8.87h1.66v-4.98h1.11v-5.54h-1.11v-4.44h1.11v-2.21h-1.11v-3.88h1.11v-3.33h-2.21v-4.43h-3.33v-2.49h-2.49V97.12h-4.9v18.29h-2.5v2.49h-3.32v4.43h-2.22v3.33h1.11v3.88h-1.11v2.21h1.11v4.44h-1.11v5.54h1.11v4.98H43v8.87h-1.66v5.54h3.33v49.06"
      />
      <path
        className="cls-93"
        d="M41.06 125.1h19.95M41.06 130.09h19.95M41.06 131.2h19.95M41.06 136.74h19.95M41.06 141.17h19.95M47.56 160.84v49.3M50.84 160.84v49.34M54.13 160.84v49.47M39.82 135.9h21.8v6.24h-21.8zM39.64 121.12h22.17v5.11H39.64zM38.3 129.3h24.84v2.05H38.3zM41.07 155.4h19.31v6.05H41.07z"
      />
      <path
        className="cls-94"
        d="M25.36 221.86v-12.78a1.85 1.85 0 0 0-1.85-1.84H22.3a1.85 1.85 0 0 0-1.85 1.84v12.78M39.08 210.18H25.36M44 221.86v-12.78a1.84 1.84 0 0 0-1.84-1.84h-1.24a1.84 1.84 0 0 0-1.84 1.84v12.78M57.7 210.18H43.98M57.7 209.08v12.78M59.55 207.24a1.85 1.85 0 0 0-1.85 1.84M60.76 207.24h-1.21M62.6 209.08a1.84 1.84 0 0 0-1.84-1.84M62.6 221.86v-12.78M76.33 210.18H62.6M81.23 221.86v-12.78a1.84 1.84 0 0 0-1.84-1.84h-1.22a1.84 1.84 0 0 0-1.84 1.84v12.78M95.27 210.18H81.23M100.59 221.86v-12.62a2.05 2.05 0 0 0-2.29-2h-.73a2.06 2.06 0 0 0-2.3 2v12.62M113.58 210.18h-12.99M119.46 221.86v-12.28a2.33 2.33 0 0 0-2.33-2.34h-1.22a2.33 2.33 0 0 0-2.33 2.34v12.28M135.12 210.15l-15.66.03M160.96 197.86h-27.78l1.96 4.48v16.84M173.75 189.6l-6.26 3.92h-6.86v-2.94h-6.86v2.94h-11.76v-1.96h-5.89v6.3"
      />
      <path
        className="cls-94"
        d="M158.67 221.88v-2.87h2.94v-15.69l-1.73-2.94h-2.72l10.33-6.86"
      />
      <path className="cls-93" d="M20.58 224.89h306.06" />
      <path
        className="cls-94"
        d="M188.08 221.88v-2.87h-2.94v-15.69l1.62-2.94h3.13l-16.14-10.78M118.69 224.89v23.52l2.84 2.84v4.03M113.85 224.89v23.52l-2.83 2.84v4.03M81.44 224.89v23.52l2.84 2.84v4.03M76.6 224.89v23.52l-2.83 2.84v4.03M62.82 224.89v23.52l2.83 2.84v4.03M57.97 224.89v23.52l-2.83 2.84v4.03M44.2 224.89v23.52l2.83 2.84v4.03M39.35 224.89v23.52l-2.83 2.84v4.03M173.71 189.6v-30.39h20.58v11.76h-20.58M150.06 203.58a3.36 3.36 0 0 1 3.36 3.36V216h-6.72v-9.11a3.36 3.36 0 0 1 3.36-3.31Z"
      />
      <path
        className="cls-94"
        d="m168.5 200.38-1.99 3.03v15.61h3.92v1.22h5.88v-1.22h3.93v-15.61l-2.19-3.03M28.16 229.88h3.49v6.88h-3.49zM28.16 239.88h3.49v6.88h-3.49zM49.56 229.88h3.49v6.88h-3.49zM49.56 239.88h3.49v6.88h-3.49zM68.19 229.88h3.49v6.88h-3.49zM68.19 239.88h3.49v6.88h-3.49zM86.68 229.88h3.49v6.88h-3.49zM86.68 239.88h3.49v6.88h-3.49zM105.95 229.88h3.49v6.88h-3.49zM105.95 239.88h3.49v6.88h-3.49zM124.96 229.88h3.49v6.88h-3.49zM124.96 239.88h3.49v6.88h-3.49zM146.7 229.88h3.49v6.88h-3.49zM146.7 239.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-93"
        d="M39.35 248.41h4.85M57.97 248.41h4.85M76.6 248.41h4.85M113.85 248.41h4.85"
      />
      <path
        className="cls-94"
        d="M41.77 224.89v23.52M60.4 224.89v23.52M79.02 224.78v23.63M101.19 224.89v23.52l2.83 2.84v4.03M96.34 224.89v23.52l-2.83 2.84v4.03"
      />
      <path className="cls-93" d="M96.34 248.41h4.85" />
      <path
        className="cls-94"
        d="M98.77 224.89v23.52M116.27 248.41v-23.52M142.66 224.89l-.9 3.28v21.36l2.07 5.76M132.91 255.29l1.99-5.76v-21.36l-1.09-3.28M138.33 224.89v24.63"
      />
      <path
        className="cls-93"
        d="M134.9 249.52h6.86M141.76 228.17h-6.86M135.98 224.89l.65 3.28M139.94 228.17l.6-3.28"
      />
      <path
        className="cls-94"
        d="m162.93 224.89-.9 3.28v21.36l2.07 5.76M153.18 255.29l1.98-5.76v-21.36l-1.09-3.28M158.6 224.89v24.63"
      />
      <path
        className="cls-93"
        d="M155.17 249.52h6.86M162.03 228.17h-6.86M156.24 224.89l.65 3.28M160.21 228.17l.6-3.28"
      />
      <path
        className="cls-94"
        d="M179.71 255.28v-14.41a6.34 6.34 0 0 0-6.34-6.33 6.34 6.34 0 0 0-6.33 6.33v14.4"
      />
      <path
        className="cls-93"
        d="M166.51 219.01h-4.9M180.24 219.01h4.9M182.75 200.38v18.63M164.15 200.37v18.64"
      />
      <path
        className="cls-94"
        d="M159.71 200.38h27.09M139.35 219.17h-6.85v2.69"
      />
      <path className="cls-94" d="m141.94 197.85-2.6 4.49v16.83h2.94v2.69" />
      <path className="cls-93" d="M137.4 219.17v-21.32" />
      <path
        className="cls-94"
        d="M25.36 214.96h13.71M43.97 214.96H57.7M62.6 214.96h13.74"
      />
      <path className="cls-93" d="M81.24 214.96h14.02" />
      <path className="cls-94" d="M100.59 214.96h12.99M119.46 214.96h15.66" />
      <path
        className="cls-93"
        d="M28.57 210.18v4.78M32.07 210.18v4.78M35.71 210.18v4.78M47.31 210.18v4.78M50.8 210.18v4.78M54.44 210.18v4.78M65.79 210.18v4.78M69.28 210.18v4.78M72.92 210.18v4.78M84.69 210.18v4.78M88.18 210.18v4.78M91.82 210.18v4.78M103.75 210.18v4.78M107.25 210.18v4.78M110.89 210.18v4.78M121.74 210.18v4.78M125.23 210.18v4.78M128.87 210.18v4.78M132.11 210.18v4.78"
      />
      <path
        className="cls-94"
        d="M321.76 221.86v-12.78a1.85 1.85 0 0 1 1.85-1.84h1.21a1.84 1.84 0 0 1 1.84 1.84v12.78M308.04 210.18h13.72M303.14 221.86v-12.78a1.84 1.84 0 0 1 1.84-1.84h1.22a1.84 1.84 0 0 1 1.84 1.84v12.78M289.42 210.18h13.72M289.42 209.08v12.78M287.57 207.24a1.85 1.85 0 0 1 1.85 1.84M286.36 207.24h1.21M284.51 209.08a1.85 1.85 0 0 1 1.85-1.84M284.51 221.86v-12.78M270.79 210.18h13.72M265.89 221.86v-12.78a1.84 1.84 0 0 1 1.84-1.84H269a1.84 1.84 0 0 1 1.84 1.84v12.78M251.85 210.18h14.04M246.53 221.86v-12.62a2.05 2.05 0 0 1 2.29-2h.73a2.06 2.06 0 0 1 2.3 2v12.62M233.54 210.18h12.99M227.66 221.86v-12.28a2.33 2.33 0 0 1 2.33-2.34h1.22a2.33 2.33 0 0 1 2.33 2.34v12.28M212 210.15l15.66.03M186.12 197.86h27.82l-1.97 4.48v16.84M179.63 193.52h6.86v-2.94h6.86v2.94h11.76v-1.96H211v6.3M327.64 255.28v-4.91l-.97-1.96v-23.52l3.01-3.01H17.44l3.01 3.01v23.52l-.98 1.96v4.91"
      />
      <path
        className="cls-94"
        d="M228.42 224.89v23.52l-2.83 2.84v4.03M233.27 224.89v23.52l2.83 2.84v4.03M265.67 224.89v23.52l-2.83 2.84v4.03M270.52 224.89v23.52l2.83 2.84v4.03M284.3 224.89v23.52l-2.84 2.84v4.03M289.15 224.89v23.52l2.83 2.84v4.03M302.92 224.89v23.52l-2.83 2.84v4.03M307.77 224.89v23.52l2.83 2.84v4.03"
      />
      <path
        className="cls-94"
        d="M193.7 203.58h6.72v9.11a3.36 3.36 0 0 1-3.36 3.36 3.36 3.36 0 0 1-3.36-3.36v-9.11Z"
        transform="rotate(180 197.06 209.81)"
      />
      <path
        className="cls-94"
        transform="rotate(180 317.215 233.325)"
        d="M315.47 229.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 317.215 243.315)"
        d="M315.47 239.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 295.82 233.325)"
        d="M294.07 229.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 295.82 243.315)"
        d="M294.07 239.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 277.18 233.325)"
        d="M275.44 229.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 277.18 243.315)"
        d="M275.44 239.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 258.695 233.325)"
        d="M256.95 229.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 258.695 243.315)"
        d="M256.95 239.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 239.43 233.325)"
        d="M237.68 229.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 239.43 243.315)"
        d="M237.68 239.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 220.41 233.325)"
        d="M218.66 229.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 220.41 243.315)"
        d="M218.66 239.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 198.67 233.325)"
        d="M196.93 229.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-94"
        transform="rotate(180 198.67 243.315)"
        d="M196.93 239.88h3.49v6.88h-3.49z"
      />
      <path
        className="cls-93"
        d="M307.77 248.41h-4.85M289.15 248.41h-4.85M270.52 248.41h-4.85M233.27 248.41h-4.85"
      />
      <path
        className="cls-94"
        d="M305.35 224.89v23.52M286.72 224.89v23.52M268.1 224.78v23.63M245.93 224.89v23.52l-2.84 2.84v4.03M250.78 224.89v23.52l2.83 2.84v4.03"
      />
      <path className="cls-93" d="M250.78 248.41h-4.85" />
      <path
        className="cls-94"
        d="M248.35 224.89v23.52M230.85 248.41v-23.52M204.46 224.89l.9 3.28v21.36l-2.07 5.76M214.21 255.29l-1.99-5.76v-21.36l1.09-3.28M208.79 224.89v24.63"
      />
      <path
        className="cls-93"
        d="M212.22 249.52h-6.86M205.36 228.17h6.86M211.14 224.89l-.65 3.28M207.18 228.17l-.6-3.28"
      />
      <path
        className="cls-94"
        d="m184.19 224.89.9 3.28v21.36l-2.07 5.76M193.94 255.29l-1.99-5.76v-21.36l1.09-3.28M188.52 224.89v24.63"
      />
      <path
        className="cls-93"
        d="M191.95 249.52h-6.86M185.09 228.17h6.86M190.88 224.89l-.65 3.28M186.91 228.17l-.6-3.28"
      />
      <path
        className="cls-94"
        d="M207.77 219.17h6.85v2.69M205.18 197.85l2.59 4.49v16.83h-2.94v2.69"
      />
      <path className="cls-93" d="M209.72 219.17v-21.32" />
      <path
        className="cls-94"
        d="M321.76 214.96h-13.71M303.15 214.96h-13.73M284.52 214.96h-13.74"
      />
      <path className="cls-93" d="M265.88 214.96h-14.02" />
      <path className="cls-94" d="M246.53 214.96h-12.99M227.66 214.96H212" />
      <path
        className="cls-93"
        d="M318.55 210.18v4.78M315.05 210.18v4.78M311.41 210.18v4.78M299.81 210.18v4.78M296.32 210.18v4.78M292.68 210.18v4.78M281.33 210.18v4.78M277.84 210.18v4.78M274.2 210.18v4.78M262.43 210.18v4.78M258.94 210.18v4.78M255.3 210.18v4.78M243.36 210.18v4.78M239.87 210.18v4.78M236.23 210.18v4.78M225.38 210.18v4.78M221.89 210.18v4.78M218.25 210.18v4.78M215.01 210.18v4.78"
      />
      <path
        className="cls-94"
        d="M287.45 207.16V18.72M294 29.27c3.52 33 6 68.12 6.74 107.24.48 25.68.15 50.27-.79 73.67M270.18 207.63c-.85-22.48-1.12-46.06-.63-70.65.41-20 1.31-37.11 1.53-41.15 1.42-26.09 3.48-48.63 5.44-66.56H273q-.45 8.58-.76 17.34-.75 20.83-.7 40.67M297.44 29.27l1.77 65.17M291.36 47.64h2.86v4.58h-2.86zM291.36 56.51h2.86v4.58h-2.86zM291.36 65.38h2.86v4.58h-2.86zM291.36 74.25h2.86v4.58h-2.86zM291.36 83.12h2.86v4.58h-2.86zM291.36 91.99h2.86v4.58h-2.86zM291.36 100.87h2.86v4.58h-2.86zM291.36 109.74h2.86v4.58h-2.86zM291.36 118.61h2.86v4.58h-2.86zM291.36 127.48h2.86v4.58h-2.86zM291.36 136.35h2.86v4.58h-2.86zM291.36 145.22h2.86v4.58h-2.86zM291.36 154.09h2.86v4.58h-2.86zM291.36 162.96h2.86v4.58h-2.86zM280.32 82.84h4.29v3.55h-4.29zM280.32 90.13h4.29v3.55h-4.29zM280.32 97.42h4.29v3.55h-4.29zM280.32 104.71h4.29v3.55h-4.29zM280.32 112h4.29v3.55h-4.29zM280.32 119.29h4.29v3.55h-4.29zM280.32 126.58h4.29v3.55h-4.29zM280.32 141.16h4.29v3.55h-4.29zM280.32 148.45h4.29V152h-4.29zM280.32 155.74h4.29v3.55h-4.29zM280.32 163.03h4.29v3.55h-4.29zM280.32 170.32h4.29v3.55h-4.29zM280.32 177.61h4.29v3.55h-4.29z"
      />
      <path
        className="cls-94"
        d="M307.46 207.74c.1-18.88 1.12-52.43 1.12-68.47a1125.42 1125.42 0 0 0-7-120.55h-4q-.07 5.28-.13 10.55H294c-.51-4.56-.73-7.14-1.07-10.51h-15.21c-.38 3.52-.6 5.65-1.15 10.55H273c.22-3.51.33-5.9.65-10.55h-3.18 3.23-4a1123.77 1123.77 0 0 0-7 120.54c0 21 .11 48.19.23 71"
      />
      <path
        className="cls-93"
        d="M431.43 230.54a34.44 34.44 0 0 1 9.61 8.68l9.73 11.78 3.7.4.29 1.28.21.44h25.33l.42-1.66 2.8-.46h.88l.12-25.86a96.38 96.38 0 0 0-53.09-19.66"
      />
      <path
        className="cls-94"
        d="M561.05 216.89c.34-26.92.71-62.43.71-80.83 0-35.64-6.29-75.95-6.29-75.95a167.3 167.3 0 0 0-32.73-3.39 193.94 193.94 0 0 0-33.5 3.39 648.39 648.39 0 0 0-5 76c-.32 33.73 4.23 117.79 4.23 117.79M489.24 60l.4 194.25M489.34 90.81l-3.3.03M489.33 102.74h-3.85M489.34 114.67h-4.51M489.34 126.6h-5.11M489.34 138.53h-5.11M489.34 150.46h-5.11M489.34 162.4h-4.76M489.34 174.33h-4.54M489.34 186.26h-4M489.34 198.19h-3.41M489.52 210.12h-3.19M500.62 53.31h46.02M507.24 53.31v4.26M539.62 53.31v4.26"
      />
      <path
        className="cls-93"
        d="M504.04 255.29v-38.32h78.4v38.32M504.26 247.04h78.3"
      />
      <path
        className="cls-94"
        d="M496.16 253.85v-195M504.06 255.05 503.85 58M512.35 216.94V57.09M520.45 216.94V56.72M528.54 216.94V56.72M536.64 216.94V57.17M544.73 216.94V58.43M552.83 216.94V59.58M489.34 60.56h66.16M489.34 64l66.79.05M489.34 67.37h67.22M489.34 70.78H557M489.34 74.19h68.18M489.34 77.6h68.49M489.34 81.01h69.03M489.34 84.42h69.31M489.34 87.83h69.56M489.34 91.24h69.88M489.34 94.64l70.39.2M489.34 98.05h70.73M489.34 101.46h70.73M489.34 104.87h71.16M489.34 108.28l71.19.18h.3M489.34 111.69h71.77M489.34 115.1h71.93M489.34 118.51h72.08M489.34 121.91h72.3M489.34 128.73h72.44M489.34 132.14h72.44M489.34 135.55h72.44M489.34 138.96h72.44M489.34 142.37h72.44M489.34 145.78h72.44M489.34 149.19h72.44M489.34 152.59h72.44M489.34 156h72.44M489.34 159.41h72.44M489.34 162.82h72.44M489.34 166.23h72.41M489.34 169.64h72.37M489.34 173.05h72.21M489.34 176.46h72.32M489.34 179.87h72.21M489.34 183.27h72.21M489.34 186.68h72.08M489.34 190.09h72.09M489.34 193.5h72.15M489.34 196.91h72.06M489.61 200.32h71.77M489.61 203.73h71.75M489.59 207.14h71.73M489.6 210.55h71.67"
      />
      <path
        className="cls-93"
        d="M489.6 214h71.64M489.65 217.36h14.18M489.67 220.77h14.16M489.34 224.18h14.49M489.34 227.59h14.49M489.34 231h14.49M489.34 234.41h14.49M489.34 237.82h14.49M489.34 241.22h14.49M489.34 244.63h14.49M489.34 248.04h14.49M489.34 251.45h14.49M507.64 219.53h4.38v6.75h-4.38zM514.32 219.53h4.38v6.75h-4.38zM521.01 219.53h4.38v6.75h-4.38zM527.69 219.53h4.38v6.75h-4.38zM534.37 219.53h4.38v6.75h-4.38zM541.05 219.53h4.38v6.75h-4.38zM547.74 219.53h4.38v6.75h-4.38zM554.42 219.53h4.38v6.75h-4.38zM561.1 219.53h4.38v6.75h-4.38zM567.79 219.53h4.38v6.75h-4.38zM574.47 219.53h4.38v6.75h-4.38zM507.64 228.52h4.38v6.75h-4.38zM514.32 228.52h4.38v6.75h-4.38zM521.01 228.52h4.38v6.75h-4.38zM527.69 228.52h4.38v6.75h-4.38zM534.37 228.52h4.38v6.75h-4.38zM541.05 228.52h4.38v6.75h-4.38zM547.74 228.52h4.38v6.75h-4.38zM554.42 228.52h4.38v6.75h-4.38zM561.1 228.52h4.38v6.75h-4.38zM567.79 228.52h4.38v6.75h-4.38zM574.47 228.52h4.38v6.75h-4.38zM507.64 237.5h4.38v6.75h-4.38zM514.32 237.5h4.38v6.75h-4.38zM521.01 237.5h4.38v6.75h-4.38zM527.69 237.5h4.38v6.75h-4.38zM534.37 237.5h4.38v6.75h-4.38zM541.05 237.5h4.38v6.75h-4.38zM547.74 237.5h4.38v6.75h-4.38zM554.42 237.5h4.38v6.75h-4.38zM561.1 237.5h4.38v6.75h-4.38zM567.79 237.5h4.38v6.75h-4.38zM574.47 237.5h4.38v6.75h-4.38z"
      />
      <path
        className="cls-94"
        d="M431.34 255.25V171.6l3.15-2.74v-5.25l-3.62-3.61a1.94 1.94 0 0 0-2.75 0l-.78.78-2.34 2.33h-12.49v-6.49l-3.57-4.17a3.2 3.2 0 0 0-4.85 0l-2.85 3.32a.44.44 0 0 1-.78-.24c-.19-2.32-1.07-7.81-4.94-10.9-5-4-10-8.08-10-8.08s-5.13 4.13-10.13 8.13c-3.87 3.09-4.74 8.58-4.94 10.9a.45.45 0 0 1-.78.25l-2.84-3.32a3.2 3.2 0 0 0-4.86 0l-3.57 4.16v6.49h-12.48l-3.11-3.16a2 2 0 0 0-2.76 0l-3.62 3.62v5.2l3 2.79v83.6"
      />
      <path
        className="cls-93"
        d="M404.55 225.51h-38.34a4 4 0 0 1-3.78-4.11v-2.7l-1.85-3.18h49.75l-2 3.18v2.7a4 4 0 0 1-3.78 4.11ZM388.74 232.13h-6.55l-1.3-6.62h9.03l-1.18 6.62z"
      />
      <rect
        className="cls-93"
        x={380.99}
        y={232.13}
        width={8.82}
        height={3.68}
        rx={1.84}
      />
      <path
        className="cls-93"
        d="M382.87 235.81v10M387.94 235.81v10.03M373.67 232.13h-6.55l-1.3-6.62h9.03l-1.18 6.62z"
      />
      <rect
        className="cls-93"
        x={365.93}
        y={232.13}
        width={8.82}
        height={3.68}
        rx={1.84}
      />
      <path
        className="cls-93"
        d="M367.8 235.81v10M372.87 235.81v10.06M403.92 232.13h-6.54l-1.3-6.62h9.03l-1.19 6.62z"
      />
      <rect
        className="cls-93"
        x={396.18}
        y={232.13}
        width={8.82}
        height={3.68}
        rx={1.84}
      />
      <path
        className="cls-93"
        d="M398.06 235.81v10M403.12 235.81v10M339.5 245.57h9.84l3.32-1.32 3.56 1.56h56.99l3.82-1.82 4.01 2.01h10.39M339.5 227.49h26.71M404.75 227.49h26.68"
      />
      <path
        className="cls-94"
        d="M385.46 181.17a10.16 10.16 0 0 1 10.16 10.16v18.27H375.3v-18.26a10.16 10.16 0 0 1 10.16-10.17ZM348 187.72a5.17 5.17 0 0 1 5.17 5.17v16.72h-10.39v-16.72a5.17 5.17 0 0 1 5.22-5.17Z"
      />
      <path
        className="cls-93"
        d="M378.92 202.85h13.09v6.76h-13.09zM339.5 209.61h91.93"
      />
      <path
        className="cls-94"
        d="M363.53 177.61v2.08l-2.8 1.72 1.15 28.28M356.29 209.69l1-28.28-2.56-1.72v-2.08M373.14 177.61v2.08l-2.8 1.72 1.15 28.28M365.9 209.69l1-28.28-2.55-1.72v-2.08"
      />
      <path
        className="cls-94"
        d="M353.64 177.75v-8.16h20.15v8.02H339.5M353.64 169.66l-.77-2M374.48 167.66l-.69 2"
      />
      <path className="cls-93" d="M353.64 172.09h20.15" />
      <path
        className="cls-94"
        d="M408.12 177.61v2.08l2.8 1.72-1.15 28.28M415.36 209.69l-1-28.28 2.56-1.72v-2.08M398.51 177.61v2.08l2.8 1.72-1.15 28.28M405.75 209.69l-1-28.28 2.56-1.72v-2.08"
      />
      <path
        className="cls-94"
        d="M418.01 177.75v-8.16h-20.15v8.02h33.51M418.01 169.66l.77-2M397.17 167.66l.69 2M418.01 172.09h-20.15"
      />
      <path
        className="cls-93"
        d="M369.98 156.12v11.54M400.73 156.05c-.05 3.87-.09 7.74-.14 11.61M345.73 162.93v4.73M425 162.93v4.73M359.08 156.12h53.06M370.67 153.76h29.52M371.09 151.47h28.44v-.15M371.89 149.59h27.24M372.69 147.71h25.45M374.3 145.82h22.42M376.1 144.11h18.82M378.7 142.1l13.62.01M381.1 140.1h8.82M383.11 138.5h4.8"
      />
      <path
        className="cls-94"
        d="M374.19 159.78h22.54v3.94h-22.54zM361.53 157.92h5.7v6.97h-5.7zM403.48 157.92h5.7v6.97h-5.7z"
      />
      <path
        className="cls-93"
        d="M339.3 160.74h4.19M348.77 164.35v1.27M351.06 164.35v1.27M353.35 164.35v1.27M355.64 164.35v1.27M415.27 164.35v1.27M417.55 164.35v1.27M419.84 164.35v1.27M422.13 164.35v1.27"
      />
      <circle className="cls-93" cx={343.13} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={346.76} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={350.38} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={376.66} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={380.29} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={383.91} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={387.53} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={391.16} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={394.78} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={420.64} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={424.26} cy={173.12} r={1.03} />
      <circle className="cls-93" cx={427.89} cy={173.12} r={1.03} />
      <path
        className="cls-93"
        d="M349.32 190.57h-2.62l-.57-5.33h3.64l-.45 5.33z"
      />
      <path
        className="cls-94"
        d="M423.27 187.72a5.17 5.17 0 0 1 5.17 5.17v16.72H418.1v-16.72a5.17 5.17 0 0 1 5.17-5.17Z"
      />
      <path
        className="cls-93"
        d="M424.63 190.57h-2.62l-.56-5.33h3.64l-.46 5.33zM342.67 229.9h1.74v10.98h-1.74zM345.89 229.9h1.74v10.98h-1.74zM349.11 229.9h1.74v10.98h-1.74zM352.33 229.9h1.74v10.98h-1.74zM355.55 229.9h1.74v10.98h-1.74zM358.77 229.9h1.74v10.98h-1.74zM361.99 229.9h1.74v10.98h-1.74zM407.65 229.9h1.74v10.98h-1.74zM410.87 229.9h1.74v10.98h-1.74zM414.09 229.9h1.74v10.98h-1.74zM417.31 229.9h1.74v10.98h-1.74zM420.53 229.9h1.74v10.98h-1.74zM423.75 229.9h1.74v10.98h-1.74zM426.97 229.9h1.74v10.98h-1.74zM362.43 218.7H339.5M408.33 218.7h23.1M431.47 206.53s6.18 4.51 15.32 14.87M431.37 220.17s2.94.06 12.19 9.92"
      />
      <path className="cls-94" d="M431.37 229s2.94 0 12.19 10.09" />
      <path
        className="cls-93"
        d="M452.59 245.08h31.78M452.55 241.08h31.82M452.55 237.08h32.97M452.59 233.09h27.61M452.59 230.09h22.49M452.59 227.09h15.76M452.55 224.1h8"
      />
      <path className="cls-94" d="M449.19 221.4s19.35 2.7 35.34 14.68" />
      <path
        className="cls-93"
        d="M448.06 221.1a4.5 4.5 0 0 1 4.5 4.5v25.32h-9v-25.33a4.5 4.5 0 0 1 4.5-4.49Z"
      />
      <path
        className="cls-93"
        d="M446.56 231.09h3v14.99h-3zM489 221.8h.11a4.44 4.44 0 0 1 4.44 4.44v24.67h-9v-24.66a4.44 4.44 0 0 1 4.45-4.45Z"
      />
      <path
        className="cls-93"
        d="M487.52 231.09h3v14.99h-3zM456.55 253.07h23.98M479.23 255.27v-.75a4.46 4.46 0 0 1 4.45-4.46h9.78a4.46 4.46 0 0 1 4.45 4.46v.75M439.56 255.27v-1.11a4.11 4.11 0 0 1 4.1-4.1h8.79a4.11 4.11 0 0 1 4.1 4.1v1.11M427.25 160.88h4.52"
      />
      <path className="cls-94" d="M434.37 167.74h-98.04M489.38 125.37h72.04" />
      <path className="cls-93" d="M452.55 249.07h31.82" />
      <path
        className="cls-94"
        d="M0 259.8h600M0 255.54h600M0 263.76h600M592.94 74.34a.17.17 0 0 0 .16-.17.16.16 0 0 0-.16-.16h-1.68a1.36 1.36 0 0 1-1.35-1.35V70.9a.16.16 0 0 0-.16-.16h-.16a.16.16 0 0 0-.16.16v1.76a1.36 1.36 0 0 1-1.36 1.34h-1.67a.17.17 0 0 0-.17.16.18.18 0 0 0 .17.17h1.67a1.35 1.35 0 0 1 1.36 1.35v1.75a.17.17 0 0 0 .16.17h.16a.17.17 0 0 0 .16-.17v-1.74a1.35 1.35 0 0 1 1.35-1.35ZM496.66 6.94a.17.17 0 0 0 .16-.17.16.16 0 0 0-.16-.16H495a1.36 1.36 0 0 1-1.35-1.35V3.5a.16.16 0 0 0-.16-.16h-.16a.17.17 0 0 0-.17.16v1.76a1.35 1.35 0 0 1-1.35 1.35h-1.67a.17.17 0 0 0-.17.16.18.18 0 0 0 .17.17h1.67a1.34 1.34 0 0 1 1.35 1.35V10a.18.18 0 0 0 .17.17h.16a.17.17 0 0 0 .16-.17V8.29A1.35 1.35 0 0 1 495 6.94ZM341.83 71a.18.18 0 0 0 .17-.17.17.17 0 0 0-.17-.16h-1.67a1.36 1.36 0 0 1-1.36-1.35v-1.81a.16.16 0 0 0-.16-.16h-.16a.16.16 0 0 0-.16.16v1.76a1.36 1.36 0 0 1-1.32 1.35h-1.68a.16.16 0 0 0-.16.16.17.17 0 0 0 .16.17H337a1.35 1.35 0 0 1 1.35 1.35v1.75a.17.17 0 0 0 .16.17h.16a.17.17 0 0 0 .16-.17V72.3a1.35 1.35 0 0 1 1.33-1.3ZM14.33 96.64a.17.17 0 0 0 .16-.17.16.16 0 0 0-.16-.16h-1.67A1.36 1.36 0 0 1 11.3 95v-1.8a.16.16 0 0 0-.16-.16H11a.16.16 0 0 0-.16.16V95a1.36 1.36 0 0 1-1.36 1.35H7.79a.16.16 0 0 0-.16.16.17.17 0 0 0 .16.17h1.67A1.35 1.35 0 0 1 10.82 98v1.75a.17.17 0 0 0 .16.17h.16a.17.17 0 0 0 .16-.17V98a1.35 1.35 0 0 1 1.36-1.35ZM115 20.79a.17.17 0 0 0 .16-.17.16.16 0 0 0-.16-.16h-1.68a1.36 1.36 0 0 1-1.32-1.35v-1.76a.16.16 0 0 0-.16-.16h-.16a.17.17 0 0 0-.17.16v1.76a1.35 1.35 0 0 1-1.35 1.35h-1.66a.17.17 0 0 0-.17.16.18.18 0 0 0 .17.17h1.67a1.34 1.34 0 0 1 1.35 1.35v1.75a.18.18 0 0 0 .17.17h.16a.17.17 0 0 0 .16-.17v-1.75a1.35 1.35 0 0 1 1.35-1.35Z"
      />
    </svg>
  );
};

export default SvgComponent;
