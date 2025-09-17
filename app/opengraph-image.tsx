import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Suprise";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

let spaceGroteskData: ArrayBuffer | null = null;

async function getFont() {
  if (spaceGroteskData) return spaceGroteskData;
  const res = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8nR8-5E.woff2"
    ),
    { cache: "force-cache" }
  );
  spaceGroteskData = await res.arrayBuffer();
  return spaceGroteskData;
}

export default async function Image({
  params,
}: {
  params: Record<string, string | string[]>;
}) {
  const fontData = await getFont();

  const title = "Suprise — Creative Tech & Venture Studio";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#F7F5F0",
          padding: "64px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 120% at 20% 0%, rgba(179,255,203,0.18), transparent 55%), radial-gradient(120% 160% at 100% 60%, rgba(247,245,240,0.08), transparent 60%), radial-gradient(140% 120% at 0% 100%, rgba(122,122,122,0.12), transparent 65%)",
          }}
        />
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1, zIndex: 1 }}>
          {title}
        </div>
        <div style={{ marginTop: 24, fontSize: 28, opacity: 0.8, zIndex: 1 }}>
          We don’t follow markets. We make them.
        </div>
        <div style={{ position: "absolute", bottom: 40, right: 64, fontSize: 20, opacity: 0.6 }}>
          suprise.studio
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}


