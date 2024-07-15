import { useState } from "react"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
const ToDoAddForm = ({ add, visible }) => {
	const [todoText, setTodoText] = useState("")

	return (
		<div className={visible ? "showing" : "hidden"}>
			<div className="flex justify-between gap-0 ">
				<div className="w-full">
					<input
						value={todoText}
						checked={true}
						onChange={(e) => {
							setTodoText(e.target.value)
						}}
						placeholder="Enter To-do..."
						className="form-control flex w-[100%] h-12 p-5 "
						id="addTodo"
					/>
					<label htmlFor="addTodoCompleted" className="hidden">
						Enter To-do...
					</label>
				</div>
				<button
					disabled={todoText.length === 0}
					className="btn btn-theme-primary w-[250px]"
					id="push"
					onClick={() => {
						add(todoText)
						setTodoText("")
					}}
				>
					Add Task
				</button>
			</div>
		</div>
	)
}

export default ToDoAddForm
