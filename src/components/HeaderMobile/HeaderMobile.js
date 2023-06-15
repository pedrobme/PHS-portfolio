import { PersonalLogo } from "../Header/PersonalLogo";
import menumobile from "../../assets/img/menumobile.png";
import styled from "styled-components";
import { LanguageAndThemeContext } from "../../contexts/LanguageAndThemeContext";
import { themes } from "../../CONSTS/THEMES";
import SideMenuMobileComponent from "./SideMenuMobile";

const { useContext, useState } = require("react");

const HeaderMobileComponent = () => {
	const { theme, language, handleLanguageChange } = useContext(
		LanguageAndThemeContext
	);

	const [menuIsVisible, setMenuIsVisible] = useState(false);

	const jsx = (
		<HeaderMobileContainer>
			<HeaderContentMobile theme={theme}>
				<PersonalLogo logoSize="4rem"></PersonalLogo>
				<img
					onClick={() => setMenuIsVisible(true)}
					alt="Icon menu mobile"
					src={menumobile}
				/>
			</HeaderContentMobile>

			{menuIsVisible && (
				<SideMenuMobileComponent
					menuIsVisible={menuIsVisible}
					setMenuIsVisible={setMenuIsVisible}
				></SideMenuMobileComponent>
			)}
		</HeaderMobileContainer>
	);

	return jsx;
};

export default HeaderMobileComponent;

// Styled components

const HeaderMobileContainer = styled.div`
	@media (min-width: 1000px) {
		display: none;
	}
`;

const HeaderContentMobile = styled.div`
	width: 100%;
	height: 5rem;

	padding-inline: 30px;

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

	> img {
		width: 30px;
	}

	@media (min-width: 1001px) {
		display: none;
	}
`;
