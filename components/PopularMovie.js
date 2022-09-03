import { Card, Badge } from "react-bootstrap";

const PopularMovie = ({ movies }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
      {movies.items.map((item, index) => (
        <div key={index}>
          <Card style={{ width: " 16rem" }} className="shadow">
            <Card.Img
              sizes="sm"
              variant="top"
              loading="lazy"
              src={item.image}
              width="100px"
            />
            <Card.Body>
              <Card.Text>{item.fullTitle}</Card.Text>
              <Card.Title className=" m-2">{item.title}</Card.Title>
              <Badge pill bg="success">
                {item.imDbRating}
              </Badge>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PopularMovie;