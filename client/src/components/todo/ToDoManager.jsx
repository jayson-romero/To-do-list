import ToDoList from "./ToDoList"
import ToDoAddForm from "./ToDoAddForm"
import ToDoEditForm from "./ToDoEditForm"
import { useContext, useState } from "react"
import { ToDosDataContext } from "../context/ToDosDataContext"

const ToDoManager = ({ displayStatus, important, searchText, darkTheme }) => {
	// Call the ToDos Data Context
	const { todoList, createTodo, updateTodo } = useContext(ToDosDataContext)

	const [todoRecord, setTodoRecord] = useState({
		todoText: "",
		completed: false,
		important: false,
	})

	const [idUpdating, setIdUpdating] = useState(0)
	const [addOrEdit, setAddOrEdit] = useState("add") // "add" or "edit"

	const handleToggle = (id) => {
		const record = todoList.find((rec) => rec.id === id)

		const recUpdated = { ...record, completed: !record.completed }

		setIdUpdating(record.id)

		updateTodo(recUpdated, () => {
			setIdUpdating(0)
		})
	}

	const handleUpdate = () => {
		setIdUpdating(todoRecord.id)
		setAddOrEdit("add")
		updateTodo(todoRecord, () => {
			setIdUpdating(0)
		})
	}

	const handleEdit = (todoItem) => {
		setAddOrEdit("edit")
		setTodoRecord(todoItem)
	}

	const add = (todoText) => {
		createTodo({
			todoText: todoText,
			completed: false,
			important: false,
		})
	}

	if (!todoList) {
		return <div className="loading-state-canvas">Loading...</div>
	}

	return (
		<>
			<div className="form">
				<ToDoAddForm
					visible={addOrEdit === "add"}
					add={add}
					darkTheme={darkTheme}
				/>

				<ToDoEditForm
					visible={addOrEdit === "edit"}
					update={handleUpdate}
					todoRecord={todoRecord}
					setTodoRecord={setTodoRecord}
					setAddOrEdit={setAddOrEdit}
				/>
			</div>

			<ToDoList
				displayStatus={displayStatus}
				important={important}
				//   searchText={searchText}
				toDoList={todoList}
				handleToggle={handleToggle}
				//   handleDelete={handleDelete}
				handleEdit={handleEdit}
				idUpdating={idUpdating}
				//   darkTheme={darkTheme}
			/>
		</>
	)
}

export default ToDoManager
