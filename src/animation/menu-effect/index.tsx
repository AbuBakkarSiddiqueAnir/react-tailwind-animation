
import React from 'react';
import './style.css'


type indexProps = {

};

const index: React.FC<indexProps> = () => {

    return (
        <ul className="flex items-center">
        <li>
          <a href="#" className="nav-link">home</a>
        </li>
        <li>
          <a href="#" className="nav-link">about</a>
        </li>
        <li>
          <a href="#" className="nav-link">services</a>
        </li>
        <li>
          <a href="#" className="nav-link">team</a>
        </li>
        <li>
          <a href="#" className="nav-link">contact</a>
        </li>
      </ul>
    )
}
export default index;