import React from 'react'
import Box from './Box'

const BoxDisplay = (props) => {
    const {boxState} = props
    
    return (
        <div className="flex">
            {
                boxState.map((colors, i) => <Box key={i} box={colors} />)
            }
        </div>
    )}

export default BoxDisplay