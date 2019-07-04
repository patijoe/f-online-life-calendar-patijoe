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
      message: '',
      moodsList:JSON.parse(localStorage.getItem('moodsList')) || []
    })

    this.handleSetDate = this.handleSetDate.bind(this);
    this.handleSetMood = this.handleSetMood.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSetMessage = this.handleSetMessage.bind(this);
  }

  uniqueDay() {
    
  }

  handleSetDate(event) {
    const {moodsList} = this.state;
    const dateSelected = event.currentTarget.value; // });

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
            date: ''
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

  handleSetMessage(event) {
    const messageHappyDay = event.currentTarget.value;

    this.setState(prevState=> {
    return{
      message: messageHappyDay
    }
    })
  }

  handleSave() {
    const {date, mood, message} = this.state;
    const moodsObj= {date, mood, message};
    const newMoods = [...this.state.moodsList, moodsObj]

    if (date !== '' && mood !== '') {
      this.setState(prevState => {
        return ({
          moodsList: newMoods
        });      
      })

      localStorage.setItem('moodsList', JSON.stringify(newMoods));
      
    } else if (date === '') {
      alert ('es posible que ya hayas escogido la fecha')

    } else if (mood === '') {
      alert ('es posible que hayas olvidado poner el estado de ánimo') 
    }
    
  }
  
  
  render() {
  console.log('**^^', this.state.moodsList);
  const {moodsList, mood, message} = this.state;

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
                handleSetMessage={this.handleSetMessage}
                handleSave={this.handleSave}
                mood={mood}
                message={message}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
  }

export default App;
