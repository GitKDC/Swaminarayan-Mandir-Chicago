type SectionProps = {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
  };
  
  export default function Section({ title, subtitle, children }: SectionProps) {
    return (
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {title && (
            <h2 className="text-4xl md:text-5xl font-serif text-orange-800 mb-4 ">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-700 max-w-3xl mb-10">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </section>
    );
  }
  