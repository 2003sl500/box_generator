import React, {useState} from "react";

const Form = (props) => {

    const [colorState, setColorState] = useState("")
    const [widthState, setWidthState] = useState("")
    const [heightState, setHeightState] = useState("")
    const {addBox} = props
    
    const submitHandler = (e) => {
        e.preventDefault()
        addBox({
            "color": colorState,
            "width": widthState,
            "height": heightState
        })
        setColorState("")
        setWidthState("")
        setHeightState("")
    }

    return (
        <div
            style={{
                width: "330px",
                margin: "0px auto",
            }}
        >
            <div
                style={{
                    padding: "10px",
                }}
            >
                <form onSubmit={submitHandler}>
                    <br />
                    <div id="grid">
                        <div id="item1">
                    <label style={{ padding: "10px" }} htmlFor="color">
                        Color
                    </label>
                        </div>
                        <div id="item2">
                    <input onChange={(e) => setColorState(e.target.value)} type="text" name="color" id="color" value={colorState}/>
                        </div>

                    <div id="item3">
                    <label style={{ padding: "10px" }} htmlFor="width">
                        Width
                    </label>
                    </div>
                    <div id="item4">
                    <input onChange={(e) => setWidthState(e.target.value)} type="text" name="width" id="width" value={widthState}/>
                    </div>
                  
                    <div id="item5">
                    <label style={{ padding: "10px" }} htmlFor="height">
                        Height
                    </label>
                    </div>
                    <div id="item6">
                    <input onChange={(e) => setHeightState(e.target.value)} type="text" name="height" id="height" value={heightState}/>
                    </div>

                    <div id="item7">
                    <input
                        style={{ marginLeft: "10px" }}
                        type="submit"
                        value="Add"
                    />
                    </div>
                    </div>
                </form>
            </div>
            <br />
            <br />
        </div>
    );
};

export default Form;
