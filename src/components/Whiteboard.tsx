import React, { useRef, useEffect, useState } from "react";
import Toolbar from "./Toolbar";

const Whiteboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState("black");
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState("brush");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let drawing = false;

    const startDrawing = (event: MouseEvent) => {
      drawing = true;
      draw(event);
    };

    const endDrawing = () => {
      drawing = false;
      context.beginPath();
    };

    const draw = (event: MouseEvent) => {
      if (!drawing) return;

      context.lineWidth = brushSize;
      context.lineCap = "round";
      context.strokeStyle = tool === "eraser" ? "white" : color;

      context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", endDrawing);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", endDrawing);
      canvas.removeEventListener("mousemove", draw);
    };
  }, [color, brushSize, tool]);

  return (
    <div>
      <Toolbar setColor={setColor} setBrushSize={setBrushSize} setTool={setTool} />
      <canvas ref={canvasRef} width={800} height={600} className="border" />
    </div>
  );
};

export default Whiteboard;