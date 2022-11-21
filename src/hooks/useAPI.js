const { useEffect, useState } = require("react")
const { API_KEY } = require("../constants")

const useAPI = (url, payload) => {
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchCall = async () => {
            const response = await fetch('https://newsapi.org/v2/everything?q=stock&apiKey=' + API_KEY)
            const data = await response.json()
            setResponse(data)
            setLoading(false)
        }
        fetchCall()
    }, [])

    return { response, loading }
}

export default useAPI;