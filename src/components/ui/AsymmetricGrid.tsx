type GalleryImage = {
  id: number;
  src: string;
  category: string;
};

type Props = {
  images: GalleryImage[];
};

const AsymmetricGalleryGrid: React.FC<Props> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-6">
      {images.map((image, index) => {
        const isFeatured = index === 0;

        return (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-2xl shadow-sm group
              ${
                isFeatured
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-1 md:row-span-1"
              }`}
          >
            <img
              src={image.src}
              alt={image.category}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <span className="text-white text-sm font-medium p-4">
                {image.category}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AsymmetricGalleryGrid;
