import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface BiographySection {
  title: string;
  subtitle?: string;
  content: string[];
  imageUrl: string;
  imagePosition: 'left' | 'right';
  details?: { label: string; value: string }[];
}

const biographyData: BiographySection[] = [
  {
    title: 'The Purpose Of His Avatar',
    imageUrl: 'src/assets/purpose.png',
    imagePosition: 'left',
    content: [
      'Swaminarayan Bhagwan incarnated on earth, along with His dham and some of His muktas, to establish ekantik dharma, and grant kalyan to those who became His bhaktas.',
      'He incarnated at Dharma-Dev\'s house in Chhapaiya in Kaushal-Desh, to save Bhakti-Mata and Dharma-Dev from harassment by demons. He also incarnated to take mumukshu bhaktas to Akshardham, by imparting knowledge of His svarup, dharma, vairagya, and bhakti.',
      'While on earth, He established ekantik dharma, which had been destroyed many years ago, and He destroyed adharma. He initiated over 2000 sadhus, of which 500 were initiated as paramhans.',
    ],
  },
  {
    title: 'Birth Details',
    subtitle: 'The Divine Arrival',
    imageUrl: 'src/assets/birth.png',
    imagePosition: 'right',
    content: [
      'Born on Chaitra sud 9, VS 1837 (2nd April 1781) - Ramnavmi, in the sacred land of Chhapaiya, near Ayodhya.',
      'Named Ghanshyam by Bhakti-Mata, He was also known as Hari, Krishna, Hari-Krishna, and Nilkanth.',
    ],
    details: [
      { label: 'Birth Date', value: 'Chaitra sud 9, VS 1837 (2nd April 1781)' },
      { label: 'Birthplace', value: 'Chhapaiya, near Ayodhya' },
      { label: 'Names', value: 'Ghanshyam, Hari, Krishna, Nilkanth' },
      { label: 'Father', value: 'Dharma-Dev (Dev-Sharma)' },
      { label: 'Mother', value: 'Bhakti-Mata (Premvati)' },
      { label: 'Guru', value: 'Ramanand Swami' },
    ],
  },
  {
    title: 'Van-Vicharan',
    subtitle: 'The Sacred Journey',
    imageUrl: 'src/assets/vanvicharan.png',
    imagePosition: 'left',
    content: [
      'At the tender age of 11 years, 3 months, and 1 day, young Nilkanth embarked on a seven-year spiritual pilgrimage across the Indian subcontinent.',
      'This remarkable journey began on Ashadh sud 10, VS 1849, when He left Ayodhya, and concluded on Shravan vad 6, VS 1856, in Loj.',
      'During this period, He traversed forests, mountains, and holy sites, facing numerous challenges while spreading divine wisdom.',
    ],
    details: [
      { label: 'Start Date', value: 'Ashadh sud 10, VS 1849' },
      { label: 'Age at Start', value: '11 years, 3 months, 1 day' },
      { label: 'Duration', value: '7 years, 1 month, 11 days' },
      { label: 'End Location', value: 'Loj' },
    ],
  },
  {
    title: 'Bhagvati Diksha',
    subtitle: 'The Sacred Initiation',
    imageUrl: 'src/assets/bhagwatidiksha.png',
    imagePosition: 'right',
    content: [
      'On Kartik sud 11, VS 1857, at the age of 19 years, Nilkanth Varni met Ramanand Swami in Piplana and received initiation.',
      'He was given the name Sahajanand Swami and Narayan Muni by his Guru. Later, in Faneni, He proclaimed the Swaminarayan Mahamantra and became known as Swaminarayan.',
      'Just one year later, on Kartik sud 11, VS 1858, at age 20, Ramanand Swami handed over the leadership of the Sampraday to Him in Jetpur.',
    ],
    details: [
      { label: 'Initiation Date', value: 'Kartik sud 11, VS 1857' },
      { label: 'Age', value: '19 years, 7 months, 2 days' },
      { label: 'Place', value: 'Piplana' },
      { label: 'Leadership Date', value: 'Kartik sud 11, VS 1858' },
    ],
  },
  {
    title: 'Satsang',
    subtitle: 'The Divine Mission',
    imageUrl: 'src/assets/satsang.png',
    imagePosition: 'left',
    content: [
      'For 30 years, 9 months, and 19 days, Swaminarayan Bhagwan spread divine wisdom through satsang.',
      'He narrated the Vachanamrut, established mandirs, initiated thousands of sadhus, and transformed countless lives.',
      'His earthly presence lasted 49 years, 2 months, and 1 day, until Jyeshth sud 10, VS 1886, when He returned to His divine abode.',
    ],
    details: [
      { label: 'Satsang Period', value: '30 years, 9 months, 19 days' },
      { label: 'Time on Earth', value: '49 years, 2 months, 1 day' },
      { label: 'Departure Date', value: 'Jyeshth sud 10, VS 1886' },
    ],
  },
];

function ParallaxSection({ section, index }: { section: BiographySection; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Dramatic parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isLeft = section.imagePosition === 'left';

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center py-20 px-6"
      data-testid={`biography-section-${index}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isLeft ? '' : 'md:grid-flow-dense'}`}>
          {/* Image */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className={`relative overflow-hidden  ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}
            data-testid={`biography-image-${index}`}
          >
            <div className="aspect-[4/3] relative">
              <img
                src={section.imageUrl}
                alt={section.title}
                className="w-full h-full object-cover"
              />
              
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            style={{ y: textY }}
            className={`space-y-6 ${isLeft ? 'md:col-start-2' : 'md:col-start-1'}`}
            data-testid={`biography-content-${index}`}
          >
            <div>
              <h3 className="font-serif text-4xl md:text-5xl text-brand-primary mb-2">
                {section.title}
              </h3>
              {section.subtitle && (
                <p className="text-xl text-text-secondary italic">{section.subtitle}</p>
              )}
              <div className="w-20 h-1 bg-brand-secondary mt-4" />
            </div>

            <div className="space-y-4">
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-text-primary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {section.details && (
              <div className="bg-brand-muted rounded-xl p-6 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.details.map((detail, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide">
                        {detail.label}
                      </p>
                      <p className="text-text-primary">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Biography() {
  return (
    <div className="bg-bg-page" data-testid="biography-panel">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-6xl text-brand-primary mb-4"
        >
          Biography of Lord Swaminarayan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-text-secondary max-w-3xl mx-auto"
        >
          The divine journey from birth to eternal satsang
        </motion.p>
        <div className="w-32 h-1 bg-brand-secondary mx-auto mt-6" />
      </div>

      {/* Parallax Sections */}
      {biographyData.map((section, index) => (
        <ParallaxSection key={index} section={section} index={index} />
      ))}

      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-20 px-6 bg-brand-muted"
      >
        <p className="text-2xl md:text-3xl font-serif text-brand-primary italic max-w-4xl mx-auto">
          "Through His divine presence, Lord Swaminarayan transformed countless lives and established
          eternal dharma for the salvation of all souls."
        </p>
      </motion.div>
    </div>
  );
}