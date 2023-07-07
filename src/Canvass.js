import { Canvas } from "canvas";
import { useRef, useEffect } from "react";

export default function Canvass(props){
    const canvasRef = useRef(null)
    // const canvas = canvasRef.current
    // const context = canvas.getContext('2d')

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //first draw
        context.fillstyle = '#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])
    

    return <canvas ref={canvasRef} {...props}/>
};