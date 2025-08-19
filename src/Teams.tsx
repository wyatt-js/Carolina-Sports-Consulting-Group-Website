import { useState, useEffect } from 'react';
import {LuCircleHelp, LuCrown} from 'react-icons/lu';


type Person = {
  name: string;
  headshot: string;
  year: string;
  project: string;
  linkedin: string;
};

type Box = {
  label: string;
  color: string;
  icon?: React.ReactElement;
  image?: string;
};

const People: Person[] = [
  { name: 'Riley Snow', headshot: 'headshots/Riley.jpg', year: 'Junior', project: 'Exec', linkedin: 'https://www.linkedin.com/in/rileysnow1' },
  { name: 'Trevor Lan', headshot: 'headshots/Trevor.jpg', year: 'Junior', project: 'Exec', linkedin: 'https://www.linkedin.com/in/trevor-lan' },
  { name: 'Corson Schweizer', headshot: 'headshots/Corson.jpg', year: 'Junior', project: 'Exec', linkedin: 'https://www.linkedin.com/in/corsonschweizer' },
  { name: 'Mathias Reinartz', headshot: 'headshots/Reinartz.jpg', year: 'Junior', project: '', linkedin: 'https://www.linkedin.com/in/thomas-reinartz' },
  { name: 'Devin Buckler', headshot: 'headshots/Devin.jpg', year: 'Junior', project: '', linkedin: 'https://www.linkedin.com/in/devin-buckler-4b4a58246' },
  { name: 'Henry Dudeck', headshot: 'headshots/Dudeck.jpg', year: 'Junior', project: '', linkedin: 'https://www.linkedin.com/in/henrydudeck1' },
  { name: 'Landis Haynes', headshot: 'headshots/Landis.jpg', year: 'Junior', project: '', linkedin: 'https://www.linkedin.com/in/landis-haynes/' },
  { name: 'Ria Shah', headshot: 'headshots/Ria.jpg', year: 'Junior', project: '', linkedin: 'https://www.linkedin.com/in/riarshah04/' },
  { name: 'Max Daum', headshot: 'headshots/Daum.jpg', year: 'Junior ', project: '', linkedin: 'https://www.linkedin.com/in/max-daum' },
  { name: 'Kat Golson', headshot: 'headshots/Kat.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/katherineagolson' },
  { name: 'Isabella Antonacci', headshot: 'headshots/Isabella.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/isabellaantonacci' },
  { name: 'Yianni Peroulas', headshot: 'headshots/Peroulas.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/yianni-peroulas' },
  { name: 'Matt Rossitch', headshot: 'headshots/Rossitch.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/matt-rossitch' },
  { name: 'Max Bolster', headshot: 'headshots/Bolster.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/max-bolster' },
  { name: 'Jenna Cashman', headshot: 'headshots/Jenna.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/jenna-cashman21' },
  { name: 'Reeves Jones', headshot: 'headshots/Reeves.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/reevesj28' },
  { name: 'Anna Schmedes', headshot: 'headshots/Schmedes.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/anna-schmedes-090960292' },
  { name: 'Matteus Butler', headshot: 'headshots/Butler.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/matteus-butler-a89bbb290' },
  { name: 'Aidan Dobson', headshot: 'headshots/Dobson.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/aidan-dobson' },
  { name: 'Coco Jones', headshot: 'headshots/Jones.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/coco-jones-154347257' },
  { name: 'Sidney Griffin', headshot: 'headshots/Sidney.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/sidneyagriffin' },
  { name: 'Caroline Crews', headshot: 'headshots/Caroline.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/caroline-crews' },
  { name: 'Carter Page', headshot: 'headshots/Carter.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/carterpage03' },
  { name: 'Sydnie Rice', headshot: 'headshots/Rice.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/sydnie-rice' },
  { name: 'Meaghan Leary', headshot: 'headshots/Leary.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/meaghan-leary0319' },
  { name: 'Andres Cremer', headshot: 'headshots/Cremer.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/andrescremer' },
  { name: 'Connor Markwell', headshot: 'headshots/Markwell.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/connor-markwell' },
  { name: 'Evan Rogers', headshot: 'headshots/Rogers.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/evan-s-rogers' },
  { name: 'Harini Alluri', headshot: 'headshots/Alluri.jpg', year: '', project: '', linkedin: 'https://www.linkedin.com/in/harinialluri' },
  { name: 'Jaeger Ouanounou', headshot: 'headshots/Jager.jpg', year: 'Sophomore', project: '', linkedin: 'https://www.linkedin.com/in/jaeger-ouanounou-2875b8321' },
  { name: 'Levi Graham', headshot: 'headshots/Graham.jpg', year: 'Sophomore', project: '', linkedin: 'https://www.linkedin.com/in/levi-graham-9704b5293' },
  { name: 'Max Haber', headshot: 'headshots/Haber.jpg', year: 'Sophomore', project: '', linkedin: 'https://www.linkedin.com/in/max-haber/' },
];

const boxes: Box[] = [
  {label: 'Executive', color: "brown", icon: <LuCrown className="text-8xl text-yellow-400" />},
  {label: 'UNC Football', color: "#4B9CD3", image: 'UNC.png'},
  {label: 'Client 2', color: "grey", icon:  <LuCircleHelp className="text-8xl" />},
  {label: 'Client 3', color: "grey", icon: <LuCircleHelp className="text-8xl" />},
  {label: 'Client 4', color: "grey", icon: <LuCircleHelp className="text-8xl" />},
  {label: 'Development Program', color: "grey", icon: <LuCircleHelp className="text-8xl" />}
];

export default function Teams() {
  const [activeBox, setActiveBox] = useState<string | null>(null);

  useEffect(() => {
    if (activeBox === 'Executive') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeBox]);

  return (
    <div className="relative">
      <h2 className="mb-12 pl-0 md:pl-24 text-3xl md:text-4xl font-bold text-white underline decoration-[var(--color-secondary)] underline-offset-4 decoration-4 text-center md:text-left">
        Fall 2025 Teams
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 px-12 md:px-24 z-10 relative mb-28 md:mb-24">
			{boxes.map((box, index) => (
				<div key={index} onClick={() => setActiveBox(box.label)} className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
					<div className="w-full h-36 shadow-lg rounded-t-lg flex items-center justify-center" style={{ backgroundColor: box.color }}>
						{box.icon ? box.icon : box.image ? <img src={box.image} alt={box.label} className="w-2/3 h-5/7" /> : null}
					</div>
					<div className="flex text-black bg-white p-6 shadow-lg text-center justify-center items-center rounded-b-lg max-h-20">
						<h3 className="text-xl font-semibold">{box.label}</h3>
					</div>
				</div>
			))}
		</div>

      {activeBox === 'Executive' && (
        <div className="fixed inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setActiveBox(null)}>
          <div className="relative bg-[var(--color-black)] rounded-2xl p-10 max-w-4xl shadow-xl text-center max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="absolute top-2 right-4 md:top-4 md:right-6">
            <button
              onClick={() => setActiveBox(null)}
              className="text-white text-4xl font-bold hover:text-[var(--color-secondary)] transition"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
            <h2 className="text-4xl text-white font-bold md:mb-4">{activeBox}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
              {People.filter((person) => person.project === 'Exec').map((person, index) => (
                <div key={index} className="relative group text-center pt-6">
                  <img
                    src={person.headshot}
                    alt={person.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-3 group-hover:opacity-40 group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    {person.linkedin && (
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src="LinkedIn.png" alt="LinkedIn" className="w-16 h-16 mb-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-white font-semibold mx-auto text-xl">{person.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}