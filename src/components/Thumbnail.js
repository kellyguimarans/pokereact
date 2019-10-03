import React from 'react';

class Thumbnail extends React.Component {
    render () {
        return (
            <div className="thumbnail__box">

                <img src={this.props.src} alt={this.props.nome} />
                <h3>{this.props.nome}</h3>
                <h4><small>CP </small><span>{this.props.weight}</span></h4>
            </div>
        )
    }
}

export default Thumbnail;