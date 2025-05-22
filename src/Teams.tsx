type Person = {
    name: string;
    headshot: string;
    year: string;
    project: string;
    linkedin: string;
  };
  
  const JRpeople: Person[] = [
    { name: "Riley Snow", headshot: "headshots/Riley.jpg", year: "Junior", project: "", linkedin: "https://www.linkedin.com/in/rileysnow1" },
    { name: "Trevor Lan", headshot: "headshots/Trevor.jpg", year: "Junior", project: "", linkedin: "https://www.linkedin.com/in/trevor-lan" },
    { name: "Corson Schweizer", headshot: "headshots/Corson.jpg", year: "Junior", project: "", linkedin: "https://www.linkedin.com/in/corsonschweizer" },
    { name: "Mathias Reinartz", headshot: "headshots/Reinartz.jpg", year: "Junior", project: "", linkedin: "https://www.linkedin.com/in/thomas-reinartz" },
    { name: "Devin Buckler", headshot: "headshots/Devin.jpg", year: "Junior", project: "", linkedin: "https://www.linkedin.com/in/devin-buckler-4b4a58246" },
    { name: "Henry Dudeck", headshot: "headshots/Dudeck.jpg", year: "Junior", project: "", linkedin: "https://www.linkedin.com/in/henrydudeck1" },
    { name: "Landis Haynes", headshot: "headshots/Landis.jpg", year: "Junior", project: "", linkedin: "https://www.linkedin.com/in/landis-haynes/" },
    { name: "Ria Shah", headshot: "headshots/Ria.jpg", year: "Junior", project: "", linkedin: "https://www.linkedin.com/in/riarshah04/" },
    { name: "Max Daum", headshot: "headshots/Daum.jpg", year: "Junior ", project: "", linkedin: "https://www.linkedin.com/in/max-daum" },
    { name: "Kat Golson", headshot: "headshots/Kat.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/katherineagolson" },
    { name: "Isabella Antonacci", headshot: "headshots/Isabella.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/isabellaantonacci" },
    { name: "Yianni Peroulas", headshot: "headshots/Peroulas.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/yianni-peroulas" },
    { name: "Matt Rossitch", headshot: "headshots/Rossitch.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/matt-rossitch" },
    { name: "Max Bolster", headshot: "headshots/Bolster.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/max-bolster" },
    { name: "Jenna Cashman", headshot: "headshots/Jenna.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/jenna-cashman21" },
    { name: "Reeves Jones", headshot: "headshots/Reeves.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/reevesj28" },
    { name: "Anna Schmedes", headshot: "headshots/Schmedes.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/anna-schmedes-090960292" },
    { name: "Matteus Butler", headshot: "headshots/Butler.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/matteus-butler-a89bbb290" },
    { name: "Aidan Dobson", headshot: "headshots/Dobson.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/aidan-dobson" },
    { name: "Coco Jones", headshot: "headshots/Jones.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/coco-jones-154347257" },
    { name: "Sidney Griffin", headshot: "headshots/Sidney.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/sidneyagriffin" },
    { name: "Caroline Crews", headshot: "headshots/Caroline.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/caroline-crews" },
    { name: "Carter Page", headshot: "headshots/Carter.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/carterpage03" },
    { name: "Sydnie Rice", headshot: "headshots/Rice.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/sydnie-rice" },
    { name: "Meaghan Leary", headshot: "headshots/Leary.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/meaghan-leary0319" },
    { name: "Andres Cremer", headshot: "headshots/Cremer.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/andrescremer" },
    { name: "Connor Markwell", headshot: "headshots/Markwell.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/connor-markwell" },
    { name: "Evan Rogers", headshot: "headshots/Rogers.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/evan-s-rogers" },
    { name: "Harini Alluri", headshot: "headshots/Alluri.jpg", year: "", project: "", linkedin: "https://www.linkedin.com/in/harinialluri" }
  ];

  const SOpeople: Person[] = [
    { name: "Jaeger Ouanounou", headshot: "headshots/Jager.jpg", year: "Sophomore", project: "", linkedin: "https://www.linkedin.com/in/jaeger-ouanounou-2875b8321" },
    { name: "Levi Graham", headshot: "headshots/Graham.jpg", year: "Sophomore", project: "", linkedin: "https://www.linkedin.com/in/levi-graham-9704b5293" },
    { name: "Max Haber", headshot: "headshots/Haber.jpg", year: "Sophomore", project: "", linkedin: "https://www.linkedin.com/in/max-haber/" },


  ];

  export default function Teams() {
    return (
      <div className="relative">
        <h2 className="mb-12 pl-0 md:pl-24 text-3xl md:text-4xl font-bold text-white underline decoration-[var(--color-secondary)] underline-offset-4 decoration-4 text-center md:text-left">
          Consultants
        </h2>
        <h2 className="mx-auto w-fit text-3xl md:text-4xl font-bold text-white">
          Juniors
        </h2>
            <img
            src="/checks.png"
            alt="Carolina Sports Consulting Group"
            className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none z-0"      />
        <div className="px-6 md:px-24 my-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {JRpeople.map((person, index) => (
            <div key={index} className="relative group text-center">
              <img
                src={person.headshot}
                alt={person.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-2 group-hover:opacity-40 group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              {person.linkedin && (
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <img
                      src="LinkedIn.png"
                      alt="LinkedIn"
                      className="w-10 h-10 mt-2 mb-2"
                    />
                  </a>
                )}
                <p className="text-white font-semibold w-28">{person.name}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mx-auto w-fit text-3xl md:text-4xl font-bold text-white">
          Sophomores
        </h2>
        <div className="px-6 md:px-24 my-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {SOpeople.map((person, index) => (
            <div key={index} className="relative group text-center">
              <img
                src={person.headshot}
                alt={person.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-2 group-hover:opacity-40 group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              {person.linkedin && (
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <img
                      src="LinkedIn.png"
                      alt="LinkedIn"
                      className="w-10 h-10 mt-2 mb-2"
                    />
                  </a>
                )}
                <p className="text-white font-semibold w-28">{person.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }