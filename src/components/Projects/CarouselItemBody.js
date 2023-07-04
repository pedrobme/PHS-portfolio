import { useState } from "react";
import styled from "styled-components";

const CarouselItemBody = ({
	projectImage,
	repoLink,
	deployLink,
	projectTitle,
	projectDetails,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		console.log("hovered");
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const jsx = (
		<CarouselItemContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img
				style={{
					borderRadius: "10px",
					height: "350px",
					objectFit: "contain",
				}}
				className="d-block w-100"
				src={projectImage}
				alt="Carroussel first element"
			/>
			<CarouselItemDetails isHovered={isHovered}>
				<h1>{projectDetails}</h1>
			</CarouselItemDetails>
			<ProjectLinks isHovered={isHovered}>
				<h1>{projectTitle}</h1>
				<a href={repoLink} target="_blank">
					GitHub
				</a>
				<a href={deployLink} target="_blank">
					Deploy
				</a>
			</ProjectLinks>
		</CarouselItemContainer>
	);

	return jsx;
};

export default CarouselItemBody;

// Styled Components

const CarouselItemContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const CarouselItemDetails = styled.div`
	position: absolute;
	bottom: 0;
	height: fit-content;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);

	opacity: ${(props) => (props.isHovered ? "0.6" : "1")};
	transition: opacity 0.3s ease;

	transition: opacity 0.3s ease;

	h1 {
		color: white;
		font-size: 32px;
	}
`;

const ProjectLinks = styled.div`
	opacity: ${(props) => (props.isHovered ? "1" : "0")};
	transition: opacity 0.3s ease;

	display: flex;
	position: absolute;
	top: 0;

	flex-direction: column;

	justify-content: center;
	align-items: center;

	> * {
		margin-block: 10px;
	}

	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);

	h1 {
		color: white;
		font-size: 32px;
	}
`;
