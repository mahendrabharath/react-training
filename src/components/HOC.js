import { API_KEY } from "../constants"
import withFetch from "./withFetch,"

const MyComp = withFetch((props) => {
    console.log({ ...props })
    return <p>WithFetch</p>
}, 'https://newsapi.org/v2/everything?q=stock&apiKey=' + API_KEY)

export default MyComp;