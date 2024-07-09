import React, { useEffect, useState } from "react"

// SAMPLE PASSING PROPS (Spread operator)
export const Index = () => {
	const toDoItem = {
		text: "Wash Clothes",
		completed: true,
		important: true,
	}
	return <ToDoItem {...toDoItem} />
}

//--- JAVASCRIPT DESTRUCTURING SYNTAX (best practices) ---
const ToDoItem = ({ text, completed, important }) => {
	const [textState, setTextState] = useState(text)
	const [completedState, setCompletedState] = useState(completed)

	useEffect(() => {
		setTextState(`${text} ${new Date().toLocaleTimeString()}`)
	}, [])

	return (
		<div>
			<h1
				className={completedState ? "completed" : ""}
				onClick={() => {
					setCompletedState(!completedState)
				}}
			>
				{important ? "*" : ""}
				{textState}
			</h1>
		</div>
	)
}

export { ToDoItem }
