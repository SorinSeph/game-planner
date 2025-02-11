<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
// Import side-effect modules first
import "@babylonjs/core/Culling/ray";
import "@babylonjs/core/Materials/standardMaterial";

=======
//// filepath: /c:/Users/Elena/Documents/game-planner/src/components/game-planner/game-planner.tsx
import React, { useEffect, useRef, useState } from "react";
import "@babylonjs/core/Culling/ray";
import "@babylonjs/core/Materials/standardMaterial";
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { ArcRotateCameraPointersInput } from "@babylonjs/core/Cameras/Inputs/arcRotateCameraPointersInput";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Engine } from "@babylonjs/core/Engines/engine";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
<<<<<<< HEAD
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
=======
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Curve3 } from "@babylonjs/core/Maths/math.path";
import { Color4 } from "@babylonjs/core/Maths/math.color";
import { Color3 } from "@babylonjs/core/Maths/math.color";
import { Matrix } from "@babylonjs/core/Maths/math";
import { PointerDragBehavior } from "@babylonjs/core/Behaviors/Meshes/pointerDragBehavior";
import { ActionManager } from "@babylonjs/core/Actions/actionManager";
import { ExecuteCodeAction } from "@babylonjs/core/Actions/directActions";
import * as GUI from "@babylonjs/gui";
import { GroundMesh } from "babylonjs";

const GamePlanner: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sphereRef = useRef<Mesh | null>(null);
    const [inputText, setInputText] = useState("Hello there");
    const buttonRef = useRef<GUI.Button | null>(null);
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade

    useEffect(() => {
        if (!canvasRef.current) return;

<<<<<<< HEAD
        const engine = new Engine(canvasRef.current, true);
        const scene = new Scene(engine);

        // Setup Camera
        const camera = new ArcRotateCamera("camera1", 0, 0, 10, Vector3.Zero(), scene);
=======
        const engine: Engine = new Engine(canvasRef.current, true);
        const scene: Scene = new Scene(engine);
        scene.clearColor = new Color4(25 / 255, 30 / 255, 80 / 255, 1);

        // Setup Camera
        const camera: ArcRotateCamera = new ArcRotateCamera(
            "camera1",
            0,
            0,
            10,
            Vector3.Zero(),
            scene
        );
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
        camera.attachControl(canvasRef.current, true);
        camera.wheelPrecision = 5;
        camera.inputs.removeByType("ArcRotateCameraPointersInput");

        // Custom Pointer Input
<<<<<<< HEAD
        const customPointerInput = new ArcRotateCameraPointersInput();
        customPointerInput.buttons = [1, 2]; // Middle and Right mouse buttons
        camera.inputs.add(customPointerInput);

        // Lighting
        const light = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);

        // Ground Meshes
        const groundMat = new StandardMaterial("groundMat", scene);
=======
        const customPointerInput: ArcRotateCameraPointersInput = new ArcRotateCameraPointersInput();
        customPointerInput.buttons = [1, 2];
        camera.inputs.add(customPointerInput);

        // Lighting
        const light: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);

        // Ground Meshes
        const groundMat: StandardMaterial = new StandardMaterial("groundMat", scene);
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
        groundMat.diffuseColor = new Color3(1, 0, 0);

        const ground = MeshBuilder.CreateGround("ground1", { width: 6, height: 6 }, scene);
        ground.material = groundMat;

        const groundMat2 = new StandardMaterial("groundMat2", scene);
        groundMat2.diffuseColor = new Color3(1, 0, 0);

        const ground2 = MeshBuilder.CreateGround("ground2", { width: 6, height: 6 }, scene);
        ground2.material = groundMat2;
<<<<<<< HEAD
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
=======
        ground2.position = new Vector3(10, 5, 0);

        // Create sphere and attach it to ground.
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
        sphere.position = new Vector3(0, 0, 3);
        sphere.parent = ground;
        sphereRef.current = sphere;
        console.log("Sphere position is: ", sphere.position);
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade

        // Metadata for Ray Picking
        scene.getMeshByName("ground1")!.metadata = "ground1";

        // GUI Setup
        const plane = MeshBuilder.CreatePlane("plane", { size: 2 }, scene);
        plane.position.y = 2;
<<<<<<< HEAD

        const advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh(plane);

=======
        const advancedTexture = GUI.AdvancedDynamicTexture.CreateForMesh(plane);
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
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
<<<<<<< HEAD

        // Reference the button for later updates
