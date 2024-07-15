import { createContext } from "react"
import useTodosData from "../hooks/useTodosData"

export const ToDosDataContext = createContext({})

export const TodosDataProvider = ({ children }) => {
	const { todoList, loadingStatus, createTodo, updateTodo } = useTodosData()

	const value = {
		todoList,
		loadingStatus,
		createTodo,
		updateTodo,
	}

	return (
		<ToDosDataContext.Provider value={value}>
			{children}
		</ToDosDataContext.Provider>
	)
}
