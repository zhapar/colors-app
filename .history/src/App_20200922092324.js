import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import NewPaletteForm from "./NewPaletteForm";
import SingleColorPalette from "./SingleColorPalette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  deletePalette(id) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    return (
      <Route
        render={() => (
          <TransitionGroup>
            <CSSTransition classNames="fade">
              <Switch>
                <Route
                  exact
                  path="/palette/new"
                  render={(routeProps) => (
                    <NewPaletteForm
                      savePalette={this.savePalette}
                      palettes={this.state.palettes}
                      {...routeProps}
                    />
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <PaletteList
                      palettes={this.state.palettes}
                      {...routeProps}
                      deletePalette={this.deletePalette}
                    />
                  )}
                />
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
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(routeProps) => (
                    <SingleColorPalette
                      palette={generatePalette(
                        this.findPalette(routeProps.match.params.paletteId)
                      )}
                      colorId={routeProps.match.params.colorId}
                    />
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />

      // <div>
      //   <Palette palette={generatePalette(seedColors[1])} />
      // </div>
    );
  }
}

export default App;
