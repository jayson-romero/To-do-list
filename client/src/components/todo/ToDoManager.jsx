import ToDoList from "./ToDoList"
import { useContext } from "react"
import { ToDosDataContext } from "../context/TodosDataContext"

const ToDoManager = ({ displayStatus, important, searchText, darkTheme }) => {
	const { todoList } = useContext(ToDosDataContext)

	if (!todoList) {
		return <div className="loading-state-canvas">Loading...</div>
	}

	return (
		<>
			<div className="form">
				{/* <ToDoAddForm
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
        /> */}
			</div>

			<ToDoList
				displayStatus={displayStatus}
				important={important}
				//   searchText={searchText}
				toDoList={todoList}
				//   handleToggle={handleToggle}
				//   handleDelete={handleDelete}
				//   handleEdit={handleEdit}
				//   idUpdating={idUpdating}
				//   darkTheme={darkTheme}
			/>
		</>
	)
}

export default ToDoManager
