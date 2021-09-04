import React from 'react'

const Box = (props) => {
    const {box} = props

    const style = {
        'backgroundColor': box.color,
        'width': box.width + "px",
        'height': box.height + "px",
        'margin': '15px'
    }

    return (
        <div style={style}></div>
    )
}

export default Box