=======
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
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
<<<<<<< HEAD
                groundMat.diffuseColor = new Color3(0, 1, 0); // Change ground to green
                console.log("debug");
            } else {
=======
                groundMat.diffuseColor = new Color3(0, 1, 0);
                // Re‑enable the ground drag behavior when the ground is picked.
                groundDragBehavior.enabled = true;
                console.log("Ground picked: drag enabled");
            } else {
                groundMat.diffuseColor = new Color3(1, 0, 0);
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
                console.log("no hit");
            }
        };

<<<<<<< HEAD
=======
        /**
         * Code section of attachint bezier to sphere
         * (For reference; not modified as part of this change)
         */
        /**
        * Code section of attachint bezier to sphere
        */
        // // Initial creation of the cubic bezier curve (make sure it's updatable)
        // let cubicBezierVectors = Curve3.CreateCubicBezier(
        //     sphere.getAbsolutePosition(), // use getAbsolutePosition() for the origin
        //     new Vector3(0, 0, 5),
        //     new Vector3(-10, 0, 7),
        //     new Vector3(-10, 0, 12),
        //     60
        // );
        // const initialPoints = cubicBezierVectors.getPoints();
        // const positions = [];
        // initialPoints.forEach((pt) => {
        //     positions.push(pt.x, pt.y, pt.z);
        // });
        // var cubicBezierCurve = MeshBuilder.CreateLines(
        //     "cbezier",
        //     { points: initialPoints, updatable: true },
        //     scene
        // );
        // cubicBezierCurve.color = new Color3(1, 0.6, 0);

        // // In the render loop, update the curve's vertex data based on the ground's current position
        // scene.registerBeforeRender(() => {
        //     // Get the ground's updated absolute position
        //     const attachPoint1 = sphere.getAbsolutePosition();
        //     const controlPoint1 = new Vector3(0, 0, attachPoint1.z + 3);
        //     const controlPoint2 = new Vector3(-10, 0, 7);
        //     const attachPoint2 = new Vector3(-10, 0, 12);

        //     // Recreate the cubic bezier curve using the updated origin
        //     cubicBezierVectors = Curve3.CreateCubicBezier(
        //         attachPoint1,
        //         controlPoint1,
        //         controlPoint2,
        //         attachPoint2,
        //         60
        //     );
        //     const newPoints = cubicBezierVectors.getPoints();
        //     const newPositions: number[] = [];
        //     newPoints.forEach(pt => {
        //         newPositions.push(pt.x, pt.y, pt.z);
        //     });
        //     cubicBezierCurve.updateVerticesData("position", newPositions);
        // });

        // Set up the ground drag behavior.
        const groundDragBehavior = new PointerDragBehavior({ dragPlaneNormal: new Vector3(0, 1, 0) });
        // groundDragBehavior.name = "groundDrag"; // Removed because 'name' is a read-only property
        ground.addBehavior(groundDragBehavior);

        // Attach an ActionManager to the sphere to disable ground dragging when sphere is picked.
        sphere.actionManager = new ActionManager(scene);
        sphere.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPickDownTrigger, () => {
                groundDragBehavior.enabled = false;
            })
        );
        sphere.actionManager.registerAction(
            new ExecuteCodeAction(ActionManager.OnPickUpTrigger, () => {
                groundDragBehavior.enabled = true;
            })
        );

>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
        // Render Loop
        engine.runRenderLoop(() => {
            scene.render();
        });

<<<<<<< HEAD
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
=======
        return () => {
            engine.dispose();
        };
    }, [inputText]);

    // A separate hook to continuously log the sphere's position.
    useEffect(() => {
        const interval = setInterval(() => {
            if (sphereRef.current) {
                console.log("Current sphere position:", sphereRef.current.position);
            }
        }, 33); // roughly 30 times per second (33ms)
        return () => clearInterval(interval);
    }, []);

    // Update the GUI button text whenever inputText changes.
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
    useEffect(() => {
        if (buttonRef.current && buttonRef.current.textBlock) {
            buttonRef.current.textBlock.text = inputText;
        }
    }, [inputText]);

<<<<<<< HEAD
    // Handle Text Area Input Change
=======
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
<<<<<<< HEAD
            {/* Text Area Input */}
=======
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
            <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your button text here..."
<<<<<<< HEAD
                style={{ width: "300px", height: "100px", marginBottom: "20px" }}
            />

            {/* Babylon.js Canvas */}
=======
                style={{ width: "300px", height: "100px", marginBottom: "20px", resize: "none" }}
            />
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
            <canvas
                ref={canvasRef}
                style={{ width: "800px", height: "600px", border: "1px solid black" }}
            ></canvas>
        </div>
    );
};

export default GamePlanner;