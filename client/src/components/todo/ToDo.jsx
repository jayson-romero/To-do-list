import React, { useState } from "react"
import ErrorBoundary from "../common/ErrorBoundary"
import ToDoItemText from "./ToDoItemText"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"

const Inner = ({
	todoItem,
	handleToggleCompleted,
	handleEdit,
	idUpdating,
	handleDelete,
}) => {
	return (
		<div
			key={todoItem.id}
			className={todoItem.completed ? "single-task completed" : "single-task"}
		>
			<div
				onClick={() => {
					return handleToggleCompleted(todoItem.id)
				}}
			>
				<ToDoItemText
					important={todoItem.important}
					todoText={todoItem.todoText}
				/>
			</div>

			{/* {idUpdating === todoItem.id ? (
				<button className="btn btn-primary busy-spinner" type="button" disabled>
					<span
						className="spinner-border spinner-border-sm"
						role="status"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Loading...</span>
				</button>
			) : null} */}

			<div className="task-actions flex gap-3">
				<button
					className="btn edit"
					title="Edit"
					onClick={() => handleEdit(todoItem)}
				>
					<PencilIcon className="h-6 w-6" />
				</button>

				<button
					className="btn delete"
					title="Delete"
					onClick={() => {
						const response = window.confirm("Delete?")
						if (response) {
							handleDelete(todoItem.id)
						}
					}}
				>
					<TrashIcon className="h-6 w-6" />
				</button>
			</div>
		</div>
	)
}

const ToDo = (props) => {
	return (
		<ErrorBoundary>
			{/* // <ErrorBoundary errorUI={<div>{props.todoItem.id} Errord</div>}> */}
			<Inner {...props} />
		</ErrorBoundary>
	)
}

export default ToDo
