
import React from 'react';

import style from "./Button.module.css";


const ButtonsHandler = ({ clickButon }) => {

  const buttonName = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."]

  return (
    <>
      <div className={style.buttonContainer}>

        {buttonName.map((Button) =>
          <button className={style.button} onClick={() => clickButon(Button)}>{Button}</button>
        )}



      </div>
    </>
  )
};

export default ButtonsHandler;