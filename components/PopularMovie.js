import React from "react";

import { Card, Button, Badge } from "react-bootstrap";

const PopularMovie = ({ movies }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-5">
      {movies.items.map((item, index) =>
        item ? (
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

                <div className="d-flex align-items-center justify-content-between mt-3">
                  <Badge pill bg="success">
                    {item.imDbRating}
                  </Badge>
                  <Button variant="dark" size="sm">
                    Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <h1>asdasdasd</h1>
        )
      )}
    </div>
  );
};

export default PopularMovie;
