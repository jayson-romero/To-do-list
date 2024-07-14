import { useContext } from "react"
import { ThemeContext, ThemeProvider } from "../context/ThemeContext"
// COMPONENTS
import Header from "./Header"
import Footer from "./Footer"

const Inner = ({ children }) => {
	const { darkTheme } = useContext(ThemeContext)

	return (
		<div
			className="container mx-auto"
			data-theme={darkTheme ? "dark" : "light"}
		>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

const Layout = (props) => {
	return (
		<ThemeProvider>
			<Inner {...props} />
		</ThemeProvider>
	)
}

export default Layout
