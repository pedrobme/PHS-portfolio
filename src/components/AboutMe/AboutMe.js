import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import img from "../../assets/img/profilepicture.png";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { FontStyling } from "../../CONSTS/FONTSTYLE";

const AboutMeComponent = ({ theme, language }) => {
	return (
		<SectionContainer
			id="headerFirstOption"
			theme={theme}
			fontStyling={FontStyling}
		>
			<FitingDiv theme={theme}>
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
			</FitingDiv>
		</SectionContainer>
	);
};

export default AboutMeComponent;

// Styled Components

const SectionContainer = styled.div`
	height: calc(100vh - 5rem);

	background-color: ${(props) => {
		return themes[props.theme].pagesBackground;
	}};
`;

const FitingDiv = styled.div`
	width: 75%;
	height: 100%;
	max-width: 1280px;

	margin: auto;

	position: relative;
	z-index: 0;

	padding: 2rem;

	> h3 {
		color: ${(props) => {
			return themes[props.theme].pagesFontColor;
		}};
		font-size: 2.5rem;
		pointer-events: none;
		margin-bottom: 1rem;
	}
`;

const AboutMe = styled.div`
	display: flex;
`;

const AboutMeText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 50%;
	max-width: 500px;

	overflow-y: scroll;
	overflow-x: hidden;

	padding: 2rem;

	background-color: rgba(255, 255, 0, 0.95);

	border-radius: 1rem;

	position: absolute;
	top: 25%;

	> p {
		color: #000000;

		font-weight: 600;

		margin-bottom: 1rem;
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: rgba(128, 128, 128, 0.5);
	}

	::-webkit-scrollbar-thumb {
		border-radius: 2rem;
		background: rgba(71, 74, 81, 0.5);
		border: 6px solid rgba(0, 0, 0, 0.2);
	}

	z-index: 2;
`;

const ProfileImage = styled.img`
	position: absolute;
	right: 0;
	top: 22%;
	width: 50%;

	border-radius: 2rem;
`;
