import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./App.css";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>React Palette Home here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[1])} />
      // </div>
    );
  }
}

export default App;
