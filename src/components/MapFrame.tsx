import type { ReactNode } from "react";

export function MapFrame({ children }: { children: ReactNode }) {
  return (
    <div className="map-frame">
      <div aria-hidden className="map-frame-edge map-frame-edge-t" />
      <div aria-hidden className="map-frame-edge map-frame-edge-b" />
      <div aria-hidden className="map-frame-edge map-frame-edge-l" />
      <div aria-hidden className="map-frame-edge map-frame-edge-r" />
      <div aria-hidden className="map-frame-corner map-frame-corner-tl" />
      <div aria-hidden className="map-frame-corner map-frame-corner-tr" />
      <div aria-hidden className="map-frame-corner map-frame-corner-bl" />
      <div aria-hidden className="map-frame-corner map-frame-corner-br" />
      <div className="map-frame-inner">{children}</div>
    </div>
  );
}
