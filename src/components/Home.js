import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const {moodsList} = this.props;

    return (
      <div className="home">
        <header className="home__header">
          <Link className="header__link" to= {'/details'}>
            <div className="header__container">+</div>
          </Link>
        </header>
        <main className="home__main">
          <div className="moods__main">
            <ul className="moods__list">
              {moodsList.map((item, index) => {
                return(
                  <li className={item.mood === ':)' ? "mood__happy" : "mood__sad"} key={index}>{item.mood}</li>
                );
              })}
            </ul>
          </div>
        </main>
      </div>

    );
  }
}

export default Home;