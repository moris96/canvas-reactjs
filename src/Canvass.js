// import { Canvas } from "canvas";
import { useRef, useEffect } from "react";

export default function Canvass(props){
    const canvasRef = useRef(null)
  
    const draw = (ctx, frameCount) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillStyle = '#000000'
      ctx.beginPath()
      ctx.arc(50, 100, 20*Math.sin(frameCount*0.01)**2, 0, 2*Math.PI)
      ctx.fill()
    }
    
    useEffect(() => {
      
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      let frameCount = 0
      let animationFrameId
      
      //Our draw came here
      const render = () => {
        frameCount++
        draw(context, frameCount)
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
      
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }, [draw])
    
    return <canvas ref={canvasRef} {...props}/>
};