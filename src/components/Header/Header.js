import { useContext } from "react";
import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { LanguageAndThemeContext } from "../../contexts/LanguageAndThemeContext";
import HeaderOption from "./HeaderOption";
import { PersonalLogo } from "./PersonalLogo";
import { Link } from "react-scroll";
import { SelectedSectionContext } from "../../contexts/SelectedSectionContext";

const Header = () => {
	const { theme, language } = useContext(LanguageAndThemeContext);

	const { selectedSection } = useContext(SelectedSectionContext);

	return (
		<>
			<HeaderContainer theme={theme}>
				<PersonalLogo></PersonalLogo>
				<HeaderOptionsDiv>
					<Link to="headerFirstOption" offset={-62} duration={200}>
						<HeaderOption
							optionId={"headerFirstOption"}
							isSelected={selectedSection === "headerFirstOption"}
							text={translations[language].headerFirstOption}
						></HeaderOption>
					</Link>
					<Link to="headerSecondOption" offset={-62} duration={200}>
						<HeaderOption
							optionId={"headerSecondOption"}
							isSelected={selectedSection === "headerSecondOption"}
							text={translations[language].headerSecondOption}
						></HeaderOption>
					</Link>
					<Link to="headerThirdOption" offset={-62} duration={200}>
						<HeaderOption
							optionId={"headerThirdOption"}
							isSelected={selectedSection === "headerThirdOption"}
							text={translations[language].headerThirdOption}
						></HeaderOption>
					</Link>
					<Link to="headerFourthOption" offset={-62} duration={200}>
						<HeaderOption
							optionId={"headerFourthOption"}
							isSelected={selectedSection === "headerFourthOption"}
							text={translations[language].headerFourthOption}
						></HeaderOption>
					</Link>
				</HeaderOptionsDiv>
				<ContactMeButton>{translations[language].contactMe}</ContactMeButton>
			</HeaderContainer>
			<HeaderPhantom></HeaderPhantom>
		</>
	);
};

export default Header;

//Styled Componetns

const HeaderContainer = styled.div`
	width: 100%;
	height: 4rem;

	position: fixed;
	top: 0;
	left: 0;

	box-shadow: 1px 2px 10px black;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: ${(props) => {
		return themes[props.theme].header;
	}};
	z-index: 5;
`;

const HeaderPhantom = styled.div`
	height: 4rem;
`;

const HeaderOptionsDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding-inline: 5rem;

	> * {
		margin-inline: 1rem;
	}
`;

const ContactMeButton = styled.div`
	border: none;

	font-weight: 900;
	cursor: pointer;
	padding-right: 3rem;
`;
