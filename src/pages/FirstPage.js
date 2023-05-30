import { useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { themes } from "../CONSTS/THEMES";
import { LanguageAndThemeContext } from "../contexts/LanguageAndThemeContext";
import AboutMeComponent from "../components/AboutMe/AboutMe";
import ExperienceComponent from "../components/Experience/Experience";
import ProjectsComponent from "../components/Projects/Projects";
import CurriculumComponent from "../components/Curriculum/Curriculum";

export const FirstPage = () => {
	const { theme, language } = useContext(LanguageAndThemeContext);

	return (
		<Container theme={theme}>
			<Header theme={theme}></Header>
			<MainContent>
				<AboutMeComponent theme={theme} language={language} />
				<ExperienceComponent theme={theme} language={language} />
				<ProjectsComponent theme={theme} language={language} />
				<CurriculumComponent theme={theme} language={language} />
			</MainContent>
		</Container>
	);
};

//Styled-components

const Container = styled.div`
	min-height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => {
		return themes[props.theme].firstPageBackground;
	}};
`;

const MainContent = styled.div`
	width: 75%;
	max-width: 1280px;
	> * {
		margin-bottom: 2rem;
	}
`;
