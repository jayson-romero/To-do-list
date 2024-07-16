// React Hooks
import React, { useState, useTransition } from "react"

// COMPONENTS
import Layout from "./components/layout/Layout"
import TodoListWithToolbar from "./components/todo/ToDoListWithToolbar"
import ToDoManager from "./components/todo/ToDoManager"

// CONTEXT PROVIDER
import { TodosDataProvider } from "./components/context/ToDosDataContext"

function App() {
	const [displayStatus, setDisplayStatus] = useState("all") // all, pending, completed
	const [important, setImportant] = useState(false)
	const [searchText, setSearchText] = useState("")

	const [isPending, startTransition] = useTransition()
	return (
		<>
			<TodosDataProvider>
				<Layout>
					<TodoListWithToolbar
						displayStatus={displayStatus}
						setDisplayStatus={setDisplayStatus}
						important={important}
						setImportant={setImportant}
						searchText={searchText}
						setSearchText={setSearchText}
						startTransition={startTransition}
						isPending={isPending}
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
