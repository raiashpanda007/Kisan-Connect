import { Outlet } from "react-router-dom";
import  {header as Header}  from "./Components/Component.js";

function App() {
  return (
    <div className="h-screen w-screen overflow-none relative">
      <Header />
      <Outlet />
    </div>
  )
 
}

export default App;
