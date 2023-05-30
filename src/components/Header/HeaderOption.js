import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useContext } from "react";
import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import { LanguageAndThemeContext } from "../../contexts/LanguageAndThemeContext";

const HeaderOption = ({ text }) => {
	const { theme } = useContext(LanguageAndThemeContext);

	return <OptionContainer theme={theme}>{text}</OptionContainer>;
};

export default HeaderOption;

// Styled Components

const OptionContainer = styled.div`
	width: fit-content;

	cursor: pointer;

	font-weight: 600;

	color: ${(props) => themes[props.theme].headerButtons};
`;
