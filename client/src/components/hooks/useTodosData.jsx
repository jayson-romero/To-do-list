import useGeneralizedCrudMethod from "./useGeneralizedCrudMethod"

const useTodosData = () => {
	const url = "/todos"
	const errorNotification = (error) => {
		console.log("Error From useTodosData", error)
	}

	const { data, error, loadingStatus } = useGeneralizedCrudMethod(
		url,
		errorNotification
	)

	return {
		todoList: data,
		loadingStatus,
		error,
	}
}

export default useTodosData
