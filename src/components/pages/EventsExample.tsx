import React, {FC, useRef, useState} from 'react';

const EvaentsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    const clickRefHanlder = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP!!!!!')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder="Управляемый"/>
            <button onClick={clickHandler}>Click!</button>
            <br/>
            <input type="text" ref={inputRef} placeholder="Неправляемый"/>
            <button onClick={clickRefHanlder}>ClickRef!</button>

            <div draggable onDrag={dragHandler} style={{width: 200, height:200, background: "lightgreen"}}></div>
            <div onDrop={dropHandler}
                 onDragLeave={leaveHandler}
                 onDragOver={dragWithPreventHandler}
                 style={{width: 200, height:200, background: isDrag ? "red" : "gray"}}></div>
        </div>
    );
};

export default EvaentsExample;
