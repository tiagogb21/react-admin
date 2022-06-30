import React from 'react';

import navData from '../services/data';

import icons from '../services/icon';

export default function Nav() {
  return (
    <aside>
      {
        Object.entries(navData).map((items, index) => (
          <>
            <h4>{items[0].toUpperCase()}</h4>
            {
              items[1].map((item, id) => (
                <p key={item}>
                  {icons[index][id]}
                  {item}
                </p>
              ))
            }
          </>
        ))
      }
    </aside>
  );
}
