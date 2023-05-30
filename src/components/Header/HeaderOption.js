import { useContext, useState } from "react";
import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import { LanguageAndThemeContext } from "../../contexts/LanguageAndThemeContext";
import { SelectedSectionContext } from "../../contexts/SelectedSectionContext";

const HeaderOption = ({ optionId, isSelected, text }) => {
	const { theme } = useContext(LanguageAndThemeContext);

	const { setSelectedSection } = useContext(SelectedSectionContext);

	const [isHovered, setIsHovered] = useState(false);

	function handleClick() {
		setSelectedSection(optionId);
	}
	function handleMouseOver() {
		setIsHovered(true);
	}

	function handleMouseOut() {
		setIsHovered(false);
	}

	return (
		<OptionContainer
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			isHovered={isHovered}
			isSelected={isSelected}
			theme={theme}
			onClick={() => {
				handleClick();
			}}
		>
			{text}
		</OptionContainer>
	);
};

export default HeaderOption;

// Styled Components

const OptionContainer = styled.div`
	width: fit-content;

	padding: 1rem;

	cursor: pointer;

	font-weight: 600;

	color: ${(props) => themes[props.theme].headerButtons};

	border-radius: 2rem;

	background-color: ${(props) =>
		props.isHovered
			? "rgba(0,0,0,0.2)"
			: props.isSelected
			? "rgba(0,0,0,0.2)"
			: "#ffffff"};
`;
