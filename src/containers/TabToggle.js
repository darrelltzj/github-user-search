import React from 'react';

import TabBtn from '../components/atoms/TabBtn';

function TabToggle(props) {
  const { titles, selected } = props;
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
    }}
    >
      {titles.map(title => (
        <TabBtn
          key={title.key}
          name={title.name}
          selected={title.key === selected}
        />
      ))}
    </div>
  );
}

export default TabToggle;
