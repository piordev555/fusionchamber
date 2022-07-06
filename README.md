# cyberapeage.io client

[Client Notion development board](https://nettle-protocol-6b2.notion.site/acf67d849f4443bfafae69c34211db4f?v=02a95b29773543e38e5826634847130b)

## LANDING TODO

[] TEXT
[] RESPONSIVE ON ROADMAP // 30 m
[] FINISH COLLAPSIBLE FAQ // 30 m
[] RESPONSIVE FAQ // 30 m
[] RESPONSIVE FOOTER // 5m
[] RESPONSIVE EXPLORER // 30m

## Current problems to be addressed:

There's a small problem with the nft renderer. Basically because it's getting each trait entire SVG and staking them on top of each other there's too many DOM elements and it's making the page lag in some low end computers.

The way I would go about this is making a change to the renderer: instead of it rendering the SVGs literally and staking each layer upon each other, I would make a web worker that would generate a map with the only pixels needed to render the wanted NFT.

for example, we could create a dictionary with the following structure:

```
{
    background: {
        "cyberage": {
            "00_00": "#fff",
            "00_01": "#fff",
            "00_02": "#fff",
            ...
            "47_47": "#fff",
        },
        "binary": {
            ...
        }
    },
    eyes: {
        "solana-visors": {
            "00_00": "#fff",
            "00_01": "#fff",
            "00_02": "#fff",
            ...
            "47_47": "#fff",
        },
        ...
    }
    ...
}
```

Then with this dictionary of each pixel data for each trait, we could render the SVG with the following procedure:

1 - Make a webworker that would get messaged the 6 traits that need to be rendered and return a list of each trait's pixels color and position.

With that list we could map over it and render the desired SVG of the NFT without having more DOM elements than needed:

```jsx
<svg
  version="1.1"
  width={48}
  height={48}
  preserveAspectRatio="xMaxYMax meet"
  viewBox="0 0 48 48"
  xmlns="http://www.w3.org/2000/svg"
  shapeRendering="crispEdges"
>
  {PIXELS_MAP.map((pixel, index) => (
    <rect x={pixel.x} y={pixel.y} width="1" height="1" fill={pixel.color} />
  ))}
</svg>
```
