import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

//GET  POST request
const fetchPosts = async () => {
	try {
		const { data } = await axios.get(`${API_URL}`)
		return data
	} catch (error) {
		console.log(error)
	}
}

export { fetchPosts }
