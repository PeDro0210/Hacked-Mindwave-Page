import './App.css'
import ResizableWindow from './components/usecases/resizable_window'
import starlight from '../src/assets/starlight.gif'
import starlight_2 from '../src/assets/starlight-2.gif'
import starlight_3 from '../src/assets/starlight-3.gif'
import starlight_4 from '../src/assets/starlight-4.gif'

import AppBar from './components/main_components/app_bar'


function App() {
  const windows = [
    { height: "15vw", width: "15vw", title: 'CLICK HERE FOR BITCOIN!', gif: starlight },
    { height: "15vw", width: "15vw", title: 'DOCKER GRAWWW', gif: starlight_2 },
    { height: "10vw", width: "15vw", title: 'You got hacked lol', gif: starlight_3 },
    { height: "20vw", width: "15vw", title: 'VDOM goty', gif: starlight_4, }
  ];

  const randomWindows = Array.from({ length: 10 }, () => {
    const randomIndex = Math.floor(Math.random() * windows.length);
    return windows[randomIndex];
  });

  return (
    <>
      <AppBar />
      {randomWindows.map((window, index) => (
        <ResizableWindow
          key={index}
          height={window.height}
          width={window.width}
          title={window.title}
          gif={window.gif}
        />
      ))}
    </>
  );
}


export default App
