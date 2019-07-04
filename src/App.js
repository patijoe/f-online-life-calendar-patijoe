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

  uniqueDay() {
    
  }

  handleSetDate(event) {
    const {moodsList} = this.state;
    const dateSelected = event.currentTarget.value;

    this.setState(prevState => {
      return {
        date: dateSelected
      };
    });

    console.log('^', dateSelected);

    if(moodsList.length!==0) {
      const repeatedDate = moodsList.some(item => item.date===dateSelected);
       if(repeatedDate===false) {
        this.setState(prevState => {
          return {
            date: dateSelected
          };
        });
       } else {
        this.setState(prevState => {
          return {
            date: null
          };
        })
       }

      console.log(repeatedDate);
    } else {
      this.setState(prevState => {
        return {
          date: dateSelected
        };
      });
      
      console.log('no ha nada');
    }
  }

  handleSetMood(event) {
    const moodSelected = event.currentTarget.value;

    this.setState(prevState => {
      return {
        mood: moodSelected
      };
    });

    console.log('*', this.state.mood, moodSelected);
  }

  handleSave() {
    const {date, mood} = this.state;
    const moodsObj= {date, mood};
    const newMoods = [...this.state.moodsList, moodsObj]

    if (date !== '' && date !== null && mood !== '') {
      this.setState(prevState => {
        return ({
          moodsList: newMoods
        });
      })
    } else {
      console.log('es posible que ya hayas escogido la fecha o q hayas olvidado poner el estado de ánimo')
    }
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
