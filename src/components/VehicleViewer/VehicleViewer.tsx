import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tesla from "./Tesla";

import "./VehicleViewer.scss";

export default function VehicleViewer() {
  return (
    <div className="vehicle-viewer">
      <Canvas camera={{ position: [2.8, 2.1, 2.8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Tesla />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
