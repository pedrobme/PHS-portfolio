import styled from "styled-components";
import { FirstPageMenuOption } from "../components/FirstPageMenuOption";
import { colors } from "../CONSTS/COLORS";
import { FontStyling } from "../CONSTS/FONTSTYLE";

export const FirstPage = () => {
	return (
		<Container>
			<GreetingsContainer>
				<Title>Olá! :)</Title>
				<SubTitle>Seja bem-vind@ ao meu portifólio</SubTitle>
			</GreetingsContainer>
			<OptionsMenuUl>
				<FirstPageMenuOption title="SOBRE" info="Quem sou eu?" />
				<FirstPageMenuOption title="SKILLS" info="Minhas habilidades" />
				<FirstPageMenuOption title="CARREIRA" info="Minha carreira" />
				<FirstPageMenuOption title="PROJETOS" info="Projetos pessoais" />
				<FirstPageMenuOption title="CONTATO" info="Me inscreva uma mensagem" />
			</OptionsMenuUl>
		</Container>
	);
};

//Styled-components

const Container = styled.div`
	height: 100vh;
	width: 100vw;

	padding: 5rem;

	display: flex;

	justify-content: space-around;
	flex-direction: column;

	background-color: ${colors["first-page-background-color"]};
`;

const GreetingsContainer = styled.div`
	display: flex;

	justify-content: center;
	flex-direction: column;
`;

const Title = styled.span`
	font-size: ${FontStyling.largeTextsSize};
	font-weight: 800;

	color: ${colors.white};

	padding-block: 1rem;
`;

const SubTitle = styled.span`
	font-size: ${FontStyling.mediumTextsSize};
	font-weight: 800;

	color: ${colors.white};
`;

const OptionsMenuUl = styled.ul`
	display: flex;
	flex-direction: column;

	width: fit-content;
`;
