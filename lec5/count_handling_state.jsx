import React, { useState } from 'react';
import im1 from './assets/imm1.png';
import im2 from './assets/hero.png';

export default function CHL() {
  const [count, setCount] = useState(0);
  const [style, changeStyle] = useState("pink");
  const [imdg, setImg] = useState(im1);
  const [btnText, setBtnText] = useState("show");
  const [showText, setShowText] = useState(false);

  //task4
  const[oldbrand, newbrand] = useState("Mercedes")
  const[oldcolor, newcolor]= useState("white")
  const[oldmodel, newmodel] = useState("--")
  const[oldyear, newyear] = useState("2011")

  //task5
  //set of images and randomly getting selected
  const arrOfImage = [im1 , im2, im1, im2, im1]
  const [pic , setpic] = useState(arrOfImage[0])

  //task 6
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")

  
  //alternate - short method
  const [data, setdata] = useState({})
  const changemydata = (e) =>{
    const {name, value} = e.target
    setdata({...data ,[name]:value})
  }
//  for submitting data:
  const[name1, setname]=useState("")
  const [txtarea,settxtarea] = useState("")
  const [selectt,setselect] = useState("")
  const [radiio,setradio] = useState("")
  const sub = (e) =>{
    e.preventDefault()
   alert(`${name1} , ${txtarea}  , ${selectt} , ${radiio}`)
   console.log(txtarea)
  }


  const fn =(e)=>{
    setfname(e.target.value)
  }
   const ln =(e)=>{
    setlname(e.target.value)
  }

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

  const changedata = ()=>{
    newbrand("BMW")
    newcolor("black")
    newmodel("--")
    newyear("2019")
  }

  const changeimages = ()=>{
    const narr = Math.floor(Math.random()* arrOfImage.length)
    setpic(arrOfImage[narr])
  }
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

      {/* Task - 4 */}
      <h2> Task - 4 </h2>
      <button onClick={changedata}>change data</button>
      <p> My {oldbrand}. It is  a {oldcolor} {oldmodel} from {oldyear}.</p>

      {/* RTask 5 */}
      <h2>Task 5</h2>
      <button onClick={changeimages}>change image</button>
      <img src={pic} height="50" width="80" alt="" />


      {/* Task 6 */}
      <h2> Task 6 </h2>
      <input type="text"  name="fname" value={fname} onChange={fn} />
       <input type="text"  name="lname" value={lname} onChange={ln} />
       <h2> {fname} : {lname}</h2>

       <h2>Input data from alternate method</h2>
       <input type="text"  name="fname"  onChange={changemydata} />
       <input type="text"  name="lname"  onChange={changemydata} />
       <h2> firstname  : {data.fname}</h2>
        <br /><br />
        lastname : {data.lname}

        <form action="get" onSubmit={sub}>
          <h2> Task 6 using form on submit </h2>
      
       <input type="text"  name="fname"  onChange={(e)=>{setname(e.target.value)}} />
      <textarea type="text"  name="fname"  onChange={(e)=>{settxtarea(e.target.value)}} />
        <select  id="" onChange={(e)=>{setselect(e.target.value)}}>
          <option value="india" onChange={(e)=>{setselect(e.target.value)}}>India</option>
          <option value="pakistan" >pakistan</option>
          <option value="nepal">Nepal</option>
        </select>
        <input type="radio" name="gender"  value ="male" onChange={(e)=>{setradio(e.target.value)}} />male
       {/* <h2> Username  : </h2> */}
        
        <button type="submit">Submit</button>
        </form>
    </>
  );
}
