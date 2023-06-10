import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ExperienceLi from "./ExperienceLi";

const OthersStacksUl = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		return () => {
			setIsMounted(false);
		};
	}, []);

	const jsx = (
		<ExperiencesUl isMounted={isMounted}>
			<ExperienceLi competence="Git" level={3} />
			<ExperienceLi competence="Inglês" level={3} />
			<ExperienceLi competence="Metodologias Ágeis" level={3} />
			<ExperienceLi competence="Linux" level={2} />
			<ExperienceLi competence="Figma" level={1} />
		</ExperiencesUl>
	);

	return jsx;
};

export default OthersStacksUl;

const ExperiencesUl = styled.ul`
	display: flex;

	align-items: center;
	justify-content: center;

	flex-wrap: wrap;

	> li {
		margin: 5px;
	}

	overflow-y: scroll;

	opacity: ${(props) => {
		return props.isMounted === true ? "1" : "0";
	}};

	transition: opacity 0.5s ease-in-out;

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
