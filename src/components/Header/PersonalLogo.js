import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export const PersonalLogo = ({ logoSize }) => {
	const [isHovered, setIsHovered] = useState(false);

	function handleMouseOver() {
		setIsHovered(true);
	}

	function handleMouseOut() {
		setIsHovered(false);
	}

	return (
		<MainContentDiv
			logoSize={logoSize}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			isHovered={isHovered}
			animate={{ rotate: isHovered ? 0 : 45 }}
			transition={{ type: "spring" }}
		>
			<motion.div
				isHovered={isHovered}
				animate={{ rotate: isHovered ? 0 : -45 }}
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
	width: ${(props) => props.logoSize};
	height: ${(props) => props.logoSize};
	background-color: ${(props) => (props.isHovered ? "#FFFF00" : "#000000")};

	display: flex;

	flex-direction: column;

	justify-content: center;
	align-items: center;

	border-radius: 20%;

	transition-property: background-color;

	transition-duration: 1s;

	cursor: pointer;

	@media (min-width: 1000px) {
		position: relative;
		top: 2rem;
		left: 2rem;

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
	}

	@media (max-width: 1000px) {
		position: relative;
		top: 1rem;
		left: 1rem;
		> div {
			font-size: ${(props) => (props.isHovered ? "0.533rem" : "0.8rem")};
			font-weight: 700;

			display: flex;
			flex-direction: column;

			width: fit-content;

			letter-spacing: 3px;

			color: ${(props) => (props.isHovered ? "#000000" : "#ffffff")};

			transition-property: color;

			transition-duration: 1s;

			padding: 1rem;

			> span {
				margin-block: 0.2rem;
			}
		}
	}
`;
