import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {

  render() {
    const {handleSetDate, handleSetMood, handleSave} = this.props;


    return (
      <div className="details">

      <div className="block__calendar">
        <label htmlFor="calendar">Fecha</label>
        <input 
          type="date" 
          id="calendar" 
          className="calendar"
          onChange={handleSetDate}
        />
      </div>

      <div className="block__mood">
        <h3>Estado:</h3>
        <div>
          <label htmlFor="mood1">
            <input
              id="mood1"
              type="radio"
              value=":)"
              name="moodes"
              onChange={handleSetMood}
            />
            :)
          </label>
        </div>
        <div>
          <label htmlFor="mood2">
            <input
              id="mood2"
              type="radio"
              value=":("
              name="moodes"
              onChange={handleSetMood}
            />
            :(
          </label>
        </div>
        </div>

        <div className="block__message">
          <label htmlFor="mesagge" className="message">Mensaje</label>
          <input type="text" id="message" className="message"/>
        </div>

        <Link className="header__link" to= {'/'}>
          <button className="btn__save btn" onClick={handleSave}>GUARDAR</button>
        </Link>
        <button className="btn__cancel btn">CENCELAR</button>
      </div>
    );
  }
}

export default Details;