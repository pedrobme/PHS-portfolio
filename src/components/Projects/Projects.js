import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import img from "../../assets/img/profilepicture.png";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { FontStyling } from "../../CONSTS/FONTSTYLE";

const ProjectsComponent = ({ theme, language }) => {
	return (
		<SectionContainer theme={theme} fontStyling={FontStyling}>
			<h3>{translations[language].headerFirstOption}</h3>
			<AboutMe>
				<AboutMeText theme={theme}>
					<p>{translations[language].resumeAboutMeP1}</p>
					<p>{translations[language].resumeAboutMeP2}</p>
					<p>{translations[language].resumeAboutMeP3}</p>
					<p>{translations[language].resumeAboutMeP4}</p>
					<p>{translations[language].resumeAboutMeP5}</p>
					<p>{translations[language].resumeAboutMeP6}</p>
				</AboutMeText>
				<ProfileImage src={img} />
			</AboutMe>
		</SectionContainer>
	);
};

export default ProjectsComponent;

// Styled Components

const SectionContainer = styled.div`
	padding: 2rem;
	height: calc(100vh - 5rem);
	background-color: ${(props) => {
		return themes[props.theme].pagesBackground;
	}};

	border-radius: 2rem;

	> h3 {
		color: ${(props) => {
			return themes[props.theme].pagesFontColor;
		}};
		font-size: 2.5rem;
		pointer-events: none;
		margin-bottom: 1rem;
	}

	position: relative;
	z-index: 0;
`;

const AboutMe = styled.div`
	display: flex;
`;

const AboutMeText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	padding: 2rem;

	border-radius: 2rem;

	background-color: rgba(255, 255, 0, 0.95);

	position: absolute;
	top: 8rem;
	width: 500px;

	> p {
		color: #000000;

		font-weight: 600;

		margin-bottom: 1rem;
	}

	z-index: 2;
`;

const ProfileImage = styled.img`
	position: absolute;
	right: 3rem;
	width: 600px;
	border-radius: 2rem;
`;
