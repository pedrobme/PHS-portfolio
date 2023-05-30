import { useContext } from "react";
import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { LanguageAndThemeContext } from "../../contexts/LanguageAndThemeContext";
import HeaderOption from "./HeaderOption";
import { PersonalLogo } from "./PersonalLogo";

const Header = () => {
	const { theme, language } = useContext(LanguageAndThemeContext);

	return (
		<>
			<HeaderContainer theme={theme}>
				<PersonalLogo></PersonalLogo>
				<HeaderOptionsDiv>
					<HeaderOption
						text={translations[language].headerFirstOption}
					></HeaderOption>
					<HeaderOption
						text={translations[language].headerSecondOption}
					></HeaderOption>
					<HeaderOption
						text={translations[language].headerThirdOption}
					></HeaderOption>
					<HeaderOption
						text={translations[language].headerFourthOption}
					></HeaderOption>
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
