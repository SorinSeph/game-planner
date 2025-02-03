import React, { useEffect, useRef, useState } from "react";
// Import side-effect modules first
import "@babylonjs/core/Culling/ray";
import "@babylonjs/core/Materials/standardMaterial";

import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { ArcRotateCameraPointersInput } from "@babylonjs/core/Cameras/Inputs/arcRotateCameraPointersInput";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Engine } from "@babylonjs/core/Engines/engine";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Curve3 } from "@babylonjs/core/Maths/math.path";
import { Color3 } from "@babylonjs/core/Maths/math.color";
import { Matrix } from "@babylonjs/core/Maths/math";
import * as GUI from "@babylonjs/gui";

const GamePlanner: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [inputText, setInputText] = useState("Hello there");
    const buttonRef = useRef<GUI.Button | null>(null); // Reference to the GUI button

    useEffect(() => {
        if (!canvasRef.current) return;

        const engine = new Engine(canvasRef.current, true);
        const scene = new Scene(engine);

        // Setup Camera
        const camera = new ArcRotateCamera("camera1", 0, 0, 10, Vector3.Zero(), scene);
        camera.attachControl(canvasRef.current, true);
        camera.wheelPrecision = 5;
        camera.inputs.removeByType("ArcRotateCameraPointersInput");

        // Custom Pointer Input
        const customPointerInput = new ArcRotateCameraPointersInput();
        customPointerInput.buttons = [1, 2]; // Middle and Right mouse buttons
        camera.inputs.add(customPointerInput);

        // Lighting
        const light = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);

        // Ground Meshes
        const groundMat = new StandardMaterial("groundMat", scene);
        groundMat.diffuseColor = new Color3(1, 0, 0);

        const ground = MeshBuilder.CreateGround("ground1", { width: 6, height: 6 }, scene);
        ground.material = groundMat;

        const groundMat2 = new StandardMaterial("groundMat2", scene);
        groundMat2.diffuseColor = new Color3(1, 0, 0);

        const ground2 = MeshBuilder.CreateGround("ground2", { width: 6, height: 6 }, scene);
        ground2.material = groundMat2;
        ground2.position = new Vector3(10, 5, 0); // Move ground2 to position (10, 5, 0)

        // Cubic Bezier Curve
        const cubicBezierVectors = Curve3.CreateCubicBezier(
            Vector3.Zero(),
            new Vector3(0, 0, 5),
            new Vector3(-10, 0, 7),
            new Vector3(-10, 0, 12),
            60
        );
        const cubicBezierCurve = MeshBuilder.CreateLines("cbezier", { points: cubicBezierVectors.getPoints() }, scene);
        cubicBezierCurve.color = new Color3(1, 0.6, 0);

        // Metadata for Ray Picking
        scene.getMeshByName("ground1")!.metadata = "ground1";

        // GUI Setup
        const plane = MeshBuilder.CreatePlane("plane", { size: 2 }, scene);
        plane.position.y = 2;

        const advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh(plane);

        const button1 = GUI.Button.CreateSimpleButton("but1", inputText);
        button1.width = 1;
        button1.height = 0.4;
        button1.color = "white";
        button1.fontSize = 50;
        button1.background = "green";
        button1.onPointerUpObservable.add(() => {
            alert("You did it!");
        });
        advancedTexture.addControl(button1);

        // Reference the button for later updates
        buttonRef.current = button1;

        // Ray Picking
        scene.onPointerDown = () => {
            const ray = scene.createPickingRay(
                scene.pointerX,
                scene.pointerY,
                Matrix.Identity(),
                camera,
                false
            );
            const hit = scene.pickWithRay(ray);
            if (hit?.pickedMesh?.metadata === "ground1") {
                groundMat.diffuseColor = new Color3(0, 1, 0); // Change ground to green
                console.log("debug");
            } else {
                console.log("no hit");
            }
        };

        // Render Loop
        engine.runRenderLoop(() => {
            scene.render();
        });

        // Handle Resize
        window.addEventListener("resize", () => {
            engine.resize();
        });

        // Cleanup on Unmount
        return () => {
            engine.dispose();
        };
    }, []);

    // Update the GUI button text whenever inputText changes
    useEffect(() => {
        if (buttonRef.current && buttonRef.current.textBlock) {
            buttonRef.current.textBlock.text = inputText;
        }
    }, [inputText]);

    // Handle Text Area Input Change
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Text Area Input */}
            <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your button text here..."
                style={{ width: "300px", height: "100px", marginBottom: "20px" }}
            />

            {/* Babylon.js Canvas */}
            <canvas
                ref={canvasRef}
                style={{ width: "800px", height: "600px", border: "1px solid black" }}
            ></canvas>
        </div>
    );
};

export default GamePlanner;