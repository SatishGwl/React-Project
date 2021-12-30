import React from 'react'
import './style.css';

const UseState = () => {
    const initialData = 15;
    const [myNum, setmyNum] = React.useState(initialData)
    // console.log('===changesetmyNumValue===', setmyNum);
    console.log('===now its current value of myNum===', myNum);
    return (
        <>
            <div className="center_div">
    <p>{myNum}</p>
                <div className="button2" onClick = {() => setmyNum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Increment
                </div>
                <div className="button2" onClick = {() => (myNum > 0) ?  setmyNum(myNum-1) : setmyNum(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Decrement
        </div>
            </div>
        </>
    )
}

export default UseState
