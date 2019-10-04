import React from 'react';
import Search from './Search';
import Thumbnail from './Thumbnail'
import api from '../api/api';
import Detalhes from './Detalhes';

class Visor extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            text: '',
            isActive: false,
            error: null,
            items: []
        }
    }

    // Pesquisa pokemon
    handleChange = (e) => {
        this.setState( {text: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        api.get(this.state.text)
            .then(
                (result) => {
                    this.setState({
                        items: [result.data]
                    })
                },
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    }

    componentDidMount() {
        api.get()
            .then(
                (result) => {
                    result.data.results.map(item => {
                        fetch(item.url)
                            .then(res => res.json())
                            .then(pokemon => {
                                this.setState({
                                    items: [...this.state.items, pokemon]
                                })
                            })
                    })
                },
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    }

    toggleVisor = () => {
        this.setState ({
            isActive: !this.state.isActive
        });
    }

    renderAction = () => {
        if(this.state.isActive) {
            return (
                <React.Fragment>

                    <form onSubmit={this.handleSubmit} className="form-group">
                        <Search
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                    </form>
                    <div className="thumbnail__container">
                        {this.state.items.map((item, index)=> (
                            <Thumbnail
                                key={index}
                                nome={item.name}
                                src={item.sprites.front_default}
                                weight={item.weight}
                            />
                        )) }
                    </div>

                    <Detalhes />
                </React.Fragment>
            )
        }

        return (
            <button
                className="visor__action-button"
                onClick={ this.toggleVisor }
            ></button>
        )
    }

    render () {

        const {error} = this.state;

        if(error) {
            return (
                <div
                    className={`visor ${this.state.isActive ? 'active' : ''}`}
                >
                    <h2> Não foi possivel carregar, tenta novamente mais tarde!</h2>
                </div>
            )
        } else {
            return (
                <div
                    className={`visor ${this.state.isActive ? 'active' : ''}`}
                >
                    { this.renderAction() }
                </div>
            )
        }

    }
}

export default Visor;