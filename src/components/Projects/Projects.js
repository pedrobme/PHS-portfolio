import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import img from "../../assets/img/comingsoonimg.png";
import img2 from "../../assets/img/comingsoonimg.png";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { FontStyling } from "../../CONSTS/FONTSTYLE";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
						<Carousel.Item interval={3000}>
							<img
								style={{
									borderRadius: "10px",
									height: "350px",
									objectFit: "contain",
								}}
								className="d-block w-100"
								src={img}
								alt="Carroussel first element"
							/>
						</Carousel.Item>
						<Carousel.Item interval={3000}>
							<img
								style={{
									borderRadius: "10px",
									height: "350px",
									objectFit: "contain",
								}}
								className="d-block w-100"
								src={img2}
								alt="Carroussel second element"
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
`;
