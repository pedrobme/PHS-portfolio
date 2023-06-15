import { useContext } from "react";
import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { LanguageAndThemeContext } from "../../contexts/LanguageAndThemeContext";

const ExperienceLi = ({ competence, level }) => {
	const { theme, language } = useContext(LanguageAndThemeContext);

	const jsx = (
		<ExperienceLiElement>
			<h3>{competence}</h3>
			<ExperienceBar>
				<BasicLevel level={level} theme={theme} />
				<IntermediaryLevel level={level} theme={theme} />
				<AdvancedLevel level={level} theme={theme} />
			</ExperienceBar>
			<p>{level === 1 && translations[language].basic}</p>
			<p>{level === 2 && translations[language].intermediate}</p>
			<p>{level === 3 && translations[language].advanced}</p>
		</ExperienceLiElement>
	);

	return jsx;
};

export default ExperienceLi;

// Styled Components

const ExperienceLiElement = styled.li`
	width: 40%;

	border: 1px solid black;
	border-radius: 10px;

	padding: 3px;

	> * {
		margin-block: 5px;
	}

	> h3 {
		font-weight: 800;
		pointer-events: none;
	}

	> p {
		text-align: end;
		pointer-events: none;
	}

	@media (max-width: 650px) {
		width: 80%;
	}
`;

const ExperienceBar = styled.div`
	display: flex;
	width: 100%;
	height: 10px;
`;

const BasicLevel = styled.div`
	background-color: ${(props) => {
		return props.level === 1
			? themes[props.theme].experiencePalettes.firstLevelPalette.firstColor
			: props.level === 2
			? themes[props.theme].experiencePalettes.secondLevelPalette.firstColor
			: props.level === 3
			? themes[props.theme].experiencePalettes.thirdLevelPalette.firstColor
			: "#DFDFDF";
	}};

	height: 100%;
	width: 100%;
	border-radius: 4px;
`;

const IntermediaryLevel = styled.div`
	background-color: ${(props) => {
		return props.level === 1
			? "#DFDFDF"
			: props.level === 2
			? themes[props.theme].experiencePalettes.secondLevelPalette.secondColor
			: props.level === 3
			? themes[props.theme].experiencePalettes.thirdLevelPalette.secondColor
			: "#DFDFDF";
	}};

	height: 100%;
	width: 100%;
	border-radius: 4px;
`;

const AdvancedLevel = styled.div`
	background-color: ${(props) => (props.level <= 2 ? "#DFDFDF" : "#2fff0e")};

	height: 100%;
	width: 100%;
	border-radius: 4px;
`;
