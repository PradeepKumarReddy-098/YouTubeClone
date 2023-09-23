import React from 'react'

const NexWatchContext = React.createContext({
  isDarkMode: false,
  changeMode: () => {},
  activeTab: 'HOME',
  changeActiveTab: () => {},
  savedVideosList: [],
  updateSavedVideosList: () => {},
})

export default NexWatchContext
