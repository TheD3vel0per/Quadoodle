import React, { Component } from 'react';
import Immutable from 'immutable';
import './Vishal.css';

// class DrawArea extends React.Component {


//     constructor(props) {
//         super(props);

//         this.state = {
//             lines: Immutable.List(),
//             isDrawing: false
//         };

//     }

//     componentDidMount() {
//         document.addEventListener("mouseup", this.handleMouseUp);
//     }

//     componentWillUnmount() {
//         document.removeEventListener("mouseup", this.handleMouseUp);
//     }

//     handleMouseDown = (mouseEvent: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
//         if (mouseEvent.button != 0) {
//             return;
//         }

//         const point = this.relativeCoordinatesForEvent(mouseEvent);

//         this.setState(prevState => ({
//             lines: prevState['lines'].push(Immutable.List([point])),
//             isDrawing: true
//         }));
//     };

//     handleMouseMove = (mouseEvent: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
//         if (!this.state['isDrawing']) {
//             return;
//         }

//         const point = this.relativeCoordinatesForEvent(mouseEvent);
 
//         this.setState(prevState => ({
//             lines: prevState['lines'].updateIn([prevState['lines'].size - 1], line => line.push(point))
//         }));
//     };

//     handleMouseUp() {
//         this.setState({ isDrawing: false });
//     }

//     relativeCoordinatesForEvent = (mouseEvent: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
//         const boundingRect = this.refs.drawArea.getBoundingClientRect();
//         return Immutable.Map({
//             x: mouseEvent.clientX - boundingRect.left,
//             y: mouseEvent.clientY - boundingRect.top,
//         });
//     };

//     render() {
//         return (
//             <div
//                 className="drawArea"
//                 ref="drawArea"
//                 onMouseDown={this.handleMouseDown}
//                 onMouseMove={this.handleMouseMove}
//             >
//                 <Drawing lines={this.state['lines']} />
//             </div>
//         );
//     }
// }


// function Drawing({ lines }) {
//     return (
//         <svg className="drawing">
//             {lines.map((line, index) => (
//                 <DrawingLine key={index} line={line} />
//             ))}
//         </svg>
//     );
// }

// function DrawingLine({ line }) {
//     const pathData = "M " +
//         line
//             .map(p => {
//                 return `${p.get('x')} ${p.get('y')}`;
//             })
//             .join(" L ");

//     return <path className="path" d={pathData} />;
// }



class Vishal extends React.Component {

    render() {
        return (
            <>

            </>
        );
    }


}


export default Vishal;