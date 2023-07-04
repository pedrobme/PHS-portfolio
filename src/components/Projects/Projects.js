import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import parrots from "../../assets/img/parrots.png";
import uol from "../../assets/img/uol.png";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { FontStyling } from "../../CONSTS/FONTSTYLE";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CarouselItemBody from "./CarouselItemBody";

const ProjectsComponent = ({ theme, language }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const windowHeight = window.innerHeight;
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			const element = document.getElementById("headerThirdOption");

			if (element) {
				const elementTop = element.offsetTop;
				const elementHeight = element.offsetHeight;
				const elementBottom = elementTop + elementHeight;

				if (
					scrollTop + windowHeight >= elementTop + 300 &&
					scrollTop <= elementBottom - 300
				) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<SectionContainer
			initial={{ opacity: 0 }}
			animate={{ opacity: isVisible ? 1 : 0 }}
			transition={{ duration: 0.5 }}
			id="headerThirdOption"
			theme={theme}
			fontStyling={FontStyling}
		>
			<FitingDiv theme={theme}>
				<h3>{translations[language].headerThirdOption}</h3>
				<div
					style={{
						display: "block",
						width: "100%",
						height: "80%",
						margin: "auto",
						cursor: "pointer",
					}}
				>
					<Carousel sx={{ height: "100" }} variant="dark">
						<Carousel.Item interval={5000}>
							<CarouselItemBody
								projectImage={parrots}
								repoLink={"https://github.com/pedrobme/Parrots-card-game"}
								deployLink={"https://projeto4-parrotscardgame-lime.vercel.app/"}
								projectDetails={translations[language].parrotsDetails}
								projectTitle={translations[language].parrotsTitle}
							/>
						</Carousel.Item>
						<Carousel.Item interval={5000}>
							<CarouselItemBody
								projectImage={uol}
								repoLink={"https://github.com/pedrobme/BatePapoUol"}
								deployLink={"https://batepapouol-silk.vercel.app/"}
								projectDetails={translations[language].uolDetails}
								projectTitle={translations[language].uolTitle}
							/>
						</Carousel.Item>
					</Carousel>
				</div>
			</FitingDiv>
		</SectionContainer>
	);
};

export default ProjectsComponent;

// Styled Components

const SectionContainer = styled(motion.div)`
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

	position: relative;
	z-index: 0;

	padding: 2rem;

	> h3 {
		color: black;
		font-size: 2.5rem;
		pointer-events: none;
		margin-bottom: 1rem;
	}

	@media (max-width: 580px) {
		width: 100%;
		padding: 1rem;
	}
`;
