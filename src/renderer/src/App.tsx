import Versions from './components/Versions'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MapComponent from './components/Map'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/a" element={<Versions />}></Route>
        <Route path="/" element={<MapComponent />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
