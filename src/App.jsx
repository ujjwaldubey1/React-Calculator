
import './App.css'
import style from "./App.module.css";
import Disp from './component/Display';
import ButtonsHandler from './component/Button';
import { useState } from 'react';
function App() {

  const [calval, setCalval] = useState("");

  const onButtonClick = (ButtonText) => {
    if (ButtonText === "C") {
      setCalval("")
    }
    else if (ButtonText === "=") {
      const result = eval(calval);
      setCalval(result);
    }
    else {
      const newDisplayValue = calval + ButtonText;
      setCalval(newDisplayValue);
    }
  };



  return (
    <>
      <center>
        <div className={style.calculator}>
          <Disp displayValue={calval}></Disp>
          <ButtonsHandler clickButon={onButtonClick}></ButtonsHandler>
        </div>
      </center>
    </>
  )
}

export default App
