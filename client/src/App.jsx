import { useState } from "react"
// COMPONENTS
import Layout from "./components/layout/Layout"
import TodoListWithToolbar from "./components/todo/ToDoListWithToolbar"
import ToDoManager from "./components/todo/ToDoManager"

function App() {
	const [displayStatus, setDisplayStatus] = useState("all")
	const [important, setImportant] = useState(false)
	const [searchText, setSearchText] = useState("")
	const [darkTheme, setDarkTheme] = useState(false)
	const toggleTheme = () => setDarkTheme(!darkTheme)

	return (
		<>
			<Layout toggleTheme={toggleTheme} darkTheme={darkTheme}>
				<TodoListWithToolbar
					displayStatus={displayStatus}
					setDisplayStatus={setDisplayStatus}
					important={important}
					setImportant={setImportant}
					searchText={searchText}
					setSearchText={setSearchText}
				>
					<ToDoManager
						displayStatus={displayStatus}
						important={important}
						searchText={searchText}
						darkTheme={darkTheme}
					/>
				</TodoListWithToolbar>
			</Layout>
		</>
	)
}

export default App
