import { useEffect } from "react"
import NewsContext from "../context/newsContext"
import WithCache from "./withCache"

const NewsDetails = ({cachedAPI}) => {
  
    useEffect(() => {
        const fetchAPI = async () => {
        
        const response = await cachedAPI('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e04203a1c8394eedb84b3e546c332d72')
        console.log('related ', response)

        }
        fetchAPI()
        // eslint-disable-next-line
    }, [])
    return <NewsContext.Consumer>
        {({ selectedNews }) => <div className="selected-news">
            <div className="column">
                <h2>{selectedNews.title}</h2>
                <p>{selectedNews.content}</p>
                <p>{selectedNews.description}</p>
                <h3>{selectedNews.author}</h3>
                <h6>{selectedNews.source?.name}</h6>
                <h4>{selectedNews.publishedAt}</h4>
            </div>
            <div className="column">
                <img alt="news" src={selectedNews.urlToImage} />
            </div>
        </div>}
    </NewsContext.Consumer>
}

export default WithCache(NewsDetails)