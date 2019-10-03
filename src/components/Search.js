import React from 'react';

import { IconSearch } from './icones/icones'
import './styles/App.scss';

class Search extends React.Component {

    render(){
        return (
            <React.Fragment>
                <input
                    value={this.props.text}
                    onChange={this.props.onChange}
                    className="search" type="text" />
                <button type="submit" className="search__btn">
                    <IconSearch width="24px" height="24px" fill="#52181c" />
                </button>
            </React.Fragment>
        )
    }
}

export default Search;