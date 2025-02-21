interface ResumeIconProps {
  color?: string;
  size?: number;
}

export default function ResumeIcon({ color = "#999", size = 30 }: ResumeIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M25.2289 6.35833L20.6406 1.77094C20.1484 1.27885 19.4813 1 18.7867 1H7.625C6.17578 1.00547 5 2.18102 5 3.62996V26.3755C5 27.8244 6.17578 29 7.625 29H23.375C24.8242 29 26 27.8244 26 26.3755V8.21734C26 7.52295 25.7211 6.85042 25.2289 6.35833ZM23.1617 8.0041H19V3.84319L23.1617 8.0041ZM7.625 26.3755V3.62996H16.375V9.31635C16.375 10.0435 16.9602 10.6286 17.6875 10.6286H23.375V26.3755H7.625Z"
        fill={color}
      />
    </svg>
  )
}