import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tesla from "./Tesla";

import "./VehicleViewer.scss";

// BoxGeometry face order: right(0), left(1), top(2), bottom(3), front(4), back(5)
// const FACE_TO_PANEL: Record<number, CarPanel> = {
//   0: "front-right-fender",
//   1: "front-left-fender",
//   2: "roof",
//   3: "front-bumper",
//   4: "hood",
//   5: "trunk",
// };

// const COLOUR_MAP: Record<string, string> = {
//   white: "#f0f0f0",
//   black: "#1a1a1a",
//   silver: "#a8a9ad",
//   red: "#cc2020",
//   blue: "#1d4ed8",
// };
// const FALLBACK_COLOR = "#aa3bff";
// const SELECTED_COLOR = "#22c55e";
// const CLICK_THRESHOLD_MS = 200;
// const CLICK_THRESHOLD_PX = 4;

//function Cube() {
// const damagedPanels = useDamageStore((s) => s.damagedPanels);
// const toggleDamage = useDamageStore((s) => s.toggleDamage);
// const colour = usePolicyStore((s) => s.colour);
// const defaultColor = COLOUR_MAP[colour] ?? FALLBACK_COLOR;
// const pointerDown = useRef<{ x: number; y: number; time: number } | null>(
//   null,
// );
// const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
//   e.stopPropagation();
//   pointerDown.current = { x: e.clientX, y: e.clientY, time: Date.now() };
// };
// const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
//   e.stopPropagation();
//   if (!pointerDown.current || e.faceIndex == null) return;
//   const dx = Math.abs(e.clientX - pointerDown.current.x);
//   const dy = Math.abs(e.clientY - pointerDown.current.y);
//   const dt = Date.now() - pointerDown.current.time;
//   pointerDown.current = null;
//   if (
//     dt > CLICK_THRESHOLD_MS ||
//     dx > CLICK_THRESHOLD_PX ||
//     dy > CLICK_THRESHOLD_PX
//   )
//     return;
//   const face = Math.floor(e.faceIndex / 2);
//   const panel = FACE_TO_PANEL[face];
//   if (panel) toggleDamage(panel);
// };
// return (
//   // <mesh onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
//   //   <boxGeometry args={[2, 2, 2]} />
//   //   {Object.entries(FACE_TO_PANEL).map(([face, panel]) => (
//   //     <meshStandardMaterial
//   //       key={face}
//   //       attach={`material-${face}`}
//   //       color={damagedPanels.has(panel) ? SELECTED_COLOR : defaultColor}
//   //     />
//   //   ))}
//   // </mesh>
// );
//}

export default function VehicleViewer() {
  return (
    <div className="vehicle-viewer">
      <Canvas camera={{ position: [2.8, 2.1, 2.8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {/* <Cube /> */}
        <Tesla />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
