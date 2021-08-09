import logo from './logo.svg';
import './App.css';
import {ContentPreview} from "box-ui-elements";
import {IntlProvider} from "react-intl";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './views/search/search'
import Preview from './views/preview/preview'
import Login from './views/login/login'
import RetailSearch from './views/retail/search'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/retail">
            <RetailSearch/>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          
          <Route path="/">
            <Login />
          </Route>
          
        </Switch>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <IntlProvider locale="en">
			  <ContentPreview token={'KKSaSP6ThsarjRgD0JYDbT4itDuziqJ6'} fileId={'780146277166'} height={"100%"} width={"100%"}/>
		  </IntlProvider> */}
    </div>
  );
}

export default App;
