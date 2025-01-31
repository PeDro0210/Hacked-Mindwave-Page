import "./app_bar.css"
import x_button from '../../assets/x_asset.png'
import { useState } from "react";
function AppBar() {
  const [title, setTitle] = useState("Usemos Fish Erick")
  return (
    <div className="app-bar">
      <div className="special-bar">

        <h1>{title}</h1>

        <div className="window-button">
          <img src={x_button} onClick={() => { setTitle("Nu uh, don't even think about it") }} />
        </div>
      </div>
    </div>
  )
}


export default AppBar;
