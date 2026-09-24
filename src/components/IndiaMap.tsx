import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, GeoJSON, useMap, Marker, Tooltip } from "react-leaflet";
import L, { type Layer, type PathOptions } from "leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import "leaflet/dist/leaflet.css";
import indiaGeo from "@/data/india.geojson?url";
import { jewelryData, type RegionGroup } from "@/data/jewelry";
import { RegionSearch } from "@/components/RegionSearch";
import ornateMapFrame from "@/assets/ornate-map-frame.png.asset.json";

interface Props {
  activeGroup: RegionGroup;
  onSelect: (regionKey: string) => void;
  onGroupChange?: (group: RegionGroup) => void;
}

const GOLD = "#C8A050";
const GOLD_DEEP = "#5C3D1A";
const BORDER = "#C8A96E";
const INK = "#2C1A0A";
const DIM = "#F5EDD8";

const ISLAND_COORDS: Record<string, [number, number]> = {
  Lakshadweep: [9.99, 72.9],
  "Andaman and Nicobar": [10.85, 93.24],
};

function FitToFeatures({ data, boundsKey }: { data: FeatureCollection | null; boundsKey: string }) {
  const map = useMap();
  useEffect(() => {
    if (!data || !data.features.length) return;
    const layer = L.geoJSON(data);
    const b = layer.getBounds();
    if (b.isValid()) map.fitBounds(b, { padding: [20, 20] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boundsKey]);
  return null;
}

function FlyToRegion({
  regionKey,
  geo,
  onDone,
}: {
  regionKey: string | null;
  geo: FeatureCollection | null;
  onDone: () => void;
}) {
  const map = useMap();
  useEffect(() => {
    if (!regionKey || !geo) return;
    // Fly to the real island polygons so their original shapes are visible
    const feature = geo.features.find(
      (f) => (f.properties as { NAME_1?: string })?.NAME_1 === regionKey,
    );
    if (!feature) return;
    const layer = L.geoJSON(feature);
    const b = layer.getBounds();
    if (b.isValid()) {
      map.flyToBounds(b, { padding: [40, 40], maxZoom: 8, duration: 0.9 });
      const t = setTimeout(onDone, 950);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regionKey]);
  return null;
}

export function IndiaMap({ activeGroup, onSelect, onGroupChange }: Props) {
  const [geo, setGeo] = useState<FeatureCollection | null>(null);
  const [focusRegion, setFocusRegion] = useState<string | null>(null);
  const layerRef = useRef<L.GeoJSON | null>(null);

  useEffect(() => {
    fetch(indiaGeo)
      .then((r) => r.json())
      .then((d: FeatureCollection) => setGeo(d));
  }, []);

  const styleFor = (feature?: Feature<Geometry, { NAME_1?: string }>): PathOptions => {
    const name = feature?.properties?.NAME_1 ?? "";
    const info = jewelryData[name];
    const isActive = info?.group === activeGroup;
    const isIsland = info?.group === "island";
    return {
      color: isActive ? GOLD_DEEP : BORDER,
      weight: isActive ? 0.8 : isIsland ? 0.7 : 0.4,
      fillColor: isActive ? GOLD : isIsland ? "#E0D0A4" : DIM,
      fillOpacity: isActive ? 0.35 : isIsland ? 0.55 : 0.18,
    };
  };

  // Re-style when group changes
  useEffect(() => {
    layerRef.current?.setStyle(styleFor as L.StyleFunction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGroup, geo]);

  const onEach = (feature: Feature<Geometry, { NAME_1?: string }>, layer: Layer) => {
    const name = feature.properties?.NAME_1 ?? "";
    const info = jewelryData[name];
    if (info) {
      layer.bindTooltip(info.name, {
        sticky: true,
        direction: "top",
        className: "india-tooltip",
      });
    }
    layer.on({
      mouseover: (e) => {
        const l = e.target as L.Path;
        if (info?.group === activeGroup) {
          l.setStyle({ fillOpacity: 0.6, weight: 1.1, color: INK });
        }
      },
      mouseout: (e) => {
        const l = e.target as L.Path;
        l.setStyle(styleFor(feature) as PathOptions);
      },
      click: () => {
        if (info) onSelect(name);
      },
    });
  };

  const groupBoundsKey = useMemo(() => activeGroup, [activeGroup]);

  const filteredFC = useMemo<FeatureCollection | null>(() => {
    if (!geo) return null;
    return {
      type: "FeatureCollection",
      features: geo.features.filter((f) => {
        const n = (f.properties as { NAME_1?: string })?.NAME_1 ?? "";
        return jewelryData[n]?.group === activeGroup;
      }),
    };
  }, [geo, activeGroup]);

  const handlePick = (regionKey: string, group: RegionGroup) => {
    onGroupChange?.(group);
    setFocusRegion(regionKey);
    onSelect(regionKey);
  };

  return (
    <div
      className="relative mx-auto aspect-[736/965] w-full max-w-3xl border-[22px] border-solid border-transparent drop-shadow-xl sm:border-[34px] md:border-[46px]"
      style={{
        borderImageSource: `url(${ornateMapFrame.url})`,
        borderImageSlice: "130 120 115 120 fill",
        borderImageWidth: "1",
        borderImageRepeat: "stretch",
      }}
      role="img"
      aria-label="Interactive map of India showing regional jewelry traditions"
    >
      <div className="relative h-full w-full overflow-hidden bg-[color:var(--ivory)] shadow-inner">
        <MapContainer
          center={[22.5, 80]}
          zoom={4}
          minZoom={3}
          maxZoom={10}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", background: "var(--ivory)" }}
          attributionControl={false}
        >
          {geo && (
            <GeoJSON
              key="india"
              data={geo}
              style={styleFor as L.StyleFunction}
              onEachFeature={onEach}
              ref={(l) => {
                layerRef.current = l ?? null;
              }}
            />
          )}
          {/* Island clickable markers (polygons too small to click) */}
          {[
            { name: "Lakshadweep", pos: ISLAND_COORDS.Lakshadweep },
            { name: "Andaman and Nicobar", pos: ISLAND_COORDS["Andaman and Nicobar"] },
          ].map(({ name, pos }) => {
            const info = jewelryData[name];
            if (!info) return null;
            const diamondIcon = L.divIcon({
              className: "india-diamond-icon",
              html: `<svg width="26" height="28" viewBox="0 0 26 28" style="filter:drop-shadow(0 2px 4px rgba(42,38,34,0.35));"><path d="M2 8 L13 1 L24 8 L13 27 Z" fill="${GOLD}" stroke="${GOLD_DEEP}" stroke-width="2" stroke-linejoin="round"/></svg>`,
              iconSize: [26, 28],
              iconAnchor: [13, 14],
            });
            return (
              <Marker
                key={name}
                position={pos}
                icon={diamondIcon}
                eventHandlers={{ click: () => onSelect(name) }}
              >
                <Tooltip direction="top" className="india-tooltip">
                  {info.name}
                </Tooltip>
              </Marker>
            );
          })}
          <FitToFeatures data={filteredFC} boundsKey={groupBoundsKey} />
          <FlyToRegion
            regionKey={focusRegion}
            geo={geo}
            onDone={() => setFocusRegion(null)}
          />
        </MapContainer>
        <RegionSearch onPick={handlePick} />
      </div>
    </div>
  );
}

export default IndiaMap;
