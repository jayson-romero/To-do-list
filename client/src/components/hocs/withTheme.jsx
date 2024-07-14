// Enhancing Components with HOC (Higher Order Componens)

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx"

export const withTheme = (Component) => {
	function Func(props) {
		const { darkTheme, toggleTheme } = useContext(ThemeContext)
		return (
			<Component {...props} darkTheme={darkTheme} toggleTheme={toggleTheme} />
		)
	}
	return Func
}
