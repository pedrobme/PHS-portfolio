import styled from "styled-components";
import { colors } from "../CONSTS/COLORS";
import { FontStyling } from "../CONSTS/FONTSTYLE";
import { HorizontalBar } from "./HorizontalBar";

export const FirstPageMenuOption = (props) => {
	const { title, info } = props;
	return (
		<MainMenuOption>
			<MainMenu>
				<span>{title}</span>
				<span>{info}</span>
			</MainMenu>
			<HorizontalBar />
		</MainMenuOption>
	);
};

// Styled components

const MainMenuOption = styled.li`
	padding-block: 0.5rem;
	line-height: 1.5rem;
	width: fit-content;

	display: inline-block;
	flex-direction: column;

	cursor: pointer;
	:hover {
		span {
			:first-child {
				font-size: ${FontStyling.hoveredMsmallTextSize};

				color: ${colors.yellow};

				letter-spacing: 0.3rem;

				font-weight: 800;

				transition: font-size 0.6s, color 0.6s ease-in-out;
			}

			:nth-child(2) {
				font-size: ${FontStyling.hoveredMsmallerTextSize};
				color: ${colors.gray};
				font-weight: 200;

				opacity: 120%;

				transition: font-size 0.6s, opacity 0.6s;
			}
		}

		> :nth-child(2) {
			width: 100%;
			transition: all;
			transition-duration: 0.6s;
		}
	}
`;

const MainMenu = styled.div`
	> * {
		:first-child {
			font-size: ${FontStyling.smallTextsSize};

			color: ${colors.white};

			letter-spacing: 0.3rem;

			font-weight: 800;
		}

		:nth-child(2) {
			font-size: ${FontStyling.smallerTextsSize};
			color: ${colors.gray};
			font-weight: 200;

			opacity: 45%;
		}
	}
`;
