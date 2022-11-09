import React from 'react'

const TabsComponent = ({ tabs }) => {
  return (
    <div>
      {tabs.map(tab => (
        <div>{tab.title}</div>
      ))}
    </div>
  )
}

export default TabsComponent