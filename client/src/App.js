import React from 'react';
import './App.css';
import Home from './pages/home';
import apiRequests from './api/requests';

export default class App extends React.Component {
  state = {
    loading: true
  }
 async componentDidMount() {
    this.setState({
      latestStats: await apiRequests.latestStats(),
      extraStats: await apiRequests.extraStats(),
      allStats: await apiRequests.allStats(),
      provinceStats: await apiRequests.provinceStats(),
      loading: false
    })
  }


  render() {
    if (this.state.loading) {
      return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h2 className="display-4">Crunching Data <p className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </p></h2>
            <p>If loading persists, <a href="/">Click Me</a></p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="render">
          <Home latest={this.state.latestStats}
                extraStats={this.state.extraStats}
                allStats={this.state.allStats}
                provinceStats={this.state.provinceStats}
          />
        </div>
      )
    }
  }
}
// export default App;
