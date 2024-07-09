// COMPONENTS
import Header from "./Header"
import Footer from "./Footer"

const Layout = (props) => {
	const layoutversion = "layout-version 2"
	return (
		<div
			className="max-w-[780px] w-full mx-auto border p-5"
			data-theme={props.darkTheme ? "dark" : "light"}
		>
			<Header {...props} layoutversion={layoutversion} />
			{props.children}
			<Footer />
		</div>
	)
}

export default Layout
