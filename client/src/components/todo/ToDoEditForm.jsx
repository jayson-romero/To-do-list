import React from "react"

const ToDoEditForm = ({
	todoRecord,
	setTodoRecord,
	update,
	visible,
	setAddOrEdit,
}) => {
	return (
		<div className={visible ? "showing" : "hidden"}>
			<div className="flex justify-between gap-0 ">
				<div className="w-full">
					<input
						value={todoRecord.todoText}
						checked={true}
						onChange={(e) => {
							setTodoRecord({
								...todoRecord,
								todoText: e.target.value,
							})
						}}
						placeholder="Enter To-do..."
						className="form-control flex w-[100%] h-12 p-5 "
						id="addTodo"
					/>
					<label htmlFor="addTodoCompleted" className="hidden">
						Enter To-do...
					</label>
				</div>
				<div className="flex gap-2">
					<button
						className="btn btn-theme-primary w-[200px]"
						id="push"
						onClick={update}
					>
						Update Item
					</button>
					<button
						className="btn btn-theme-primary w-[200px]"
						id="push"
						onClick={() => {
							setAddOrEdit("add")
						}}
					>
						Cancel
					</button>
				</div>
			</div>
			<div className="task-modifier">
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						checked={todoRecord.important}
						id="importantCheckbox"
						onChange={() => {
							setTodoRecord({
								...todoRecord,
								important: !todoRecord.important,
							})
						}}
					/>
					<label className="form-check-label" htmlFor="importantCheckbox">
						Important
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						checked={todoRecord.completed}
						id="completedCheckbox"
						onChange={() => {
							setTodoRecord({
								...todoRecord,
								completed: !todoRecord.completed,
							})
						}}
					/>
					<label className="form-check-label" htmlFor="completedCheckbox">
						Completed
					</label>
				</div>
			</div>
		</div>
	)
}

export default ToDoEditForm
