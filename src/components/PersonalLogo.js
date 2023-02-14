import { motion } from "framer-motion";
import { useContext, useState } from "react";
import styled from "styled-components";
import { translations } from "../CONSTS/TRANSLATIONS.js";
import { LanguageContext } from "../contexts/languageContext";

export const PersonalLogo = () => {
	const [isHovered, setIsHovered] = useState(false);

	const { language } = useContext(LanguageContext);

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
				animate={{
					x: isHovered ? 0 : 40,
					y: isHovered ? 0 : 50,
					rotate: isHovered ? 0 : -60,
				}}
				transition={{ type: "keyframes" }}
			>
				{isHovered ? (
					<span>
						<FirstLettersName isHovered={isHovered}>P</FirstLettersName>
						edro
					</span>
				) : (
					<FirstLettersName>P</FirstLettersName>
				)}
			</motion.div>
			<motion.div
				isHovered={isHovered}
				animate={{
					x: isHovered ? 0 : 120,
					y: isHovered ? 0 : -50,
					rotate: isHovered ? 0 : -60,
				}}
				transition={{ type: "keyframes" }}
			>
				{isHovered ? (
					<span>
						<FirstLettersName isHovered={isHovered}>H</FirstLettersName>olanda
					</span>
				) : (
					<FirstLettersName>H</FirstLettersName>
				)}
			</motion.div>
			<motion.div
				isHovered={isHovered}
				animate={{
					x: isHovered ? 0 : 140,
					y: isHovered ? 0 : -20,
					rotate: isHovered ? 0 : -60,
				}}
				transition={{ type: "keyframes" }}
			>
				{isHovered ? (
					<span>
						de <FirstLettersName isHovered={isHovered}>S</FirstLettersName>á
					</span>
				) : (
					<FirstLettersName>S</FirstLettersName>
				)}
			</motion.div>
		</MainContentDiv>
	);
};

// Styled Components
const MainContentDiv = styled(motion.div)`
	width: 150px;
	height: 150px;
	background-color: ${(props) => (props.isHovered ? "#FFFF00" : "#000000")};

	display: flex;

	flex-direction: column;

	justify-content: center;

	border-radius: 20%;

	transition-property: background-color;

	transition-duration: 1s;

	cursor: pointer;

	> div {
		font-size: 3.5rem;
		font-weight: 700;

		width: fit-content;

		letter-spacing: 5px;

		text-decoration: ${(props) => (props.isHovered ? "none" : "underline")};

		color: ${(props) => (props.isHovered ? "#000000" : "#ffffff")};

		transition-property: color;

		transition-duration: 1s;
	}
`;

const FirstLettersName = styled.span`
	font-size: 3.5rem;
	font-weight: 700;

	width: fit-content;

	letter-spacing: 5px;

	text-decoration: ${(props) => (props.isHovered ? "underline" : "underline")};

	color: ${(props) => (props.isHovered ? "#000000" : "#FFFF00")};

	transition-property: all;

	transition-duration: 1s;
`;
