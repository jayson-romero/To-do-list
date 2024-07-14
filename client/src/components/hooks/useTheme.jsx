// FOR DEGGING COMPONENTS

import { useState, useDebugValue } from "react"

const useTheme = () => {
	const [darkTheme, setDarkTheme] = useState(false)
	const toggleTheme = () => {
		setDarkTheme(!darkTheme)
	}
	useDebugValue(`${darkTheme ? "dark" : "light"}`, (val) => {
		if (val === "light") {
			return "The theme is light"
		} else {
			return "The theme is dark"
		}
	})
	return {
		darkTheme,
		toggleTheme,
	}
}

export default useTheme
