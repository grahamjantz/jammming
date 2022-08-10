import React from 'react';
import './Track.css';

export class Track extends React.Component {
    renderAction () {
        let label;
        if (this.props.isRemoval) {
            label = '-';
        } else {
            label = '+';
        }

        return (
            <button className="Track-action">{label}</button>
        );
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>track name</h3>
                    <p>track artist | track album</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}