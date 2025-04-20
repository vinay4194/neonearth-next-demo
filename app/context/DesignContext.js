"use client";

import { createContext, useContext, useState } from "react";

const DesignContext = createContext();

export function DesignProvider({ children }) {
	const [design, setDesign] = useState(null);

	return <DesignContext.Provider value={{ design, setDesign }}>{children}</DesignContext.Provider>;
}

export function useDesign() {
	return useContext(DesignContext);
}
