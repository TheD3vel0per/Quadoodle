import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class ColoredRect extends React.Component {
    state = {
      color: 'green'
    };

    handleClick = () => {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    };

    render() {
      return (
        <Rect
          x={20}
          y={20}
          width={50}
          height={50}
          fill={this.state.color}
          shadowBlur={5}
          onClick={this.handleClick}
        />
      );
    }
  }
  
  class Aiden extends Component {
    render() {
      // Stage is a div container
      // Layer is actual canvas element (so you may have several canvases in the stage)
      // And then we have canvas shapes inside the Layer
      return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="Try click on rect" />
            <ColoredRect />
          </Layer>
        </Stage>
      );
    }
  }

export default Aiden;