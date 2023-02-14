import styled from "styled-components";
import { themes } from "../CONSTS/THEMES";

const Header = ({ theme }) => {
	return <HeaderContainer theme={theme}></HeaderContainer>;
};

export default Header;

//Styled Componetns

const HeaderContainer = styled.div`
	width: 100%;
	height: 4rem;

	position: fixed;
	top: 0;
	left: 0;

	background-color: ${(props) => {
		return themes[props.theme].header;
	}};
`;
