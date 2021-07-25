import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'

class Detail extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      Article: {},
    }
  }
  componentDidMount(){
    if(this.props.location.state === undefined){
      this.setState({Article: undefined})
    }else{
      this.setState({
        Article: this.props.location.state.props.article
      })
    }
  }
  errorTemplate = () => {
    return (
      <h1>Maaf tidak ada data</h1>
    )
  }
  successTemplate = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col" data-testid="col-detail">
            <Card>
              <CardImg
                top
                width="100%"
                src={this.state.Article.urlToImage}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{this.state.Article.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted d-flex justify-content-between">
                  <p>{this.state.Article.author}</p>
                  <p>{this.state.Article.publishedAt}</p>
                </CardSubtitle>
                <CardText>
                    {this.state.Article.content}
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const article: boolean = this.state.Article === undefined
    let component
    if(article){
      component = this.errorTemplate()
    }else{
      component = this.successTemplate()
    }
    return (
      component
    )
  }
}

export default Detail
