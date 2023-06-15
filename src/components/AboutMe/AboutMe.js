import styled, { keyframes } from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import img from "../../assets/img/profilepicture.png";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { FontStyling } from "../../CONSTS/FONTSTYLE";
import { motion, AnimatePresence } from "framer-motion";

const AboutMeComponent = ({ theme, language }) => {
	return (
		<SectionContainer
			id="headerFirstOption"
			theme={theme}
			fontStyling={FontStyling}
		>
			<FitingDiv theme={theme}>
				<AnimatePresence>
					<ContentDiv>
						<TextContent>
							<PresentationWrapper>
								<TypewriterContainer>
									{translations[language].presentation}
								</TypewriterContainer>
							</PresentationWrapper>
							<PresentantionShortText
								initial={{ x: -300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 300, opacity: 0 }}
								transition={{ delay: 2, duration: 0.6 }}
							>
								{translations[language].presentationText}
							</PresentantionShortText>
						</TextContent>
						<ProfileImageContainer
							initial={{ x: 300, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -300, opacity: 0 }}
							transition={{ duration: 1 }}
						>
							<ProfileImage src={img} />
						</ProfileImageContainer>
					</ContentDiv>
				</AnimatePresence>
			</FitingDiv>
		</SectionContainer>
	);
};

export default AboutMeComponent;

// Styled Components

const SectionContainer = styled.div`
	height: calc(100vh - 5rem);

	background-color: ${(props) => {
		return themes[props.theme].pagesBackground;
	}};
`;

const FitingDiv = styled.div`
	width: 80%;
	height: 100%;
	max-width: calc(60 / 100 * 1480px);

	margin: auto;
`;

const ContentDiv = styled.div`
	height: 100%;
	display: flex;
`;

const TextContent = styled(motion.div)`
	width: 70%;
	height: 100%;

	display: flex;
	flex-direction: column;

	justify-content: flex-end;
	z-index: 1;
`;

const PresentantionShortText = styled(motion.h2)`
	color: black;
	font-size: 2.5rem;
	pointer-events: none;
	font-weight: 800;
	background-color: rgba(247, 150, 255, 0.5);

	padding: 0.5rem;

	@media (max-width: 820px) {
		color: black;
		font-size: 2rem;
		pointer-events: none;
		margin-bottom: 1rem;
		font-weight: 800;
	}

	@media (max-width: 750px) {
		color: black;
		font-size: 1.5rem;
		pointer-events: none;
		margin-bottom: 1rem;
		font-weight: 800;
	}

	@media (max-width: 560px) {
		color: black;
		font-size: 1rem;
		pointer-events: none;
		margin-bottom: 1rem;
	}
`;

const PresentationWrapper = styled.div`
	width: fit-content;

	> h1 {
		color: black;
		font-size: 1.3rem;
		pointer-events: none;
		margin-bottom: 1rem;
	}

	@media (max-width: 820px) {
		> h1 {
			color: black;
			font-size: 1rem;
			pointer-events: none;
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 750px) {
		> h1 {
			color: black;
			font-size: 0.7rem;
			pointer-events: none;
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 560px) {
		> h1 {
			color: black;
			font-size: 0.8rem;
			pointer-events: none;
			margin-bottom: 1rem;
		}
	}
`;

const ProfileImageContainer = styled(motion.div)`
	position: absolute;
	bottom: 0;
	right: 10px;
	z-index: 0;
	width: 80%;
	height: 80%;
`;

const ProfileImage = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;

	object-fit: contain;

	@media (max-width: 715px) {
		object-fit: cover;
	}
`;

const typingAnimation = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaretAnimation = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange }
`;

const TypewriterContainer = styled.h1`
	display: inline-block;
	width: fit-content;
	color: #fff;
	font-family: monospace;
	overflow: hidden;
	border-right: 0.15em solid orange;
	white-space: nowrap;
	margin: 0 0;
	letter-spacing: 0.15em;
	animation: ${typingAnimation} 1.5s steps(50, end),
		${blinkCaretAnimation} 0.5s step-end infinite;
`;
