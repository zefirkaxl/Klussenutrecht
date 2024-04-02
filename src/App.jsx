

import './App.scss'
import Clients from './components/clients/Clients'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Options from './components/options/Options'
import Slider from './components/slider/Slider'
import Video from './components/video/Video'
function App() {


  return (
    <div className='App' >
      <Header/>
      <Hero/>
      <Options/>
      <Clients/>
      <Video/>
      <Slider/>
    </div>
  )
}

export default App
