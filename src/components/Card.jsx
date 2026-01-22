import { useState } from "react";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardTab from "./CardTab";

function Card({ flower }) {

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col lg:flex-row items-center justify-center px-8">
			<CardImage flower={flower} isOpen={isOpen}/>
			<CardInfo flower={flower} isOpen={isOpen} />
			<CardTab isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
}

export default Card;