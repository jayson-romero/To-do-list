import Navbar from "../components/Navbar"
import ToDoList from "../components/ToDoList"
import Footer from "../components/Footer"

const Root = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <ToDoList/>
            </div>
        </main>
      <Footer/> 
    </div>
  )
}

export default Root