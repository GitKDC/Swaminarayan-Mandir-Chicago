export default function AcharyaParampara() {
  const acharyas = [
    {
      name: "Acharya Shree Raghuvirji Maharaj",
      born: "21st Mar 1812",
      became: "10th Nov 1826",
      death: "9th Feb 1863",
      term: "37 Years",
    },
    {
      name: "Acharya Shree Bhagvatprasadji Maharaj",
      born: "11th Oct 1838",
      became: "09th Feb 1863",
      death: "12th Aug 1879",
      term: "17 Years",
    },
    {
      name: "Acharya Shree Viharilalji Maharaj",
      born: "19th Apr 1852",
      became: "12th Aug 1879",
      death: "27th Sep 1899",
      term: "20 Years",
    },
    {
      name: "Acharya Shree Laxmiprasadji Maharaj",
      born: "15th Aug 1892",
      became: "27th Sep 1899",
      death: "24th Apr 1909",
      term: "10 Years",
    },
    {
      name: "Acharya Shree Shripatiprasadji Maharaj",
      born: "18th Aug 1875",
      became: "26th Apr 1909",
      death: "12th Feb 1931",
      term: "22 Years",
    },
    {
      name: "Acharya Shree Anandprasadji Maharaj",
      born: "22nd Jul 1906",
      became: "12th Feb 1931",
      death: "08th Jul 1974",
      term: "28 Years",
    },
    {
      name: "Acharya Shree Narendraprasadji Maharaj",
      born: "25th Jan 1930",
      became: "30th Apr 1959",
      death: "1986",
      term: "25 Years",
    },
    {
      name: "Acharya Shree Ajendraprasadji Maharaj",
      born: "16th Aug 1949",
      became: "1984",
      death: "Present",
      term: "18 Years",
    },
    {
      name: "Acharya Shree Rakeshprasadji Maharaj",
      born: "23rd Jul 1966",
      became: "31st Jan 2003",
      death: "Present",
      term: "Present",
    },
  ];

  return (
    <div className="space-y-12">
      {/* INTRO */}
      <div className="max-w-4xl">
        <h3 className="text-3xl font-serif text-orange-800 mb-4">
          Acharya Parampara
        </h3>
        <p className="text-gray-700 leading-relaxed">
          In 1826 at Vadtal, on Prabodhini Ekadashi of Vikram Samvat 1882,
          Bhagwan Swaminarayan established the dual Acharyaship in the
          Dharmavanshi Acharyas. These Acharyas are the spiritual leaders,
          administrators, and gurus of the Swaminarayan Sampraday,
          continuing the sacred lineage of Dharmadev.
        </p>
      </div>

      {/* RESPONSIBILITIES */}
      <div className="max-w-4xl">
        <h4 className="text-xl font-semibold text-orange-700 mb-3">
          Responsibilities of the Acharyas
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Initiating followers with Samanya Diksha</li>
          <li>Initiating sadhus with Maha-Bhagwadi Diksha</li>
          <li>Performing murti-pratishtha in temples</li>
          <li>Authenticating scriptures of the Sampraday</li>
          <li>Acting as the Guru and spiritual leader of the Sampraday</li>
        </ul>
      </div>

      {/* ACHARYA LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {acharyas.map((a) => (
          <div
            key={a.name}
            className="bg-white rounded-xl p-6 shadow-sm border border-orange-100"
          >
            <h5 className="text-lg font-semibold text-red-700 mb-3">
              {a.name}
            </h5>
            <p className="text-sm text-gray-700 space-y-1">
              <span className="block"><strong>Born:</strong> {a.born}</span>
              <span className="block"><strong>Became Acharya:</strong> {a.became}</span>
              <span className="block"><strong>Death:</strong> {a.death}</span>
              <span className="block"><strong>Term:</strong> {a.term}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}