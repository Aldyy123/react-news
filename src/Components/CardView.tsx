import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const CardView = (props: any) => {
  return (
    <div className="col-4" key={props.index} data-testid="card">
      <Card>
        <Link to={{
          pathname: `/` + props.index,
          state: {props}
        }} className="nav-link">
          <CardImg
            top
            width="100%"
            src={props.article.urlToImage}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{props.article.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {props.article.author}
            </CardSubtitle>
            <CardText>{props.article.description}</CardText>
          </CardBody>
        </Link>
      </Card>
    </div>
  )
}

export default CardView
