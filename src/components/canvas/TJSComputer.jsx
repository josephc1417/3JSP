import {Suspense,useEffect, useState } from 'react'

import {Canvas} from '@react-three/fiber';

import {OrbitControls,Preload,useGLTF} from '@react-three/drei'; 
import CanvasLoader from '../Loader'; 

/**
*! COMPONENT-IMPORTS 
** { Canvas } - A canvas platform that allows you to place something on the canvas and manipulate it  
** { OrbitControls, Preload, useGLTF } - These hand utility function-import's (helpers) will assist with drawling on the canvas platform
** { useGLTF } - is essential mainly due to the fact that it allows us to import 3d models 
*/


/**
*! Why <mesh> element-(not self-closing) instead of typical <div> element ? 
** The  <mesh>  element is a (component) thats provided by (React Three Fiber)
** A <mesh> represents a 3D Mesh OBJ.In general, its a collection of points, edges and faces that ultimately define the shape of an (3D OBJ) 
** Its used to render complex 3D models in a web application*
**/

/**
*! ABOUT: {useGLTF}  &&  (.gltf)-File Extension
** (GLTF) - Graphics Library Transmission Format (file format used for 3D scenes and models) 
** (scene.gltf) - This is typically a file that contains a 3D scene. FILE CONTENTS: objects,animations, and other materials that typically compose a 3D environment  
** (GLTF)  - Files are based on JSON so we can (parse) and  we're good to go! 
** {useGLTF} - This is a custom hook provided by the { @react-three/drei } package, which is a collection of useful helpers and abstractions for working with Three.js in a React application.
** {useGLTF}-Purpose: This hook simplifies the process of loading 3D models in the GLTF (Graphics Library Transmission Format) file format, which is a popular format for 3D models due to its compact size and versatility.
**{useGLTF}-Usage: By using useGLTF, you can easily load a GLTF model into your Three.js scene. It handles the asynchronous loading process and provides you with the necessary data to integrate the model into your application.
**/



const TJSComputer = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  
  return (
    <mesh>
      
      {/* <hemisphere/> Provides lighting so that we can see the 3D obj we want to render */}
      <hemisphereLight intensity={0.15} groundColor ="black"/>

      /**
      ** (pointLight) is a light source that emits light from a specific point in 3D space 
      ** (pointLight) illuminates the 3D OBJ equally from all sides which creates this realistic lighting effect  
      */
      <pointLight intensity={1}/>
      
      /**
      ** (primitive) is a (RTF component) thats used for rendering low-level 3D OBJ's and geometries 
      ** (primitive) we can use this component to directly  use (three.js) geometries and materials within React (super cool!)  
      ** (primitive) 
      */
      <primitive
        object = {computer.scene}
      />
    </mesh>
  )
}

/**
 *! ADD ADDITIONAL COMPONENT 
*/

const ComputerCanvas = () => {
  return(
    <Canvas
      frameLoop = 'demand'
      shadows 
      camera = {{ position:[20,3,5],fov:50 }}
      gl = {{ preserverDrawingBuffer:true }}
    >
      /**
       ** (gl) - was needed to properly render the 3D image
       ** (Suspense) allows us to have a loader while the image is loading 
       ** (OrbitControl) Allows us to view the 3D image from the left and right viewing angles
      */   
      
       <Suspense fallback = {<CanvasLoader />}>
        <OrbitControls
          enableZoom = {false}
          maxPolarAngle = {Math.PI / 2}
          minPolarAngle = {Math.PI / 2}
          enablePan = {false}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
    

    /**
    *! TODO
    ** INSTALL THREE.JS DEPENDENCIES (CLI)  
    ** RESET VITE (npm run dev) 
    */
   
    )
}
export default TJSComputer

