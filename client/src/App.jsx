import React, { useState } from "react"
// COMPONENTS

import Layout from "./components/layout/Layout"
import TodoListWithToolbar from "./components/todo/ToDoListWithToolbar"
import ToDoManager from "./components/todo/ToDoManager"

// CONTEXT PROVIDER
import { TodosDataProvider } from "./components/context/TodosDataContext"

function App() {
	const [displayStatus, setDisplayStatus] = useState("all") // all, pending, completed
	const [important, setImportant] = useState(false)
	const [searchText, setSearchText] = useState("")
	return (
		<>
			<TodosDataProvider>
				<Layout>
					<TodoListWithToolbar
						displayStatus={displayStatus}
						setDisplayStatus={setDisplayStatus}
						important={important}
						setImportant={setImportant}
					>
						<ToDoManager
							displayStatus={displayStatus}
							important={important}
							searchText={searchText}
						/>
					</TodoListWithToolbar>
				</Layout>
			</TodosDataProvider>
		</>
	)
}

export default App
