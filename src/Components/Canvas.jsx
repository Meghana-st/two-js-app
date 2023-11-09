import React, { useEffect, useRef } from "react";
import Two from "two.js";
import { Anchor } from "two.js/src/anchor";

export default function Canvas() {

  const canvasRef = useRef(null);

  useEffect(() => {
    console.log(1);
    if(canvasRef.current)
    {
      console.log(2)
    const two = new Two({
      width: 640,
      height: 360,
      type: Two.Types.webgl,
    }).appendTo(canvasRef.current);

    const circle = two.makeCircle(100, 100, 50);
    circle.fill = 'transparent';
    circle.stroke = 'black';
    circle.linewidth = 2;

    const line = two.makeLine(200,100,250,50);
    line.stroke = 'black';
    line.linewidth = 2;

    const rect = two.makeRectangle(100,200, 100, 50);
    rect.stroke = 'black';
    rect.linewidth = 2;

    const ellipse = two.makeEllipse(250,150, 50, 30);
    ellipse.stroke = 'black';
    ellipse.linewidth = 2;

    const polygon = two.makePolygon(100, 300, 50, 5);
    polygon.stroke = 'black';
    polygon.linewidth = 2;

    const arc = two.makeArcSegment(250, 350, 50 ,0,Math.PI);
    arc.stroke = 'black';
    arc.linewidth = 2;

    const points = two.makePoints(180,100,200,200);
    points.stroke = 'black';
    points.linewidth = 2;

    const text = two.makeText("Test text...", 300, 100);
    text.stroke = 'black';
    text.size=24;

    // const curve = two.makeCurve(250,200,300,300)

    // const openPolygon = two.makePath([100,100,200,100,200,200], false,false);
    // points.openPolygon = 'black';
    // points.openPolygon = 2;

    const roundedRect = two.makeRoundedRectangle(500, 100, 200, 100, 50);

    roundedRect.fill = 'transparent';
    roundedRect.stroke = 'black';
    roundedRect.linewidth = 2;

    const controlPoints = [
      new Two.Anchor(400, 300),
      new Two.Anchor(450, 200),
      new Two.Anchor(500, 300),
      new Two.Anchor(550, 200),
      new Two.Anchor(600, 300),
    ];

    const polyline = two.makePath(controlPoints, false, false, true);

    polyline.stroke = 'black'; 
    polyline.linewidth = 2; 
    polyline.fill = 'transparent'; 

    const shapes =[];
    let selectedShape;
    shapes.push(circle, line, rect, ellipse, polygon, arc, points, text, roundedRect, polyline);

    shapes.map((shape) => {

      // shape._renderer.elem.addEventListener('mousedown', (event) => {
      //     selectedShape = shape;
      //     isDragging = true;
      //   });
    //  console.log(shape);
      shape.addEventListener('mousedown', (event) => {
        selectedShape = shape;
        console.log("mousedown");
      });

      shape.addEventListener('mouseup', (event) => {
        selectedShape = null;
        console.log("mouseup");
      });

      shape.addEventListener('mousemove', (event) => {
        console.log(event);
        if(selectedShape === shape)
        {
          shape.translation.set(event.x, event.y);
        }
        console.log("drag");
      });
    });

    // two.renderer.domElement.addEventListener('mousemove', (event) => {
    //   console.log('Mouse moved over the canvas');
    // });

    two.update();

    return () => {
      two.clear();
    };
  }
  }, []);
  console.log()
  return (
    <div ref={canvasRef} style={{ border: '2px solid black' }}>
      
    </div>
  );
}
