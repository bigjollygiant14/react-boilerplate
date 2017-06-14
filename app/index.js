import React from 'react';
import { render } from 'react-dom';

// Router
import { HashRouter, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import videoData from './reducers/videoReducer';
import initialState from './reducers/initialState';
const store = createStore(
  combineReducers({
    videoData,
    routing: routerReducer
  }),
  initialState
)

import App from './components/App';
import LandingPage from './components/landing/LandingPage';
import VideoLandingPage from './components/video/VideoLandingPage';
import VideoChildLandingPage from './components/videoChild/VideoChildLandingPage';
import NotFoundPage from './components/util/NotFoundPage';

render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/video" component={VideoLandingPage} />
          <Route path="/video/:VideoId" component={VideoChildLandingPage} />
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
