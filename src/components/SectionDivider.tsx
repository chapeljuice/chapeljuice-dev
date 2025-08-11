interface SectionDividerProps {
    topColor?: string;
    bottomColor?: string;
    height?: number;
    flip?: boolean;
  }
  
  const SectionDivider: React.FC<SectionDividerProps> = ({
    topColor = "#000",
    bottomColor = "#fff",
    height = 10,
    flip = false,
  }) => {
    const chevronSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 ${height}" width="60" height="${height}">
        <polygon fill="${bottomColor}" points="0,0 15,${height} 30,0 45,${height} 60,0 60,${height} 0,${height}"/>
      </svg>
    `;

    return (
      <div 
        className={`w-full leading-[0] ${flip ? "rotate-180" : ""}`}
        style={{
          height: `${height}px`,
          background: topColor,
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(chevronSvg)}")`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: '60px 100%',
          backgroundPosition: 'left center'
        }}
      />
    );
  };
  
  export default SectionDivider;