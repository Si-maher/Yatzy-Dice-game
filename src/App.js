import React, { Component } from "react"
import Die from "./Die"

class App extends Component {

    render() {
        return (
            <div className="App">
                <Die face="one" />
                <Die face="five" />
                <Die face="two" />
                <Die face="three" />
                <Die face="four" />
            </div>
        )
    }
}
export default App