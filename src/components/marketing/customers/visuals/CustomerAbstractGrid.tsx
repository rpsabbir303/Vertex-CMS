"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  className?: string;
  cellSize?: number;
  /** Multiplier for grid line contrast (e.g. 0.7 ≈ former opacity-70 wrapper). */
  strength?: number;
  /** Limit grid height as fraction of container (avoids CSS mask-image). */
  heightRatio?: number;
};

/** SSR / first-paint fallback before ResizeObserver runs. */
const FALLBACK_WIDTH = 1440;
const FALLBACK_HEIGHT = 720;

function buildGridLineElements(
  width: number,
  height: number,
  cellSize: number,
  strength: number,
  heightRatio: number,
) {
  const stroke = `rgba(8, 35, 63, ${(0.032 * strength).toFixed(4)})`;
  const maxY = height * Math.min(1, heightRatio);
  const elements: ReactNode[] = [];
  let key = 0;

  const verticalCount = Math.min(Math.floor(width / cellSize), 80);
  for (let i = 1; i <= verticalCount; i += 1) {
    const x = i * cellSize;
    if (x >= width) break;
    elements.push(
      <line key={`v-${key++}`} x1={x} y1={0} x2={x} y2={maxY} stroke={stroke} strokeWidth={1} />,
    );
  }

  const horizontalCount = Math.min(Math.floor(maxY / cellSize), 80);
  for (let i = 1; i <= horizontalCount; i += 1) {
    const y = i * cellSize;
    if (y >= maxY) break;
    elements.push(
      <line key={`h-${key++}`} x1={0} y1={y} x2={width} y2={y} stroke={stroke} strokeWidth={1} />,
    );
  }

  return elements;
}

/**
 * Architectural grid as explicit SVG lines — html.to.design / Figma import safe.
 * Do not use CSS background-image or SVG pattern paint servers for this grid.
 */
export function CustomerAbstractGrid({
  className = "",
  cellSize = 32,
  strength = 1,
  heightRatio = 1,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dims, setDims] = useState({ width: FALLBACK_WIDTH, height: FALLBACK_HEIGHT });

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const update = () => {
      const { width, height } = svg.getBoundingClientRect();
      if (width < 1 || height < 1) return;
      setDims({ width: Math.round(width), height: Math.round(height) });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  const { width, height } = dims;

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      data-design-layer="CustomerAbstractGrid"
    >
      {buildGridLineElements(width, height, cellSize, strength, heightRatio)}
    </svg>
  );
}
