import React from 'react';
import Visor from './Visor';


class Bar extends React.Component {
    render() {
        return (
            <main className="pokedex">
                <div className="top-bar"></div>
                    <Visor />
                <div className="bottom-bar"></div>
            </main>
        )
    }
}

export default Bar;