import { useEffect } from "react";
import styled from "styled-components";

const SideMenuMobileComponent = ({ menuIsVisible, setMenuIsVisible }) => {
	useEffect(() => {
		// Disable scroll when the component mounts
		document.body.style.overflow = "hidden";

		// Re-enable scroll when the component unmounts
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	const jsx = (
		<SideMenuMobileContainer menuIsVisible={menuIsVisible}>
			<ScreenBlocker onClick={() => setMenuIsVisible(false)}></ScreenBlocker>
			<SideMenu></SideMenu>
		</SideMenuMobileContainer>
	);

	return jsx;
};

export default SideMenuMobileComponent;

// Styled components

const SideMenuMobileContainer = styled.div`
	display: ${(props) => (props.menuIsVisible ? "initial" : "none")};
`;

const ScreenBlocker = styled.div`
	width: 50vw;
	height: 100vh;

	position: fixed;
	top: 0;
	left: 0;

	z-index: 6;

	background-color: rgba(0, 0, 0, 0.8);

	overflow: hidden;
`;

const SideMenu = styled.div`
	height: 100vh;

	position: fixed;
	top: 0;
	right: 0;

	background-color: blue;
	width: 50vw;

	z-index: 7;
`;
