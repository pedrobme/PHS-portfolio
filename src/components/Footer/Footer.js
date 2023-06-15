import styled from "styled-components";
import instagramimg from "../../assets/img/instagram.png";
import whatsappimg from "../../assets/img/whatsapp.png";
import { translations } from "../../CONSTS/TRANSLATIONS";

export default function Footer({ language }) {
	const jsx = (
		<FooterContainer>
			<Socials>
				<a
					href="https://www.instagram.com/pedroholanda94/"
					target={"_blank"}
					rel="noreferrer"
					title="Instagram.com/pedroholanda94"
				>
					<img style={{ width: 30 }} src={instagramimg} alt="instagram icons" />
				</a>
				<a
					href="http://wa.me/5585991949958"
					target={"_blank"}
					rel="noreferrer"
					title="Whatsapp (+55 85 991949958)"
				>
					<img style={{ width: 30 }} src={whatsappimg} alt="whatsapp icons" />
				</a>
			</Socials>
			<p>
				{translations[language].footerText}{" "}
				<span>
					<a
						href="http://www.linkedin.com/in/pedrobme"
						target={"_blank"}
						rel="noreferrer"
					>
						PHS
					</a>
				</span>
			</p>
		</FooterContainer>
	);

	return jsx;
}

const FooterContainer = styled.div`
	width: 100%;

	height: 120px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	* {
		font-weight: 800;
		text-align: center;
	}
`;

const Socials = styled.div`
	width: 80px;
	display: flex;
	justify-content: space-between;
`;
