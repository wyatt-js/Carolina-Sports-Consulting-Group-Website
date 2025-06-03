export default function Clients() {
  const items = [
    {
      title: "Under Armour",
      image:
        "Under_armour.png",
    },
    {
      title: "Pittsburgh Pirates",
      image:
        "pirates.png",
    },
    {
      title: "Rams Club",
      image:
        "ramsclub.png",
    },
    {
      title: "SMU Athletics",
      image:
        "SMU.png",
    },
    {
      title: "PGA Tour",
      image:
        "pga.png",
    },
    {
      title: "Charlotte Sports Foundation",
      image:
        "charsports.png",
    },
    {
      title: "UNC Athletics",
      image:
        "UNC.png",
    },
  ];
  return (
    <>
<h2 className="pl-0 md:pl-24 text-3xl md:text-4xl font-bold text-white underline decoration-[var(--color-secondary)] underline-offset-4 decoration-4 text-center md:text-left">
Clients
      </h2>
      <div className="relative md:mb-28 md:mt-12 py-24">
        <div className="absolute inset-0 z-0">
          <img src="wave-graphic.svg" className="w-full h-full object-cover" />
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 px-24 z-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 glass rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
              src={item.image}
              alt={item.title}
              className="mx-auto w-32 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
