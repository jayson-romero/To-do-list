import { useState, useEffect } from "react"
import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL

const LOADING_STATES = ["loading", "errorrd", "suscess"]

const useGeneralizedCrudMethod = (url) => {
	const [data, setData] = useState()
	const [error, setError] = useState(null)
	const [loadingStatus, setLoadingStatus] = useState("loading")

	// ======= IF URL ARE MISS ========
	if (!url || url.length === 0) {
		throw new Error("useFetch no url passed in error")
	}

	// ======= ERROR FORMAT ========
	const formatErrorString = (e, url) => {
		const errorString =
			e?.response?.status === 404
				? e?.message + " url " + url
				: e?.message + e?.response?.data
		console.log(errorString)
		return errorString
	}

	const getData = async (callbackDone) => {
		try {
			setLoadingStatus(LOADING_STATES[0])
			const results = await axios.get(baseUrl + url)
			setData(results.data)
			setLoadingStatus(LOADING_STATES[2])
		} catch (e) {
			setError(e)
			setLoadingStatus(LOADING_STATES[1])
		}
		if (callbackDone) callbackDone()
	}

	useEffect(() => {
		const getDataUseEffect = async (callbackDone) => {
			try {
				setLoadingStatus(LOADING_STATES[0])
				const results = await axios.get(baseUrl + url)

				setData(results.data)
				setLoadingStatus(LOADING_STATES[2])
			} catch (e) {
				setError(e)
				setLoadingStatus(LOADING_STATES[1])
			}
			if (callbackDone) callbackDone()
		}
		getDataUseEffect()
	}, [url])

	return { data, error, loadingStatus }
}

export default useGeneralizedCrudMethod
