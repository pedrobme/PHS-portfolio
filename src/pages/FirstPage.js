import { useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { themes } from "../CONSTS/THEMES";
import { LanguageAndThemeContext } from "../contexts/LanguageAndThemeContext";
import AboutMeComponent from "../components/AboutMe/AboutMe";
import ExperienceComponent from "../components/Experience/Experience";
import ProjectsComponent from "../components/Projects/Projects";
import CurriculumComponent from "../components/Curriculum/Curriculum";
import { useEffect } from "react";
import { SelectedSectionContext } from "../contexts/SelectedSectionContext";
import Footer from "../components/Footer/Footer";

export const FirstPage = () => {
	const { theme, language } = useContext(LanguageAndThemeContext);

	const { setSelectedSection } = useContext(SelectedSectionContext);

	const listenScrollEvent = () => {
		if (window.scrollY <= 400) {
			setSelectedSection("headerFirstOption");
		} else if (window.scrollY <= 900) {
			setSelectedSection("headerSecondOption");
		} else if (window.scrollY <= 1400) {
			setSelectedSection("headerThirdOption");
		} else {
			setSelectedSection("headerFourthOption");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);

	return (
		<Container theme={theme}>
			<Header theme={theme}></Header>
			<MainContent>
				<AboutMeComponent theme={theme} language={language} />
				<ExperienceComponent theme={theme} language={language} />
				<ProjectsComponent theme={theme} language={language} />
				{/* <CurriculumComponent theme={theme} language={language} /> */}
			</MainContent>
			<Footer theme={theme} language={language}></Footer>
		</Container>
	);
};

//Styled-components

const Container = styled.div`
	min-height: 100vh;
	min-width: 100vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => {
		return themes[props.theme].firstPageBackground;
	}};
`;

const MainContent = styled.div`
	width: 100%;
`;
