// import Versions from './components/Versions'
import { HashRouter, Routes, Route } from 'react-router'
import MapComponent from './components/MapEditor'
import { NavMenu } from './components/layout/NavMenu'
import { useState } from 'react'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const RADIO_ITEMS = ['Dark', 'Light']
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[0])

  return (
    <HashRouter>
      <NavMenu
        radioItems={RADIO_ITEMS}
        selectedMode={radioSelection}
        onModeChange={setRadioSelection}
      />
      <Routes>
        <Route path="/" element={<MapComponent viewMode={radioSelection} />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
