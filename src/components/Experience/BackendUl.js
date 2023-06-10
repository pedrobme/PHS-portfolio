import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ExperienceLi from "./ExperienceLi";

const BackendUl = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		return () => {
			setIsMounted(false);
		};
	}, []);

	const jsx = (
		<ExperiencesUl isMounted={isMounted}>
			<ExperienceLi competence="Node.js" level={3} />
			<ExperienceLi competence="Express.js" level={3} />
			<ExperienceLi competence="PostgreSQL" level={3} />
			<ExperienceLi competence="MongoDB" level={3} />
			<ExperienceLi competence="Jest" level={3} />
			<ExperienceLi competence="Typescript" level={2} />
			<ExperienceLi competence="Prisma" level={2} />
			<ExperienceLi competence="Redis" level={2} />
			<ExperienceLi competence="NestJS" level={1} />
			<ExperienceLi competence="AWS" level={1} />
			<ExperienceLi competence="Docker" level={1} />
		</ExperiencesUl>
	);

	return jsx;
};

export default BackendUl;

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
