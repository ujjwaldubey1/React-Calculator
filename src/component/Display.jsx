import style from "./Display.module.css";

const Disp = ({ displayValue }) => {
  return (
    <>
      <input className={style.display} type="text" value={displayValue}></input>
    </>
  )
};

export default Disp;