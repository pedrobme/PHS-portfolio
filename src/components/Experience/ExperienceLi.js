import styled from "styled-components";

const ExperienceLi = ({ competence, level }) => {
	const jsx = (
		<ExperienceLiElement>
			<h3>{competence}</h3>
			<ExperienceBar>
				<BasicLevel />
				<IntermediaryLevel level={level} />
				<AdvancedLevel level={level} />
			</ExperienceBar>
			<p>{level === 1 && "Basico"}</p>
			<p>{level === 2 && "Intermediario"}</p>
			<p>{level === 3 && "Avançado"}</p>
		</ExperienceLiElement>
	);

	return jsx;
};

export default ExperienceLi;

// Styled Components

const ExperienceLiElement = styled.li`
	width: 40%;

	border: 1px solid black;
	border-radius: 10px;

	padding: 3px;

	> * {
		margin-block: 5px;
	}

	> h3 {
		font-weight: 800;
	}

	> p {
		text-align: end;
	}
`;

const ExperienceBar = styled.div`
	display: flex;
	width: 100%;
	height: 10px;
`;

const BasicLevel = styled.div`
	background-color: #a4ff96;

	height: 100%;
	width: 100%;
	border-radius: 4px;
`;

const IntermediaryLevel = styled.div`
	background-color: ${(props) => (props.level === 1 ? "#DFDFDF" : "#62ff49")};

	height: 100%;
	width: 100%;
	border-radius: 4px;
`;

const AdvancedLevel = styled.div`
	background-color: ${(props) => (props.level <= 2 ? "#DFDFDF" : "#2fff0e")};

	height: 100%;
	width: 100%;
	border-radius: 4px;
`;
