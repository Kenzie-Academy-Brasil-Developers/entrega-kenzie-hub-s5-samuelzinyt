import "./styles/index.scss"
import HomePages from "./Pages/HomePages"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const App = () =>  {

  return (
    <>
      <HomePages/>
      <ToastContainer/>
    </>
  )
}

export default App
