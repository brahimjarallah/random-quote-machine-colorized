import React, { Component } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  IconButton,
} from "@material-ui/core"

class QuoteMachine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: "",
      author: "",
      color: this.props.color,
      tweetUrl: "https://twitter.com/intent/tweet?text=",
    }

    this.getNewQuote()
    this.getNewQuote = this.getNewQuote.bind(this)
    this.handleNewQuote = this.handleNewQuote.bind(this)
  }

  getNewQuote() {
    // const app = this
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const index = Math.floor(Math.random() * data.length)
        this.setState({
          quote: data[index].text,
          author: data[index].author,
          tweetUrl:
            "https://twitter.com/intent/tweet/?text=" +
            data[index].text.replace(/ /g, "+") + ' -' + data[index].author,
        })
      })
  }

  handleNewQuote() {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ]
    let color = colors[Math.floor(Math.random() * colors.length)]
    while (color === this.state.color)
      if (this.state.quotes.length > 0) {
        this.setState({
          color: color,
        })
      }
    this.props.onChangeAppColor(color)
    this.getNewQuote()
  }

  render() {
    return (
      <Card>
        <CardContent>
          {/* {selectedQuote ? ( */}
          <Typography>
            {this.state.quote} - {this.state.author}
          </Typography>
          {/* )  */}
          {/* : null} */}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.handleNewQuote}>
            Next Quote
          </Button>
          <IconButton href={this.state.tweetUrl} target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default QuoteMachine
