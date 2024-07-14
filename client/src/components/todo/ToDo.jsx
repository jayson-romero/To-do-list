import React, { useState } from "react"
import ErrorBoundary from "../common/ErrorBoundary"
import ToDoItemText from "./ToDoItemText"

const Inner = ({ todoItem }) => {
	return (
		<div
			key={todoItem.id}
			className={todoItem.completed ? "single-task completed" : "single-task"}
		>
			<div
			//   onClick={() => {
			//     return handleToggleCompleted(todoItem.id);
			//   }}
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

			<div className="task-actions">
				<button
					className="btn edit"
					title="Edit"
					//  onClick={() => handleEdit(todoItem)}
				>
					<i className="fas fa-pencil-alt"></i>
				</button>

				<button
					className="btn delete"
					title="Delete"
					//  onClick={() => {
					//    const response = window.confirm("Delete?");
					//    if (response) {
					//      handleDelete(todoItem.id);
					//    }
					//  }}
				>
					<i className="far fa-trash-alt"></i>
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
