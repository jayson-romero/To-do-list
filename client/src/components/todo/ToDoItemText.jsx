import { CheckBadgeIcon } from "@heroicons/react/24/solid"

const ToDoItemText = ({ important, todoText }) => {
	return (
		<>
			<div className="flex gap-5">
				{important ? (
					<span className="badge ">
						<CheckBadgeIcon className="w-6 h-6 text-yellow-500 " />
					</span>
				) : null}
				<p>{todoText.slice(0, 60)}</p>
			</div>
		</>
	)
}

export default ToDoItemText
