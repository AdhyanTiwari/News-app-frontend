import React, { useState } from 'react'

function Alert(props) {
    const [state, setstate] = useState(true);
    setTimeout(() => {
        setstate(false)
    }, 2000);
    return (
        <div className='pt-5 fixed-top'>
            {state ? <div role="alert" className={"alert alert-" + props.color} >
                {props.msg}
            </div> : ""
            }
        </div >
    )
}

export default Alert