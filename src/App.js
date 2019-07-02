import React from 'react';
import Home from './components/Home';
import Details from './components/Details';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state=({
      date: '',
      mood: '',
      moodsList:[]
    })

    this.handleSetDate = this.handleSetDate.bind(this);
    this.handleSetMood = this.handleSetMood.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSetDate(event) {
    const dateSelected = event.currentTarget.value;

    this.setState(prevState => {
      return {
        date: dateSelected
        // date: [...prevState.date, dateSelected]
        // [prevState.date.push(dateSelected)]
      };
    });

    console.log('^', this.state.date, dateSelected);
  }

  handleSetMood(event) {
    const moodSelected = event.currentTarget.value;

    this.setState(prevState => {
      return {
        mood: moodSelected
        // mood: [...prevState.mood, moodSelected]
      };
    });

    console.log('*', this.state.mood, moodSelected);
  }

  handleSave() {
    const {date, mood} = this.state;
    const moodsObj= {date, mood};
    const newMoods = [...this.state.moodsList, moodsObj]

    this.setState(prevState => {
      return ({
        moodsList: newMoods
      });
    })

  }
  
  
  render() {
  console.log('**^^', this.state.moodsList);
  const {moodsList} = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home
                moodsList={moodsList}

              />
            )}
          />
          <Route
            path="/details"
            render={() => (
              <Details
                handleSetDate={this.handleSetDate}
                handleSetMood={this.handleSetMood}
                handleSave={this.handleSave}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
  }

export default App;
