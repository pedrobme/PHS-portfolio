import React, { useState } from "react";

export const LanguageAndThemeContext = React.createContext({});

const LanguageAndThemeContextProvider = (props) => {
	const [language, setLanguage] = useState("pt");
	const [theme, setTheme] = useState("dark");

	const handleLanguageChange = (newLanguage) => {
		setLanguage(newLanguage);
	};

	const handleThemeChange = (newTheme) => {
		setTheme(newTheme);
	};

	return (
		<LanguageAndThemeContext.Provider
			value={{
				language: language,
				handleLanguageChange: handleLanguageChange,
				theme: theme,
				handleThemeChange: handleThemeChange,
			}}
		>
			{props.children}
		</LanguageAndThemeContext.Provider>
	);
};

export default LanguageAndThemeContextProvider;
