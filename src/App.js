import GlobalStyle from "./GlobalStyle";
import { FirstPage } from "./pages/FirstPage";
import LanguageAndThemeContextProvider from "./contexts/LanguageAndThemeContext";

function App() {
	return (
		<>
			<GlobalStyle />
			<LanguageAndThemeContextProvider>
				<FirstPage />
			</LanguageAndThemeContextProvider>
		</>
	);
}

export default App;
