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
      moodsList: JSON.parse(localStorage.getItem('moodsList')) || []
    })

    this.handleSetDate = this.handleSetDate.bind(this);
    this.handleSetMood = this.handleSetMood.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSetDate(event) {
    const {moodsList} = this.state;
    const dateSelected = event.currentTarget.value;

    
    if(moodsList.length !== 0) {
      const uniqueDate = moodsList.some(dateSelected);
      console.log('??', uniqueDate);

      if(uniqueDate !== undefined) {
        this.setState(prevState => {
          return {
            date: uniqueDate
          };
        });
        
      } else {
        this.setState({
          date: dateSelected
        })
      }
    }
    
  }

  handleSetMood(event) {
    const moodSelected = event.currentTarget.value;

    this.setState(prevState => {
      return {
        mood: moodSelected
      };
    });
  }

  handleSave() {
    const {date, mood, moodsList} = this.state;
    const moodsObj= {date, mood};
    const newMoods = [...this.state.moodsList, moodsObj]
        
    this.setState(prevState => {
      return ({
        moodsList: newMoods
      }
      );
    })
    localStorage.setItem('moodsList', JSON.stringify(moodsList));
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
