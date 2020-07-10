import React, { Component } from "react"
import unsplash from "../api/unsplash"

import SearchBar from "./SearchBar"
import ImageList from "./ImageList"
import {} from "semantic-ui-react"
import "./App.css"

class App extends Component {
  state = {
    images: [],
    count: null,
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    })
    this.setState({ images: response.data.results })
  }
  render() {
    return (
      <div className="ui container">
        <div style={{ marginTop: "20px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    )
  }
}

export default App
