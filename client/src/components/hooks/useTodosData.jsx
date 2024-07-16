import useGeneralizedCrudMethod from "./useGeneralizedCrudMethod"

const useTodosData = () => {
	const url = "/todos"
	const errorNotificationFn = (error) => {
		console.log("Error From useTodosData", error)
	}

	const {
		data,
		error,
		loadingStatus,
		createRecord,
		updateRecord,
		deleteRecord,
	} = useGeneralizedCrudMethod(url, errorNotificationFn)

	const createTodo = (rec, callbackDone) => {
		createRecord(rec, callbackDone)
	}
	const updateTodo = (rec, callbackDone) => {
		updateRecord(rec, callbackDone)
	}

	const deleteTodo = (id, callbackDone) => {
		deleteRecord(id, callbackDone)
	}
	return {
		todoList: data,
		loadingStatus,
		error,
		createTodo,
		updateTodo,
		deleteTodo,
	}
}

export default useTodosData
