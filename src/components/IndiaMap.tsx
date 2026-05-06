import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, GeoJSON, TileLayer, useMap } from "react-leaflet";
import L, { type Layer, type PathOptions } from "leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import "leaflet/dist/leaflet.css";
import indiaGeo from "@/data/india.geojson?url";
import { jewelryData, type RegionGroup } from "@/data/jewelry";

interface Props {
  activeGroup: RegionGroup;
  onSelect: (regionKey: string) => void;
}

const GOLD = "#C9A24B";
const GOLD_DEEP = "#9C7A2C";
const INK = "#2A2622";
const DIM = "#E8E1D2";

function FitToFeatures({ data, key: k }: { data: FeatureCollection | null; key: string }) {
  const map = useMap();
  useEffect(() => {
    if (!data || !data.features.length) return;
    const layer = L.geoJSON(data);
    const b = layer.getBounds();
    if (b.isValid()) map.fitBounds(b, { padding: [20, 20] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [k]);
  return null;
}

export function IndiaMap({ activeGroup, onSelect }: Props) {
  const [geo, setGeo] = useState<FeatureCollection | null>(null);
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
    return {
      color: isActive ? GOLD_DEEP : "#C8BFA8",
      weight: isActive ? 1.2 : 0.6,
      fillColor: isActive ? GOLD : DIM,
      fillOpacity: isActive ? 0.35 : 0.18,
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
          l.setStyle({ fillOpacity: 0.6, weight: 1.6, color: INK });
        }
      },
      mouseout: (e) => {
        const l = e.target as L.Path;
        l.setStyle(styleFor(feature) as PathOptions);
      },
      click: () => {
        if (info?.group === activeGroup) onSelect(name);
      },
    });
  };

  const groupBoundsKey = useMemo(() => {
    if (!geo) return activeGroup;
    return activeGroup;
  }, [activeGroup, geo]);

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

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden rounded-2xl border border-[color:var(--gold)]/30 bg-[color:var(--ivory)] shadow-[0_30px_60px_-30px_rgba(42,38,34,0.35)]">
      <MapContainer
        center={[22.5, 80]}
        zoom={4}
        minZoom={3}
        maxZoom={7}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", background: "#FBF7EE" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          opacity={0.15}
        />
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
        <FitToFeatures data={filteredFC} key={groupBoundsKey} />
      </MapContainer>
    </div>
  );
}

export default IndiaMap;
