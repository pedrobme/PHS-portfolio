import GlobalStyle from "./GlobalStyle";
import { FirstPage } from "./pages/FirstPage";
import LanguageAndThemeContextProvider from "./contexts/LanguageAndThemeContext";
import SelectedSectionContextProvider from "./contexts/SelectedSectionContext";

function App() {
	return (
		<>
			<GlobalStyle />
			<LanguageAndThemeContextProvider>
				<SelectedSectionContextProvider>
					<FirstPage />
				</SelectedSectionContextProvider>
			</LanguageAndThemeContextProvider>
		</>
	);
}

export default App;
