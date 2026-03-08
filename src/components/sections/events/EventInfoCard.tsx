// Accepts event from backend (with date, startTime, endTime, location, description, title)


type BackendEvent = {
  _id?: string;
  id?: string | number;
  title: string;
  date: string | Date;
  startTime: string;
  endTime: string;
  location: string;
  description?: string;
};

function getMonthAndDayRange(date: string | Date, startTime: string, endTime: string) {
  // date is ISO string or Date
  const d = new Date(date);
  // If multi-day, you would need start/end dates, but schema only has one date
  // We'll just show month and day
  const month = d.toLocaleString("default", { month: "long" }).toUpperCase();
  const day = d.getDate();
  return { month, day };
}
const formatTime = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hour, minute);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export default function EventInfoCard({ event }: { event: BackendEvent }) {
  const { month, day } = getMonthAndDayRange(event.date, event.startTime, event.endTime);
  return (
    <div className="bg-[#f9eded] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      {/* date pill */}
      <div className="inline-block mb-4 px-4 py-2 rounded-lg bg-orange-50 text-orange-600 text-center">
        <p className="text-xs uppercase">{month}</p>
        <p className="text-lg font-semibold">{day}</p>
      </div>

      <h3 className="font-serif text-[#8b1c1c] text-2xl mb-2">
        {event.title}
      </h3>

      <div className="text-base text-gray-600 space-y-1 mb-2">
        <p className="mt-2 text-sm text-gray-600">
          {formatTime(event.startTime)} - {formatTime(event.endTime)}
        </p>
        <p>{event.location}</p>
      </div>

      <p className="text-gray-600 text-base mb-6">
        {event.description}
      </p>

      
    </div>
  );
}
