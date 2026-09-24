import type { ReactNode } from "react";
import frameOrnament from "@/assets/gold-ornament-frame.jpg.asset.json";

export function MapFrame({ children }: { children: ReactNode }) {
  return (
    <div className="map-frame">
      <div aria-hidden className="map-frame-edge map-frame-edge-t">
        <img src={frameOrnament.url} alt="" />
      </div>
      <div aria-hidden className="map-frame-edge map-frame-edge-b">
        <img src={frameOrnament.url} alt="" />
      </div>
      <div aria-hidden className="map-frame-edge map-frame-edge-l">
        <img src={frameOrnament.url} alt="" />
      </div>
      <div aria-hidden className="map-frame-edge map-frame-edge-r">
        <img src={frameOrnament.url} alt="" />
      </div>
      <div className="map-frame-inner">{children}</div>
    </div>
  );
}
