import data from "/data/data.json";
import Link from "next/link";
const SeniorJuzPage = () => {
	const taipalar = data["uly_juz"]["taipalar"].map((taipa) => (
		<Link
			href={`/juzes/senior_juz/${taipa.taipa}`}
			key={taipa.taipa}
			className="hover:text-gray-600 duration-150"
		>
			{taipa.taipa}
		</Link>
	));
	return (
		<div className="flex flex-col">
			<div className="pb-40">
				<img src="/bg-senior.jpg" className="bg-pic"></img>
				<img
					src="/senior.png"
					className="w-[480px] m-auto pt-24 pb-6 drop-shadow-xl"
				></img>
				<h2 className="text-white text-5xl text-center font-extralight">
					Ūly Jüz
				</h2>
			</div>
			<div className="w-[720px] m-auto text-xl text-gray-900">
				The representatives of the{" "}
				<span className="font-bold">Senior Juz</span>{" "}
				radiate an aura of profound spirituality and
				reverence. They are the guardians of Kazakhstan's
				sacred traditions and hold deep knowledge of the
				spiritual teachings that have shaped their land.
				With a serene presence and humble demeanor, they
				guide their community towards enlightenment, weaving
				the tapestry of their faith through the sacred
				mosques, mausoleums, and pilgrimage sites. Their
				wisdom, rooted in ancient traditions, is a guiding
				light that illuminates the spiritual path of the
				Kazakh people.
			</div>
			<div className="text-center pt-8 text-xl">
				<div className="text-2xl">Taipalar:</div>
				<ol className="flex m-auto space-x-4 pt-4 pb-4 justify-center font-light">
					{taipalar}
				</ol>
			</div>
		</div>
	);
};
export default SeniorJuzPage;
