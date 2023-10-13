import {
  faLocationDot,
  faMars,
  faVenus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.css';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, gender, location, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              {gender === 'male' ? (
                <>
                  <FontAwesomeIcon
                    icon={faMars}
                    style={{ color: '#e2abc6', display: 'inline' }}
                  />
                  <p style={{ display: 'inline', marginLeft: '8px' }}>
                    {age} years
                  </p>
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faVenus}
                    style={{ color: '#e2abc6', display: 'inline' }}
                  />
                  <p style={{ display: 'inline', marginLeft: '8px' }}>
                    {age} years
                  </p>
                </>
              )}
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: '#e2abc6', display: 'inline' }}
                />
                <p style={{ display: 'inline', marginLeft: '8px' }}>
                  {location}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
