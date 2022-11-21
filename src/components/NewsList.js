import { useContext } from "react"
import NewsContext from "../context/newsContext"
import withCache from "./withCache"

const MyNewsList = ({ selectNews }) => {
    const newsContext = useContext(NewsContext)
    // console.log({ newsContext })
    return <div className="news-list">
        <h4>Top News</h4>
        <div>
            {newsContext.topNews.map((el, i) => (<div key={i} onClick={() => selectNews(el)} className="news-item">
                <h3 className="news-title">{el.title}</h3>
                <img alt="news" className="news-image" src={el.urlToImage} />
            </div>))}
        </div>
    </div>
}

const NewsList = withCache(MyNewsList)

export default NewsList