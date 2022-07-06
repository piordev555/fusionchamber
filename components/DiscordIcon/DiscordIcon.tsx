const DiscordIcon = ({ fill = "#5865F2" }: any) => {
  return (
    <svg
      width={16}
      height={12}
      fill="none"
      version="1.1"
      preserveAspectRatio="xMaxYMax meet"
      viewBox="0 0 16 12"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0v1H2v1H1v2H0v6h1v1h1v1h3v-1H4v-1h8v1h-1v1h3v-1h1v-1h1V4h-1V2h-1V1h-1V0h-3v1H6V0H3zm9 10V9h1v1h-1zm-8 0H3V9h1v1zm9-3h-1v1h-2V7H9V5h1V4h2v1h1v2zM6 4v1h1v2H6v1H4V7H3V5h1V4h2z"
        fill={fill}
      />
    </svg>
  );
};

export default DiscordIcon;
