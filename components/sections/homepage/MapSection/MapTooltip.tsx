import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface MapTooltipProps {
  content: {
    name: string;
    id: string;
    isActive: boolean;
    body: { [key: string]: string };
  };
  position: {
    x: number;
    y: number;
  };
}

export const MapTooltip: React.FC<MapTooltipProps> = ({
  content,
  position,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (tooltipRef.current) {
      const { width, height } = tooltipRef.current.getBoundingClientRect();

      setDimensions({ width, height });
    }
  }, [content]);

  const tooltipX = position.x - dimensions.width / 2;
  const tooltipY = position.y - dimensions.height - 10; // 16px for some spacing

  return (
    <div
      ref={tooltipRef}
      className="fixed z-50 bg-black shadow-lg text-white p-5"
      style={{
        left: tooltipX,
        top: tooltipY,
        pointerEvents: "none",
      }}
    >
      <div
        className={cn("text-left text-lg", {
          "mb-5": Object.keys(content.body || {}).length > 0,
        })}
      >
        {content.name}
      </div>

      {Object.keys(content.body || {}).length > 0 && (
        <div className="text-sm">
          {Object.keys(content.body).map((key) => (
            <div key={key} className="flex items-center justify-between gap-2">
              <span className="font-medium capitalize">{key}: </span>

              <span className="font-medium">{content.body[key]}</span>
            </div>
          ))}
        </div>
      )}

      <div
        className="absolute w-0 h-0"
        style={{
          bottom: -8,
          left: "50%",
          transform: "translateX(-50%)",
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: "8px solid black",
        }}
      />
    </div>
  );
};
