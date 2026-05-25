import React, { useState } from 'react';
import im1 from './assets/imm1.png';
import im2 from './assets/hero.png';

export default function CHL() {
  const [count, setCount] = useState(0);
  const [style, changeStyle] = useState("pink");
  const [imdg, setImg] = useState(im1);
  const [btnText, setBtnText] = useState("show");
  const [showText, setShowText] = useState(false);

  const hs = () => {
    setCount(count + 1);
  };

  const inc = () => {
    if (count < 10) {
      setCount(count + 2);
    }
  };

  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const cs = () => {
    changeStyle(style === "pink" ? "orange" : "pink");
  };

  const si = () => {
    setImg(imdg === im1 ? im2 : im1);
  };

  const change_text = () => {
    if (btnText === "show") {
      setBtnText("hide");
      setShowText(true);
    } else {
      setBtnText("show");
      setShowText(false);
    }
  };

  return (
    <>
      <h1>Count changing {count}</h1>
      <button onClick={hs}>User clicked times</button>
      <button onClick={inc}>Increment 🤩</button>
      <button onClick={dec}>Decrement 😫</button>

      <h1 style={{ backgroundColor: style }}>Background color demo</h1>
      <button onClick={cs}>Click me to change bg...</button>

      <img src={imdg} height="50" width="100" alt="" onClick={si} />
      <button onClick={si}>Toggle Image</button>

      <button onClick={change_text}>{btnText}</button>
      {showText && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempore repudiandae sequi voluptatum dolorem molestiae dignissimos, placeat magnam voluptas itaque! Qui laudantium doloribus magnam. Temporibus eos ullam non consequuntur voluptas.
          Voluptatem non dolor quos omnis impedit laudantium. Dignissimos ipsum quibusdam inventore ex id incidunt rerum repellendus omnis, mollitia quasi aliquam culpa! Dolorem ipsa ducimus explicabo. Cupiditate tempore fugiat adipisci accusantium.
          Eos quis consequatur veritatis dignissimos qui veniam asperiores. Quas ea tempore corporis odio deserunt eos enim, modi ipsam expedita est maiores harum assumenda temporibus exercitationem quis! Quisquam quo sit est?
        </p>
      )}
    </>
  );
}
