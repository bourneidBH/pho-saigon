import React from "react";
import Container from "../Container";
import "./ImageGrid.css";
import Image from "./Image";
import images from "./image.json";

class ImageGrid extends React.Component {

  state = {
    images,
  };

  // random resort of items in array to change display order of images
  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  componentDidMount() {
    this.shuffleArray(images);
  };
  
  render() {
    return(
      <Container fluid>
        <div className="row no-gutters">
          {this.state.images.slice(0,6).map(image => (
            <div className="col-sm-2" key={image.id}>
              <Image
                id={image.id}
                name={image.name}
                image={image.image}
              />
            </div>
          ))}
        </div>
      </Container>
    )
  };
};

export default ImageGrid;