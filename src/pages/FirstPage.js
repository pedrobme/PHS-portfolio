import { useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { themes } from "../CONSTS/THEMES";
import { LanguageAndThemeContext } from "../contexts/LanguageAndThemeContext";

export const FirstPage = () => {
	const { theme } = useContext(LanguageAndThemeContext);

	return (
		<Container theme={theme}>
			<Header theme={theme}></Header>
		</Container>
	);
};

//Styled-components

const Container = styled.div`
	height: 100vh;
	width: 100vw;

	display: flex;

	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: ${(props) => {
		return themes[props.theme].firstPageBackground;
	}};
`;
