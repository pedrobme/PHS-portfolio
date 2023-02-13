import { colors } from "../CONSTS/COLORS";
import styled from "styled-components";

export const HorizontalBar = () => {
	return <DinamicHorizontalBar></DinamicHorizontalBar>;
};

const DinamicHorizontalBar = styled.div`
	width: 5rem;
	height: 0.2rem;

	background-color: ${colors.black};
`;
