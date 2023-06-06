import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import img from "../../assets/img/profilepicture.png";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { FontStyling } from "../../CONSTS/FONTSTYLE";

const AboutMeComponent = ({ theme, language }) => {
	return (
		<SectionContainer
			id="headerFourthOption"
			theme={theme}
			fontStyling={FontStyling}
		>
			<FitingDiv theme={theme}>
				<h3>{translations[language].headerFirstOption}</h3>
				<AboutMeText theme={theme}>
					<p>{translations[language].resumeAboutMeP1}</p>
					<p>{translations[language].resumeAboutMeP2}</p>
					<p>{translations[language].resumeAboutMeP3}</p>
					<p>{translations[language].resumeAboutMeP4}</p>
					<p>{translations[language].resumeAboutMeP5}</p>
					<p>{translations[language].resumeAboutMeP6}</p>
				</AboutMeText>
				<ProfileImageContainer>
					<ProfileImage src={img} />
				</ProfileImageContainer>
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
	width: 80%;
	min-width: 600px;
	max-width: calc(60 / 100 * 1480px);

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

const AboutMeText = styled.div`
	width: 40%;
	padding: 1rem;

	max-height: 300px;

	overflow-y: scroll;

	background-color: rgba(255, 255, 0, 0.95);

	position: absolute;
	left: 20px;
	top: 100%;

	border-radius: 10px;
	z-index: 10;

	user-select: none;

	> p {
		color: #000000;

		font-weight: 600;

		margin-block: 1rem;
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

const ProfileImageContainer = styled.div`
	display: block;
	width: 50%;
	height: 400px;
	position: absolute;
	right: 10%;
`;

const ProfileImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px;

	object-fit: cover;
`;
