import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="app">

        <div className="block__calendar">
          <label htmlFor="calendar">Fecha</label>
          <input type="date" id="calendar" className="calendar"/>
        </div>

        <div className="block__state">
          <h3>Estado:</h3>
          <div>
            <label htmlFor="state1">
              <input
                id="state1"
                type="radio"
                value="happy"
                name="states"
              />
              :)
            </label>
          </div>
          <div>
            <label htmlFor="state2">
              <input
                id="state2"
                type="radio"
                value="sad"
                name="states"
              />
              :(
            </label>
          </div>
        </div>

        <div className="block__message">
          <label htmlFor="mesagge" className="message">Mensaje</label>
          <input type="text" id="message" className="message"/>
        </div>

        <button className="btn__save btn">GUARDAR</button>
        <button className="btn__cancel btn">CENCELAR</button>

      </div>
    );
  }
  }

export default App;
