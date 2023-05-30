import React, { useState } from "react";

export const SelectedSectionContext = React.createContext({});

const SelectedSectionContextProvider = (props) => {
	const [selectedSection, setSelectedSection] = useState("headerFirstOption");

	return (
		<SelectedSectionContext.Provider
			value={{
				selectedSection: selectedSection,
				setSelectedSection: setSelectedSection,
			}}
		>
			{props.children}
		</SelectedSectionContext.Provider>
	);
};

export default SelectedSectionContextProvider;
