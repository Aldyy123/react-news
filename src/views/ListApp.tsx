import React, { Component } from 'react'
import CardView from '../Components/CardView'
import { getNews } from '../NewsApi'

interface Articles {
  author: string
  urlToImage: string
  url: number
  description: string
  title: string
  content: string
  source: Source
  publishedAt_id: string
}

interface Source {
  id: string
  name: string
}
class ListApp extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      Articles: [],
    }
  }
  async componentDidMount() {
    getNews().then((response: any) => {
      const articles = response.articles
      this.setState({
        Articles: articles,
      })
    })
    .catch((error: {}) => console.log(error))
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center">News API</h1>
        <div className="row" data-testid="row">
          {this.state.Articles.map((article: Articles, index: number) => {
            return <CardView article={article} index={index} />
          })}
        </div>
      </div>
    )
  }
}

export default ListApp
