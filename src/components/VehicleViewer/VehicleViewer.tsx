import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Environment } from "@react-three/drei";
import { useEffect } from "react";
import { Suspense } from "react";
import Tesla from "./Tesla";

import "./VehicleViewer.scss";

function SceneEnvironment({ intensity }: { intensity: number }) {
  const { scene } = useThree();
  useEffect(() => {
    scene.environmentIntensity = intensity;
  }, [scene, intensity]);
  return <Environment preset="studio" />;
}

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
        gl={{ toneMappingExposure: 0.3 }}
      >
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.05} />
        <directionalLight position={[5, 8, 5]} intensity={0.3} />
        <directionalLight position={[-5, 3, -5]} intensity={0.3} />
        <Suspense fallback={<Loader />}>
          <Tesla />
          <SceneEnvironment intensity={0.2} />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
