import { motion } from "framer-motion";
import { useContext, useState } from "react";
import styled from "styled-components";
import { translations } from "../CONSTS/TRANSLATIONS.js";

export const PersonalLogo = () => {
	const [isHovered, setIsHovered] = useState(false);

	function handleMouseOver() {
		setIsHovered(true);
	}

	function handleMouseOut() {
		setIsHovered(false);
	}

	return (
		<MainContentDiv
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			isHovered={isHovered}
			animate={{ rotate: isHovered ? 0 : 60 }}
			transition={{ type: "spring" }}
		>
			<motion.div
				isHovered={isHovered}
				animate={{ rotate: isHovered ? 0 : -60 }}
			>
				<span>{isHovered ? "Pedro" : "P"}</span>
				<span>{isHovered ? "Holanda" : "H"}</span>
				<span>{isHovered ? "de Sá" : "S"}</span>
			</motion.div>
		</MainContentDiv>
	);
};

// Styled Components
const MainContentDiv = styled(motion.div)`
	width: 6rem;
	height: 6rem;
	background-color: ${(props) => (props.isHovered ? "#FFFF00" : "#000000")};

	display: flex;

	flex-direction: column;

	justify-content: center;
	align-items: center;

	position: relative;
	top: 2rem;
	left: 2rem;

	border-radius: 20%;

	transition-property: background-color;

	transition-duration: 1s;

	cursor: pointer;

	> div {
		font-size: ${(props) => (props.isHovered ? "0.8rem" : "1.2rem")};
		font-weight: 700;

		display: flex;
		flex-direction: column;

		width: fit-content;

		letter-spacing: 5px;

		color: ${(props) => (props.isHovered ? "#000000" : "#ffffff")};

		transition-property: color;

		transition-duration: 1s;

		padding: 2rem;

		> span {
			margin-block: 0.3rem;
		}
	}
`;

const FirstLettersName = styled.span`
	font-size: 1rem;
	font-weight: 700;

	width: fit-content;

	letter-spacing: 5px;

	color: ${(props) => (props.isHovered ? "#000000" : "#FFFF00")};

	transition-property: all;

	transition-duration: 1s;
`;
