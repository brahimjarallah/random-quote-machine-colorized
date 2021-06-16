import { random } from "lodash"
import React, { Component } from "react"
import QuoteMachine from "./components/QuoteMachine"
import "typeface-roboto"
import { Grid, withStyles } from "@material-ui/core"

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
  },
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "orange",
    }

    this.handleColorChange = this.handleColorChange.bind(this)
  }
  handleColorChange(color) {
    this.setState({
      color: color,
    })
  }

  render() {
    return (
      <Grid
        style={{ backgroundColor: this.state.color }}
        className={this.props.classes.container}
        id="quote-box"
        justify="center"
        container
      >
        <Grid xs="11" lg="8" item>
          <QuoteMachine
            color={this.state.color}
            onChangeAppColor={this.handleColorChange}
          />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(App)
