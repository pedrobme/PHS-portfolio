import styled from "styled-components";
import { themes } from "../../CONSTS/THEMES";
import img from "../../assets/img/usflag.png";
import img2 from "../../assets/img/brazilflag.png";
import { translations } from "../../CONSTS/TRANSLATIONS";
import { FontStyling } from "../../CONSTS/FONTSTYLE";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const ProjectsComponent = ({ theme, language }) => {
	return (
		<SectionContainer
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
						<Carousel.Item interval={1500}>
							<img
								style={{
									borderRadius: "10px",
									height: "350px",
								}}
								className="d-block w-100"
								src={img}
								alt="Carroussel first element"
							/>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<img
								style={{
									borderRadius: "10px",
									height: "350px",
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
