import { createContext } from "react"
import useTodosData from "../hooks/useTodosData"

export const ToDosDataContext = createContext({})

export const TodosDataProvider = ({ children }) => {
	const { todoList, loadingStatus } = useTodosData()

	const value = {
		todoList,
		loadingStatus,
	}

	return (
		<ToDosDataContext.Provider value={value}>
			{children}
		</ToDosDataContext.Provider>
	)
}
