import { createContext } from "react";

const defaultContext = {
    topNews: [],
    selectedNews: {
        "source": {
            "id": "",
            "name": ""
        },
        "author": "Mitch",
        "title": "",
        "description": "",
        "url": "",
        "urlToImage": "",
        "publishedAt": "",
        "content": ""
    }
}

const NewsContext = createContext(defaultContext)

export default NewsContext