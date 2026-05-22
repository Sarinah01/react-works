// Create a component to perform the tasks as described below:

// 1. Add a text field and a submit button.

// - While changing the value in the text field, display it below the form.

// - Display this text field value in an alert box upon submitting it.

 
function Ev(){
    const os = (e)=>{
        e.preventDefault()
        alert(
        document.getElementById('c').value
        )
    }

    const ocl = ()=>{
        document.getElementById('b').innerHTML="Clcikede on one timeee"
    }
    const och=(e)=>{
        document.getElementById('a').innerHTML=e.target.value
    }
    const odl = ()=>{
        document.getElementById('b').innerHTML="clicked two timesss"
    }
    return(
        <>
        <form onSubmit={os}>\
            <input type="text"  id="c" onChange={och}/> enter name:
            <br /><br />

            <input type="submit" />
        </form>
        <h1 id="a">event- Demo 1</h1>
        <button onClick={ocl} onDoubleClick={odl}>Click/Double click button</button>
        <h1 id="b"> Clcik /double click demoo</h1>
        </>
    )
}


export default Ev