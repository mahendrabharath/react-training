
const WithCache = (WrappedComponent) => {
    return (props) => {
        const cachedAPI = async (url) => {
            if (localStorage.getItem(url)) {
                return JSON.parse(localStorage.getItem(url))
            }
    
            const response = await fetch(url)
            const data = await response.json()
            localStorage.setItem(url, JSON.stringify(data))
            return data;
        }

        return <WrappedComponent {...props} cachedAPI={cachedAPI} />;
    }
}



export default WithCache;