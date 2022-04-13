import React from "react";
import { Badge, Card } from "react-bootstrap";

const SearchContent = ({ result }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
      {result !== null &&
        result.map((item) => (
          <Card key={item.id} style={{ width: " 16rem" }} className="shadow">
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
        ))}
    </div>
  );
};

export default SearchContent;
