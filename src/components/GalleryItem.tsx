type GalleryItemProps = {
    title: string;
  };
  
  export default function GalleryItem({ title }: GalleryItemProps) {
    return (
      <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 text-sm">
        {title}
      </div>
    );
  }
  