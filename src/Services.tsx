import { LuMicroscope, LuRotate3D, LuUserSearch, LuTicket } from 'react-icons/lu';

const services = [
	{
		icon: <LuMicroscope className="text-8xl" />,
		title: 'Consumer Research',
		description: 'Uncover fan insights and market trends to drive smarter decisions',
		color: 'rgb(162, 205, 232)'
	},
	{
		icon: <LuRotate3D className="text-8xl" />,
		title: 'Digital & Social Transformation',
		description: 'Elevate your digital presence and engage fans across every platform',
		color: 'rgb(123, 184, 221)',
	},
	{
		icon: <LuUserSearch className="text-8xl" />,
		title: 'Fan Experience',
		description: 'Design memorable, seamless experiences that keep fans coming back',
		color: 'rgb(86, 160, 211)',
	},
	{
		icon: <LuTicket className="text-8xl" />,
		title: 'Ticketing Services',
		description: 'Boost sales with smart pricing, targeting, and retention strategies.',
		color: 'rgb(75, 140, 184)'
	},
];

export default function Services() {
	return (
		<>
		<h2 className="mb-12 mt-18 md:mt-0 pl-0 md:pl-24 text-3xl md:text-4xl font-bold text-white underline decoration-[var(--color-secondary)] underline-offset-4 decoration-4 text-center md:text-left">
			Services
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 md:px-24 pb-28">
			{services.map((service, index) => (
				<div
				key={index}
				className="flex flex-col h-full hover:scale-105 transition-transform duration-300 ease-in-out"
				>
				<div
					className="w-full h-36 shadow-lg rounded-t-lg flex items-center justify-center"
					style={{ backgroundColor: service.color }}
				>
					{service.icon}
				</div>

				<div className="flex flex-col flex-1 justify-between text-black bg-white p-6 shadow-lg text-center rounded-b-lg">
					<div className="space-y-3">
					<h3 className="text-2xl md:text-xl font-semibold">{service.title}</h3>
					<p className="text-xl md:text-sm text-gray-400">{service.description}</p>
					</div>
				</div>
				</div>
			))}
		</div>
		</>
	);
}