import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";

function App() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path='/palette/new'
                render={() => (
                  <Page>
                    <NewPaletteForm />
                  </Page>
                )}
              />
              <Route
                exact
                path='/'
                render={() => (
                  <Page>
                    <PaletteList />
                  </Page>
                )}
              />
              <Route
                exact
                path='/palette/:id'
                render={() => (
                  <Page>
                    <Palette />
                  </Page>
                )}
              />
              <Route
                exact
                path='/palette/:paletteId/:colorId'
                render={() => (
                  <Page>
                    <SingleColorPalette />
                  </Page>
                )}
              />
              {/* <Route
                render={() => (
                  <Page>
                    <PaletteList />
                  </Page>
                )}
              /> */}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
