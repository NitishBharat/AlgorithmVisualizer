import React, {Component} from 'react';
import Cell from "./cell";
import FlipMove from 'react-flip-move';

class Ribbon extends Component {
    render() {
       // console.log('this.props');
       // console.log(this.props);
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                <FlipMove
                    className="d-flex justify-content-center align-items-end"
                    duration={100}
                    // easing="cubic-bezier(.12,.36,.14,1.2)"
                >
                    {this.props.strip
                        .filter(cell => cell.id >= this.props.cellStart && cell.id <= this.props.cellEnd)
                        .map((cell, cellidx) => {
                            return (
                                <Cell
                                    key={cell.id}
                                    id={cell.id+50}
                                    val={cell.val}
                                />
                            );
                        })}
                </FlipMove>
            </div>
        );
    }
}

export default Ribbon;