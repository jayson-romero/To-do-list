import React from "react"

const ToDoFilterToolbar = ({
	displayStatus,
	setDisplayStatus,
	important,
	setImportant,
}) => {
	return (
		<nav className="navbar  ">
			<div className="h-full w-full flex items-center justify-between gap-4 px-2">
				<div className=" basis-3/4 flex items-center justify-center gap-1 ">
					<div className=" border-[#d9d3d3] ">
						<input
							// value={searchTextResponsive}
							// onChange={(event) => {
							//   setSearchTextResponsive(event.target.value);
							//   startTransition(() => setSearchText(event.target.value));
							// }}
							type="text"
							className="form-search-text "
							placeholder="Search"
						/>
					</div>
					{/* <li className="nav-item">
							<span
								className="spinner-border spinner-border-sm"
								role="status"
								aria-hidden="true"
								// style={{
								// 	visibility: isPending ? "visible" : "hidden",
								// }}
								style={{
									visibility: "hidden",
								}}
							></span>
						</li> */}
					<div className="w-[25%] text-center border-2 border-[#d9d3d3] rounded-md nav-item ">
						<a
							// className={
							// 	displayStatus === "all" ? "nav-link active" : "nav-link"
							// }
							className={` ${
								displayStatus === "all" ? "nav-link active" : "nav-link"
							}  `}
							// 						border: 1px solid ";
							// border-radius: 6px;
							// padding: 5px 5px;
							// font-weight: 600;
							// transition: inherit;
							onClick={() => setDisplayStatus("all")}
							href="#"
						>
							All
						</a>
					</div>
					<div className="w-[25%] text-center border-2 border-[#d9d3d3] rounded-md nav-item">
						<a
							className={
								displayStatus === "pending" ? "nav-link active" : "nav-link"
							}
							// className={"nav-link active font-semibold p-[5px]"}
							onClick={() => setDisplayStatus("pending")}
							href="#"
						>
							Pending
						</a>
					</div>
					<div className="w-[25%] text-center border-2 border-[#d9d3d3] rounded-md nav-item">
						<a
							className={
								displayStatus === "completed" ? "nav-link active" : "nav-link"
							}
							// className={"nav-link active font-semibold p-[5px]"}
							onClick={() => setDisplayStatus("completed")}
							href="#"
						>
							Completed
						</a>
					</div>
				</div>

				<div className=" basis-1/4 f form-check d-flex align-items-center">
					<input
						className="form-check-input"
						type="checkbox"
						id="important-checkbox-toggle-id"
						checked={important}
						// THIS FAILS, MAYBE BECAUSE NEED TO INSURE THIS CHANGE HAPPENS AFTER COMPONENT COMPLETELY RENDERS
						onChange={() => {
							setImportant(!important)
						}}
						// onChange={() => {
						// 	setImportant((prev) => {
						// 		return !prev
						// 	})
						// }}
					/>
					<label
						className="form-check-label"
						htmlFor="important-checkbox-toggle-id"
					>
						Important
					</label>
				</div>
			</div>
		</nav>
	)
}

export default ToDoFilterToolbar
