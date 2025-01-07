// components/icons/GithubIcon.tsx
interface GithubIconProps {
  color?: string;
  size?: number;
}

export function GithubIcon({ color = "#999", size = 33 }: GithubIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 33 33" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M22.7677 31.7078V27.4504C22.8233 26.7431 22.7278 26.032 22.4873 25.3645C22.2469 24.6969 21.8671 24.0881 21.3733 23.5787C26.0312 23.0595 30.9264 21.2943 30.9264 13.1949C30.9259 11.1238 30.1294 9.13218 28.7013 7.63217C29.3774 5.82021 29.3296 3.81738 28.5678 2.03974C28.5678 2.03974 26.8174 1.52055 22.7677 4.23518C19.3677 3.31372 15.7838 3.31372 12.3839 4.23518C8.33417 1.52055 6.58376 2.03974 6.58376 2.03974C5.82184 3.81738 5.77403 5.82021 6.45025 7.63217C5.01153 9.14331 4.21406 11.153 4.22515 13.2394C4.22515 21.2795 9.12036 23.0447 13.7782 23.6232C13.2902 24.1276 12.9138 24.729 12.6736 25.3883C12.4333 26.0477 12.3346 26.7504 12.3839 27.4504V31.7078" 
        stroke={color} 
        strokeWidth="2.2251" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12.3838 28.7407C7.9336 30.1844 4.2251 28.7407 2 24.2905" 
        stroke={color} 
        strokeWidth="2.2251" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}