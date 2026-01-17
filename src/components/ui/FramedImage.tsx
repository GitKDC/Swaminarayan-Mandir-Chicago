interface Props {
  src: string;
  alt: string;
}

export default function FramedImage({ alt }: Props) {
  return (
    <div className="relative w-64 h-80 flex items-center justify-center">
      {/* Frame */}
      <img
        src="src/assets/Frame.webp"
        alt="Decorative frame"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      {/* Photo inside frame */}
      <div className="absolute inset-[18%] rounded-md overflow-hidden">
        <img
          src="src/assets/sant.webp"
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
