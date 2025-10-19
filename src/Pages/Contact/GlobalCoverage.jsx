import { useMemo, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import SectionTitle from "../../components/ui/SectionTitle";

const WORLD_TOPOJSON =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Offices (lon, lat)
const OFFICES = [
  {
    id: "bd",
    name: "Bangladesh",
    countryLabel: "BANGLADESH",
    coords: [90.4125, 23.8103], // Dhaka
    iso: "BGD", // ISO_A3 code
  },
  {
    id: "uk",
    name: "United Kingdom",
    countryLabel: "UNITED KINGDOM",
    coords: [-0.1276, 51.5074], // London
    iso: "GBR",
  },
  {
    id: "it",
    name: "Italy",
    countryLabel: "ITALY",
    coords: [12.4964, 41.9028], // Rome
    iso: "ITA",
  },
];

export default function GlobalCoverage() {
  const [active, setActive] = useState("bd");

  const activeOffice = useMemo(
    () => OFFICES.find((o) => o.id === active),
    [active]
  );

  const zoomByOffice = { bd: 3.2, uk: 3.0, it: 3.0 };
  const zoom = zoomByOffice[active];

  return (
    <section className="relative w-full pb-16 md:pb-24">
      <div className="container-class">
        <SectionTitle
          title="Global Offices Network"
          description="Strategically placed offices worldwide ensure collaboration and client satisfaction."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left column: selector */}
          <div className="lg:col-span-3">
            <div className="lg:h-[300px] rounded-2xl p-6 md:p-8 border border-white/10">
              <p className="mb-4 text-sm uppercase tracking-widest text-neutral-300 text-center">
                Select a location
              </p>
              <div className="space-y-3">
                {OFFICES.map((o) => {
                  const isActive = o.id === active;
                  return (
                    <button
                      key={o.id}
                      onClick={() => setActive(o.id)}
                      className={[
                        "w-full rounded-xl border px-4 py-3 text-left font-medium transition",
                        "hover:border-primary/70 focus:outline-none ",
                        isActive
                          ? "border-primary bg-primary/10 text-white"
                          : "border-white/10 bg-white/5 text-neutral-200",
                      ].join(" ")}
                    >
                      {o.name}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-center gap-3 text-sm text-neutral-400">
                <span className="relative inline-flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping bg-primary"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                </span>
                Active office
              </div>
            </div>
          </div>

          {/* Right column: map */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-white p-2 md:p-4">
              <div className="relative aspect-[16/9] w-full">
                <ComposableMap
                  projectionConfig={{ scale: 110 }}
                  className="!w-full !h-full"
                >
                  <ZoomableGroup
                    center={activeOffice.coords}
                    zoom={zoom}
                    translateExtent={[
                      [-50, -50],
                      [1000, 600],
                    ]}
                  >
                    <Geographies geography={WORLD_TOPOJSON}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const isActiveCountry =
                            geo.properties.name === activeOffice.name;

                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill={isActiveCountry && "#B3D335"} // yellow-400 for active
                              stroke="#334155"
                              strokeWidth={0.5}
                              style={{
                                default: { outline: "none" },
                                hover: { outline: "none", fill: "#0f172a" },
                                pressed: { outline: "none" },
                              }}
                            />
                          );
                        })
                      }
                    </Geographies>

                    {/* Marker + label */}
                    <Marker coordinates={activeOffice.coords}>
                      <g transform="translate(-12,-26)">
                        <path
                          d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 14 8 14s8-8.75 8-14c0-4.42-3.58-8-8-8z"
                          className="fill-primary/90"
                        />
                        <circle
                          cx="12"
                          cy="10"
                          r="4"
                          className="fill-dark/80"
                        />
                        <circle
                          cx="12"
                          cy="10"
                          r="7"
                          className="fill-primary/30 animate-ping"
                        />
                      </g>

                      {/* <g transform="translate(18,-8)">
                        <rect
                          width="88"
                          height="16"
                          rx="6"
                          className="fill-dark text-white dark:fill-neutral-900/90 mx-auto text-center"
                        />

                        <text
                          x="8"
                          y="11"
                          fill="#fff" //dark
                          style={{ fontWeight: 600, fontSize: 8 }}
                        >
                          
                          {activeOffice.countryLabel}
                        </text>
                      </g> */}
                      <g transform="translate(18,-8)">
                        <rect
                          width="120"
                          height="20"
                          rx="6"
                          fill="currentColor"
                          className="fill-dark"
                          // stroke="#B3D335" // your primary color
                          // strokeWidth={0.4} // border thickness
                        />

                        <foreignObject x="4" y="2" width="112" height="16">
                          <div className="flex items-center justify-center gap-[5px] text-[10px] font-medium text-primary">
                            <ReactCountryFlag
                              countryCode={
                                activeOffice.iso === "BGD"
                                  ? "BD"
                                  : activeOffice.iso === "GBR"
                                  ? "GB"
                                  : activeOffice.iso === "ITA"
                                  ? "IT"
                                  : "US"
                              }
                              svg
                              style={{
                                width: "14px",
                                height: "14px",
                                borderRadius: "2px",
                              }}
                            />
                            <span className="mt-[1px]">
                              {activeOffice.countryLabel}
                            </span>
                          </div>
                        </foreignObject>
                      </g>
                    </Marker>
                  </ZoomableGroup>
                </ComposableMap>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="lg:h-[300px] rounded-2xl border border-white/10 px-6 py-4 md:py-4 md:px-6">
              <h3 className="text-2xl font-semibold text-center mb-2 text-white">
                Contact Us
              </h3>

              <div className="space-y-3">
                {/* Bangladesh */}
                <div>
                  <h4 className="font-semibold text-primary">Bangladesh</h4>
                  <p className="text-sm text-neutral-300">
                    Phone: +8801929157108
                  </p>
                  <p className="text-sm text-neutral-300">
                    Email: Agencycope24@gmail.com
                  </p>
                </div>

                {/* Kingdom */}
                <div>
                  <h4 className="font-semibold text-primary">United Kingdom</h4>
                  <p className="text-sm text-neutral-300">
                    Phone: +447404370398
                  </p>
                  <p className="text-sm text-neutral-300">
                    Email: Agencycope24@gmail.com
                  </p>
                </div>

                {/* Italy */}
                <div>
                  <h4 className="font-semibold text-primary">Italy</h4>
                  <p className="text-sm text-neutral-300">
                    Phone: +393512465569
                  </p>
                  <p className="text-sm text-neutral-300">
                    Email: Agencycope24@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
