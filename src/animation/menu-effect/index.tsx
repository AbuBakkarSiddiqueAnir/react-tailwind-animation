
import React from 'react';
import './style.scss'
type indexProps = {

};

const index: React.FC<indexProps> = () => {

    return (
        <ul>
            <li>
                <a href="#">home</a>
            </li>
            <li>
                <a href="#">about</a>
            </li>
            <li>
                <a href="#">services</a>
            </li>
            <li>
                <a href="#">team</a>
            </li>
            <li>
                <a href="#">contact</a>
            </li>
        </ul>
    )
}
export default index;