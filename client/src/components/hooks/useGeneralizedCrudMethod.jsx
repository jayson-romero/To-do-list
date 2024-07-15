import { useState, useEffect } from "react"
import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL

const LOADING_STATES = ["loading", "errorrd", "suscess"]

const useGeneralizedCrudMethod = (url, errorNotificationFn) => {
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

	// ======= READ DATA  ========
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

	// ======= READ DATA using USEEFFET ========
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

	// ======= CREATE DATA ========
	const createRecord = (createObject, callbackDone) => {
		const addData = async () => {
			// return all initial data
			const startingData = data.map((rec) => {
				return { ...rec }
			})

			try {
				// create id incase
				// createObject.id = Math.max(...data.map((o) => o.id), 0) + 1
				setData((originalState) => {
					return [createObject, ...originalState]
				})
				await axios.post(baseUrl + url, createObject)

				if (callbackDone) callbackDone()
			} catch (e) {
				setData(startingData)
				const erroString = formatErrorString(e, url)
				errorNotificationFn?.(erroString)
				if (callbackDone) callbackDone()
			}
		}
		addData()
	}

	// ======= UPDATE DATA ========
	const updateRecord = (updateObject, callbackDone) => {
		const id = updateObject.id

		const updateData = async () => {
			const startingData = data.map((rec) => {
				return { ...rec }
			})
			try {
				// setData((originalState) => {
				// 	const dataRecord = originalState.find((rec) => rec.id === id)

				// 	for (const [key, value] of Object.entries(updateObject)) {
				// 		dataRecord[key] = value === undefined ? dataRecord[key] : value
				// 	}
				// 	return originalState.map((rec) => {
				// 		rec.id === id ? dataRecord : rec
				// 	})
				// })
				// await new Promise((resolve) => setTimeout(resolve, 2000))

				// get the full record back that has been updated
				// const updatedRecord = data.find((rec) => rec.id === id)
				// console.log(updatedRecord)
				const response = await axios.put(`${baseUrl}${url}/${id}`, updateObject)

				if (response.status === 200) getData()

				// console.log(`done  call axios.put`);
				if (callbackDone) callbackDone()
			} catch (e) {
				console.log(error)
				setData(startingData)
				const errorString = formatErrorString(e, url)
				errorNotificationFn?.(errorString)
				if (callbackDone) callbackDone()
			}
		}
		updateData()
	}

	return { data, error, loadingStatus, createRecord, updateRecord }
}

export default useGeneralizedCrudMethod
