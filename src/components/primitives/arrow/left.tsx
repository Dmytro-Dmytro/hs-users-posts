import { textColor } from '../../../theme/main';

export const SVGPrevious = () => {
  return (
    <svg
      style={{ verticalAlign: 'middle' }}
      width={23}
      height={40}
      viewBox="0 0 23 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M21 2L3 20L21 38" stroke={textColor} strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
};
