import { useContext } from "react";
import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { LanguageAndThemeContext } from "../../contexts/LanguageAndThemeContext";
import HeaderOption from "./HeaderOption";
import { PersonalLogo } from "./PersonalLogo";
import { Link } from "react-scroll";
import { SelectedSectionContext } from "../../contexts/SelectedSectionContext";
import brflag from "../../assets/img/brazilflag.png";
import usflag from "../../assets/img/usflag.png";
import spflag from "../../assets/img/spainflag.png";
import menumobile from "../../assets/img/menumobile.png";
import HeaderMobileComponent from "../HeaderMobile/HeaderMobile";

const Header = () => {
	const { theme, language, handleLanguageChange } = useContext(
		LanguageAndThemeContext
	);

	const { selectedSection } = useContext(SelectedSectionContext);

	return (
		<>
			<HeaderContainer theme={theme}>
				<PersonalLogo logoSize="6rem"></PersonalLogo>
				<HeaderOptionsDiv>
					<Link to="headerFirstOption" offset={-62} duration={200}>
						<HeaderOption
							optionId={"headerFirstOption"}
							isSelected={selectedSection === "headerFirstOption"}
							text={translations[language].headerFirstOption}
						></HeaderOption>
					</Link>
					<Link to="headerSecondOption" offset={-45} duration={200}>
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
					{/* <Link to="headerFourthOption" offset={-62} duration={200}>
						<HeaderOption
							optionId={"headerFourthOption"}
							isSelected={selectedSection === "headerFourthOption"}
							text={translations[language].headerFourthOption}
						></HeaderOption>
					</Link> */}
				</HeaderOptionsDiv>
				<LanguageSelectionContainer language={language}>
					<img
						onClick={() => handleLanguageChange("pt")}
						alt="Brazil flag icon"
						src={brflag}
					/>
					<img
						onClick={() => handleLanguageChange("en")}
						alt="United States flag icon"
						src={usflag}
					/>
					<img
						onClick={() => handleLanguageChange("es")}
						alt="Spain flag icon"
						src={spflag}
					/>
				</LanguageSelectionContainer>
			</HeaderContainer>

			<HeaderMobileComponent></HeaderMobileComponent>

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

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: ${(props) => {
		return themes[props.theme].header;
	}};
	z-index: 5;

	@media (max-width: 1000px) {
		display: none;
	}
`;

const HeaderPhantom = styled.div`
	@media (min-width: 1000px) {
		width: 100%;
		height: 4rem;
	}
	@media (max-width: 1000px) {
		width: 100%;
		height: 5rem;
	}
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

const LanguageSelectionContainer = styled.div`
	border: none;
	> img {
		width: 30px;
		margin-inline: 0.5rem;
		border-radius: 100%;
	}

	> img:first-child {
		border: ${(props) => (props.language === "pt" ? "2px solid blue" : "none")};
	}

	> img:nth-child(2) {
		border: ${(props) => (props.language === "en" ? "2px solid blue" : "none")};
	}

	> img:nth-child(3) {
		border: ${(props) => (props.language === "es" ? "2px solid blue" : "none")};
	}

	font-weight: 900;
	cursor: pointer;
	padding-right: 3rem;
`;
