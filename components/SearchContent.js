import { Badge, Card } from "react-bootstrap";

const SearchContent = ({ result }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
      {result !== null &&
        result.map((item) =>
          item.resultType == "Title" ? (
            <Card
              key={item.id}
              style={{ width: "16rem", height: "fit-content" }}
              className="shadow"
            >
              <Card.Img
                sizes="sm"
                variant="top"
                loading="lazy"
                src={item.image}
                width="100px"
              />
              <Card.Body>
                <Card.Text>
                  {item.fullTitle}
                  {item.description}
                </Card.Text>
                <Badge pill bg="success">
                  {item.title}
                </Badge>
              </Card.Body>
            </Card>
          ) : item.resultType == "Company" ? (
            <Card
              key={item.id}
              style={{ width: "16rem", height: "fit-content" }}
              className="shadow"
            >
              {item.img && (
                <Card.Img
                  sizes="sm"
                  variant="top"
                  loading="lazy"
                  src={item.image}
                  width="100px"
                />
              )}
              <Card.Body>
                <Card.Text>
                  {item.title}
                  {item.description}
                </Card.Text>
                <Badge pill bg="primary">
                  Company
                </Badge>
              </Card.Body>
            </Card>
          ) : item.resultType == "Name" ? (
            <Card
              key={item.id}
              style={{ width: "16rem", height: "fit-content" }}
              className="shadow"
            >
              {item.img && (
                <Card.Img
                  sizes="sm"
                  variant="top"
                  loading="lazy"
                  src={item.image}
                  width="100px"
                />
              )}
              <Card.Body>
                <Card.Text>
                  {item.title}
                  {item.description}
                </Card.Text>
                <Badge pill bg="primary">
                  Name
                </Badge>
              </Card.Body>
            </Card>
          ) : (
            item.resultType == "Keyword" && (
              <Card
                key={item.id}
                style={{ width: "16rem", height: "fit-content" }}
                className="shadow"
              >
                {item.img && (
                  <Card.Img
                    sizes="sm"
                    variant="top"
                    loading="lazy"
                    src={item.image}
                    width="100px"
                  />
                )}
                <Card.Body>
                  <Card.Text>
                    {item.title}
                    {item.description}
                  </Card.Text>
                  <Badge pill bg="primary">
                    Keyword
                  </Badge>
                </Card.Body>
              </Card>
            )
          )
        )}
    </div>
  );
};

export default SearchContent;