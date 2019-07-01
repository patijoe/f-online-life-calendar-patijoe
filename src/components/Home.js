import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const {mood} = this.props;

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
              {mood.map((item, index) => {
                return(
                  <li className={item === ':)' ? "mood__happy" : "mood__sad"} key={index}>{item}</li>
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