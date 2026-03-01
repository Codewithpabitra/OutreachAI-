import Home from "./components/Home"
import {Route, Routes} from "react-router-dom"
import ThankYou from "./components/waitlistPages/ThankYou"
import ConfirmationPage from "./components/waitlistPages/ConfirmationPage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/thank-you" element={<ThankYou />} />
       <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </div>
  )
}

export default App
