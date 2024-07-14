import ToDoFilterToolbar from "./ToDoFilterToolbar"

const ToDoListWithToolbar = ({
	children,
	displayStatus,
	setDisplayStatus,
	important,
	setImportant,
}) => {
	return (
		<div>
			<ToDoFilterToolbar
				displayStatus={displayStatus}
				setDisplayStatus={setDisplayStatus}
				important={important}
				setImportant={setImportant}
			/>
			{children}
		</div>
	)
}

export default ToDoListWithToolbar
