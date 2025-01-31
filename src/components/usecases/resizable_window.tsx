import { useEffect, useState } from 'react';
import x_button from '../../assets/x_asset.png'
import "./resizable_window.css"


//The nullabe are for good practice
function ResizableWindow({ height, width, gif, title }: { height: string; width: string; gif: string; title: string }) {

  //dude, why tf does js doesn't have a random between function 
  //f***** toy language
  //ik this should go on a util dir, but meh
  const randomValues = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const [x, setX] = useState(randomValues(-300, 200).toString() + "%");
  const [y, setY] = useState(randomValues(-150, 50).toString() + "%");
  const [titleWindow, setTitleWindow] = useState(title)

  const setValues = () => {
    setX(randomValues(-300, 200).toString() + "%")//GRAWW MAGIC NUMBERS (in the App are specified)
    setY(randomValues(-300, 200).toString() + "%")//GRAWW MAGIC NUMBERS (in the App are specified)

  }

  useEffect(() => {
    setTimeout(() => {
      setValues()
    }, 150)
  });

  return (
    <div className="window-background"
      //Passing the variables for the resizing and position
      style={{
        '--height': height,
        '--width': width,
        '--x': x,
        '--y': y
      } as React.CSSProperties
      } >

      <div className="window-bar">

        <h1>{titleWindow}</h1>

        <div className="window-button">
          <img src={x_button}
            onClick={() => {
              setTitleWindow("Fast, but not enough")
            }}
          />
        </div>
      </div>

      <div className="window-content">
        <img src={gif} className="gif-asset" />
      </div>

    </div >
  );
}

export default ResizableWindow;
