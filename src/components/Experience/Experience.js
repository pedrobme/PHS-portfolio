import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import img from "../../assets/img/profilepicture.png";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { FontStyling } from "../../CONSTS/FONTSTYLE";
import ExperienceLi from "./ExperienceLi";

const AboutMeComponent = ({ theme, language }) => {
	return (
		<SectionContainer
			id="headerSecondOption"
			theme={theme}
			fontStyling={FontStyling}
		>
			<FitingDiv theme={theme}>
				<h3>{translations[language].headerSecondOption}</h3>
				<ExperiencesUl>
					<ExperienceLi competence="git" level={1} />
					<ExperienceLi competence="react" level={2} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
					<ExperienceLi competence="node" level={3} />
				</ExperiencesUl>
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
	height: 100%;
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

const ExperiencesUl = styled.ul`
	background-color: #ffffff;
	width: 100%;
	height: 80%;

	border-radius: 10px;

	display: flex;

	align-items: center;
	justify-content: center;

	flex-wrap: wrap;

	padding: 2rem;

	> li {
		margin: 5px;
	}

	overflow-y: scroll;

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
`;
