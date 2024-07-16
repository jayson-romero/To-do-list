import ToDoFilterToolbar from "./ToDoFilterToolbar"

const ToDoListWithToolbar = ({
	children,
	displayStatus,
	setDisplayStatus,
	important,
	setImportant,
	searchText,
	setSearchText,
	startTransition,
	isPending,
}) => {
	return (
		<div>
			<ToDoFilterToolbar
				displayStatus={displayStatus}
				setDisplayStatus={setDisplayStatus}
				important={important}
				setImportant={setImportant}
				searchText={searchText}
				setSearchText={setSearchText}
				startTransition={startTransition}
				isPending={isPending}
			/>
			{children}
		</div>
	)
}

export default ToDoListWithToolbar
