import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Environment } from "@react-three/drei";
import { Suspense } from "react";
import Tesla from "./Tesla";

import "./VehicleViewer.scss";

function Loader() {
  return (
    <Html center>
      <img
        src="/spinner.gif"
        alt="Loading"
        style={{ width: "128px", height: "128px" }}
      />
    </Html>
  );
}

export default function VehicleViewer() {
  return (
    <div className="vehicle-viewer">
      <Canvas
        camera={{ position: [2.8, 2.1, 2.8], fov: 50 }}
        gl={{ toneMappingExposure: 1 }}
        onCreated={({ scene }) => {
          scene.environmentIntensity = 0.2;
        }}
      >
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 8, 5]} intensity={0.3} />
        <directionalLight position={[-5, 3, -5]} intensity={0.3} />
        <Suspense fallback={<Loader />}>
          <Tesla />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
