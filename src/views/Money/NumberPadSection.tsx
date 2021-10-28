import React, {useState} from "react";
import {NumberPadWrapper} from "./NumberPad/NumberPadWrapper";



const NumberPadSection = () => {
    const [output, setOutput] = useState('0')
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text == null) {
            return null;
        }

    }
    return (
        <NumberPadWrapper>
            <div className="output">

            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </NumberPadWrapper>
    );
}

export {NumberPadSection};