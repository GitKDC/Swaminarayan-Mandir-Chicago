type EventCardProps = {
    title: string;
    description: string;
  };
  
  export default function EventCard({ title, description }: EventCardProps) {
    return (
      <div className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    );
  }
  