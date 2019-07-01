import React from 'react';
import Home from './components/Home';
import Details from './components/Details';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state=({
      date: [],
      mood: []
    })

    this.handleSetDate = this.handleSetDate.bind(this);
    this.handleSetMood = this.handleSetMood.bind(this);
  }

  handleSetDate(event) {
    const dateSelected = event.currentTarget.value;

    this.setState(prevState => {
      return {
        date: [...prevState.date, dateSelected]
        // [prevState.date.push(dateSelected)]
      };
    });

    console.log('^', this.state.date);
  }

  handleSetMood(event) {
    const moodSelected = event.currentTarget.value;

    this.setState(prevState => {
      return {
        mood: [...prevState.mood, moodSelected]
      };
    });

    console.log('*', this.state.mood);
  }


  render() {
  const {mood} = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home
                mood={mood}
              />
            )}
          />
          <Route
            path="/details"
            render={() => (
              <Details
                handleSetDate={this.handleSetDate}
                handleSetMood={this.handleSetMood}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
  }

export default App;
