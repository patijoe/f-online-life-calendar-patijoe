import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <header className="header">
      <Link className="link" to= {'/details'}>
        <div className="header__container">+</div>
      </Link>
      </header>
    );
  }
}

export default Home;