import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: '',
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    return this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className='ui segment padded basic'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(event) => {
                this.setState({ term: event.target.value })
              }}
              onClick={this.onClick}
              placeholder='Search...'
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
