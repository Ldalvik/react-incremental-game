import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoneFishing from "./game/GoneFishing";
import SplashScreen from './SplashScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SplashScreen />} />
        <Route exact path='/new' element={<GoneFishing />} />
        <Route exact path='/tutorial' element={<SplashScreen />} />
        <Route exact path='/load' element={<SplashScreen />} />
        <Route exact path='/export' element={<SplashScreen />} />
        <Route exact path='/import' element={<SplashScreen />} />
        <Route exact path='/theme' element={<SplashScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App