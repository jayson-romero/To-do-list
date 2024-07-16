import { createContext } from "react"
import useTodosData from "../hooks/useTodosData"

export const ToDosDataContext = createContext({})

export const TodosDataProvider = ({ children }) => {
	const { todoList, loadingStatus, createTodo, updateTodo, deleteTodo } =
		useTodosData()

	const value = {
		todoList,
		loadingStatus,
		createTodo,
		updateTodo,
		deleteTodo,
	}

	return (
		<ToDosDataContext.Provider value={value}>
			{children}
		</ToDosDataContext.Provider>
	)
}
