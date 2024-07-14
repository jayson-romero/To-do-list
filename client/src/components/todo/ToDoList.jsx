import { useState, useEffect } from "react"
import ToDo from "./ToDo"

const ToDoList = ({ toDoList, displayStatus, important }) => {
	return (
		<div className="tasks">
			{toDoList
				.filter((todo) => {
					if (displayStatus === "all") {
						return true
					} else if (displayStatus === "pending") {
						return todo.completed === false
					} else if (displayStatus === "completed") {
						return todo.completed === true
					} else {
						return false
					}
				})
				.filter((todo) => {
					if (important === true) {
						return todo.important === true
					} else {
						return true
					}
				})
				.map((todo) => {
					return <ToDo key={todo.id} todoItem={todo} />
				})}
		</div>
	)
}
export default ToDoList
