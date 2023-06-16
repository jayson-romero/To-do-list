import axios from 'axios'
import { useEffect, useState } from 'react'
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import { useLocalStorage } from '../utils/LocalStorage'




const ToDoList = () => {
  const {token} =  useLocalStorage()
  const [post , setPosts] = useState([])
  const [inputs, setInputs] = useState({
    id:  token? token.id : "",
    title: ""
  })


  const [ button , setButton] = useState(false)
  const [ title, setTitle] = useState("")


  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]:e.target.value}))
    setTitle(e.target.value)
  
  }

  // RETRIEVE DATA 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`https://mysql-database-uvhm.onrender.com/api/posts/retrieve/${token? token.id : ""}`)
        setPosts(response.data)
      } catch (error) {
        console.log(error)
      } 
    }
    fetchData()
  },[])


  // ADD DATA
  const handleClick = async (e) => {
      e.preventDefault()
     
      try {
        const response = await axios.post(`https://mysql-database-uvhm.onrender.com/api/posts/add/${token.id}`, inputs)
        window.location.reload()
        window.alert(response.data)
      } catch (error) {
        console.log(error)
      }
  }

  // DELETE DATA
  const handleDelete = async (id) => {
      try {
        const response =  await axios.delete(`https://mysql-database-uvhm.onrender.com/api/posts/delete/${id}` )
        window.alert(response.data)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
  }

  // UPDATE DATA


  const handleUpdate = async (post) => {
      setTitle(post?.title)   
      setInputs({
        id: post.list_id,
        title: post.title
      })
      setButton(true)
  }

  const handleUpdatedClick = async (e) => {
    e.preventDefault
    try {
      const response = await axios.put(`https://mysql-database-uvhm.onrender.com/api/posts/update/${inputs.id}`, inputs)
      window.alert(response.data)
      window.location.reload()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <>
      <div className=" relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 ">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Add your To-Do List.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
            The To-Do List app is a powerful and intuitive task management tool designed to help you stay organized and increase productivity.
            </p>
            <div className="mt-6  max-w-md gap-x-4">
              
            
              <input
                onChange={handleChange}
                id="title"
                name="title"
                type="title"
                value={title}
                className="flex w-[100%] rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 mb-5"
                placeholder="Title"
              />

             
              <button
                onClick={handleClick}
                type="submit"
                className={`flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${button ? "hidden" : ""}`}
              >
                Add
              </button>

              <button
                onClick={handleUpdatedClick}
                type="submit"
                className={`flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${button ? "": "hidden"}`}
              >
                Update
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:pt-2">

            {post.length !== 0  ? post.map((list) => (
                <div key={list.list_id} className="flex flex-col items-start">
                <div className=" flex gap-5 rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <button onClick={() => handleUpdate(list)} >
                    <AiOutlineEdit  className="h-6 w-6 text-green-600"  />
                  </button>
                  <button onClick={() => handleDelete(list.list_id, list)}>
                    <AiOutlineDelete className="h-6 w-6 text-red-600"  />
                  </button>
                </div>
                <dt className="mt-2 font-semibold text-white text-[22px]">{list.title}</dt>
              </div>
            ))
            
            : <p className="mt-2 font-semibold text-white">Don't have any To Do List</p>}


           
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
    </>
  )
}

export default ToDoList