import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { FontStyling } from "../../CONSTS/FONTSTYLE";
import { useState } from "react";

import FrontEndUl from "./FrontendUl";
import BackendUl from "./BackendUl";
import OthersStacksUl from "./OthersStackUl";

const ExperienceComponent = ({ theme, language }) => {
	const [selectedStack, setSelectedStack] = useState("frontEnd");

	return (
		<SectionContainer
			id="headerSecondOption"
			theme={theme}
			fontStyling={FontStyling}
		>
			<FitingDiv theme={theme}>
				<h3>{translations[language].headerSecondOption}</h3>
				<ListsContainer>
					<StackSelectionUl selectedStack={selectedStack}>
						<li onClick={() => setSelectedStack("frontEnd")}>Frontend</li>
						<li onClick={() => setSelectedStack("backEnd")}>Backend</li>
						<li onClick={() => setSelectedStack("others")}>Outras</li>
					</StackSelectionUl>
					{selectedStack === "frontEnd" && <FrontEndUl></FrontEndUl>}
					{selectedStack === "backEnd" && <BackendUl></BackendUl>}
					{selectedStack === "others" && <OthersStacksUl></OthersStacksUl>}
				</ListsContainer>
			</FitingDiv>
		</SectionContainer>
	);
};

export default ExperienceComponent;

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

const ListsContainer = styled.div`
	background-color: #ffffff;
	width: 100%;
	height: 80%;

	border-radius: 10px;
	display: flex;

	justify-content: space-between;

	padding: 2rem;

	box-shadow: 1px 2px 10px black;
`;

const StackSelectionUl = styled.ul`
	> li {
		font-weight: 800;
		padding: 1em;

		cursor: pointer;

		:first-child {
			background-color: ${(props) => {
				return props.selectedStack === "frontEnd" ? "#dfdfdf" : "inherit";
			}};
		}

		:nth-child(2) {
			background-color: ${(props) => {
				return props.selectedStack === "backEnd" ? "#dfdfdf" : "inherit";
			}};
		}

		:nth-child(3) {
			background-color: ${(props) => {
				return props.selectedStack === "others" ? "#dfdfdf" : "inherit";
			}};
		}
	}
`;
