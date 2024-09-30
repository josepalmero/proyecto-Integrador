import React, { Component } from 'react';
import "./SearchForm.css";

class SearchForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }
    }

    handleInputChange(e) {
        this.setState({
            query: e.target.value
        })
    }

    handleInputSubmit() {
        this.props.history.push('/search', { query: this.state.query })
    }

    handleCancelSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleCancelSubmit(e)}>
                    <input onChange={(e) => this.handleInputChange(e)} type='text' name='query' value={this.state.query} />
                    <button type='button' onClick={() => this.handleInputSubmit()}>Buscar película</button>
                </form>

            </div>
        )
    }
}

export default SearchForm

