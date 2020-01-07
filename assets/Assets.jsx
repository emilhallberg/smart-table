import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LeftCircle = ({ fill }) => (
  <Svg width="144" height="221" viewBox="0 0 144 221" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16.6376 220.11C-8.14237 169.55 -5.15237 110.37 25.0076 66C50.7776 28.1 93.0676 5.64 131.128 1C135.288 0.49 139.508 0.16 143.738 0V73.27C142.508 73.36 141.288 73.48 140.068 73.62C134.378 74.31 128.788 75.64 123.428 77.57L119.658 78.93V98.45L102.768 88.7L99.7076 91.29C93.7276 96.11 83.3576 105.91 77.1176 121.66C65.3876 151.27 77.6176 178.27 80.0976 183.47C58.9476 195.68 37.7976 207.9 16.6376 220.11Z"
      fill={fill || 'black'}
    />
  </Svg>
);

export const RightCircle = ({ fill }) => (
  <Svg width="144" height="221" viewBox="0 0 144 221" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M63.7676 183.47C68.4776 168.84 69.3076 156.43 69.2576 148.31C69.1976 138.59 69.1376 128.2 63.7676 116.58C59.4576 107.28 53.0776 100.08 50.7076 97.53C48.1976 94.83 45.8976 92.75 44.1776 91.28L41.1176 88.68L24.2176 98.44V78.93L20.4476 77.57C13.9076 75.21 7.09763 73.77 0.137634 73.26V0C23.6676 0.89 46.7476 7.31 67.2276 18.69C72.6076 21.68 77.7876 24.98 82.7476 28.59C87.5476 32.09 95.6276 38.41 104.228 47.64C107.978 51.67 118.538 63.43 127.238 79.94C147.948 119.21 144.138 158.65 142.838 169.11C141.378 180.86 137.698 199.3 127.238 220.11C106.078 207.9 84.9276 195.68 63.7676 183.47Z"
      fill={fill || 'black'}
    />
  </Svg>
);

export const BottomCircle = ({ fill }) => (
  <Svg width="255" height="108" viewBox="0 0 255 108" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M254.518 36.98C247.358 48.1 233.928 65.87 211.638 80.97C198.388 89.95 170.858 105.54 133.128 107.05C133.128 107.05 95.7477 108.53 62.7477 92.58C59.2377 90.88 56.5077 89.39 54.6377 88.36C46.7877 84 39.5077 78.74 39.5077 78.74C31.6277 73.04 24.3077 66.58 17.6277 59.41C11.1677 52.48 5.36766 44.96 0.347656 36.98L63.8077 0.339966C66.0177 3.57997 68.4777 6.64996 71.1477 9.50996C73.1677 11.68 75.3577 13.78 77.6777 15.75L80.7377 18.36L97.6477 8.58997V28.11L101.418 29.47C102.948 30.02 105.188 30.78 107.938 31.5C113.528 32.96 132.658 37.68 153.438 29.47C162.998 25.7 169.368 20.59 175.248 15.87C182.278 10.23 187.478 4.63997 191.048 0.339966C212.218 12.55 233.368 24.76 254.518 36.98Z"
      fill={fill || 'black'}
    />
  </Svg>
);

export const Bell = ({ fill }) => (
  <Svg
    saria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="bell"
    className="svg-inline--fa fa-bell fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="30" height="30"
  >
    <Path
      fill={fill || "black"}
      d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
    />
  </Svg>
);