import React from 'react';

import navData from '../data';

export default function Nav() {
  return (
    <nav>
      {
        Object.entries(navData).map((items) => (
          <article key={items[0]}>
            <h3>{items[0]}</h3>
            {
              items[1].map((item) => (
                <p>{item}</p>
              ))
            }
          </article>
        ))
      }
    </nav>
  );
}
