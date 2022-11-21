import { useEffect, useState } from 'react';
import './App.css';
import NewsDetails from './components/NewsDetail';
import NewsList from './components/NewsList';
import NewsContext from './context/newsContext';
import useAPI from './hooks/useAPI';

function App() {
  const { response: data, loading } = useAPI()

  const [news, setNews] = useState([])
  const [selectedNews, setSelectedNews] = useState({})

  useEffect(() => {
    if (data.articles) {
      setNews(data.articles)
    }
    // eslint-disable-next-line
  }, [loading])

  const selectNews = news => setSelectedNews(news)

  return (
    <div className="App">
      {loading ? <h3>Loading</h3> : ''}
      <NewsContext.Provider value={{ topNews: news, selectedNews }}>
          <NewsList selectNews={selectNews} />
          <NewsDetails/>
      </NewsContext.Provider>
    </div>
  );
}

export default App;
