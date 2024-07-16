import React from "react"
import { useContext } from "react"
import { ToDosDataContext } from "../context/ToDosDataContext"

const Footer = () => {
	const { todoList, deleteTodo, loadingStatus } = useContext(ToDosDataContext)

	const totalItems = todoList?.length
	const notCompletedItems = todoList?.filter((rec) => !rec.completed).length
	const importantItems = todoList?.filter(
		(rec) => !rec.completed && rec.important
	).length

	const handleClearCompleted = () => {
		const response = window.confirm("Clear completed Todos?")
		if (response) {
			let completedIds = todoList
				.filter((todoItem) => {
					return todoItem.completed
				})
				.map((rec) => rec.id)
			deleteTodo(completedIds)
		}
	}

	return (
		<footer className="text-center">
			<div className="stats">
				<button
					title="Refresh List"
					className="btn btn-theme-primary"
					//  onClick={() => {
					//    reFetch();
					//  }}
				>
					<i className="fas fa-sync"></i>
				</button>

				<div className="footer-refresh" title="Refreshing">
					<span
						className="spinner-border spinner-border-sm"
						role="status"
						aria-hidden="true"
					></span>
					{/* {loadingStatus === "loading" ? (
            <span
              className="spinner-bord.filter((todo) => {
          if (searchText?.length > 0) {
            //for (let i = 0; i < 300000000; i++) { }
            return todo.todoText
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase());
          } else {
            return true;
          }
        })er spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              hidden
            ></span>
          )} */}
				</div>

				<div className="clear-completed">
					<button
						onClick={handleClearCompleted}
						className="btn btn-theme-danger btn-md"
					>
						Clear Completed
					</button>
				</div>

				<div className="quick-stats">
					{todoList?.length > 0 ? (
						<p>
							<span className="badge bg-yellow-600">{totalItems}</span> Items:{" "}
							<span className="badge theme-main-bg">{notCompletedItems}</span>{" "}
							not completed of which{" "}
							<span className="badge btn-theme-danger">{importantItems}</span>{" "}
							are important
						</p>
					) : (
						<p className="hidden-block">
							<span className="badge text-bg-secondary">x</span> Items:{" "}
							<span className="badge theme-main-bg">x</span> not completed of
							which <span className="badge btn-theme-danger">x</span> are
							important
						</p>
					)}
				</div>
			</div>
		</footer>
	)
}

export default Footer
