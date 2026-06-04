import React from 'react';

interface ProgressiveBlurProps {
  height?: number;
  zIndex?: number;
}

const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  height = 200,
  zIndex = 999,
}) => {
  // Definir camadas de blur progressivo
  const blurLayers = [
    { blur: 0.25, mask: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, transparent 37.5%)' },
    { blur: 0.5, mask: 'linear-gradient(to bottom, transparent 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 37.5%, transparent 50%)' },
    { blur: 1, mask: 'linear-gradient(to bottom, transparent 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,1) 50%, transparent 62.5%)' },
    { blur: 2, mask: 'linear-gradient(to bottom, transparent 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 62.5%, transparent 75%)' },
    { blur: 4, mask: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75%, transparent 87.5%)' },
    { blur: 8, mask: 'linear-gradient(to bottom, transparent 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 87.5%, transparent 100%)' },
    { blur: 16, mask: 'linear-gradient(to bottom, transparent 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100%)' },
    { blur: 32, mask: 'linear-gradient(to bottom, transparent 87.5%, rgba(0,0,0,1) 100%)' },
  ];

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: `${height}px`,
    zIndex,
    pointerEvents: 'none',
  };

  const layerStyle = (blur: number, mask: string): React.CSSProperties => ({
    position: 'absolute',
    inset: 0,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    maskImage: mask,
    WebkitMaskImage: mask,
  });

  return (
    <div className="progressive-blur" style={containerStyle} aria-hidden="true">
      {blurLayers.map((layer, index) => (
        <div key={index} style={layerStyle(layer.blur, layer.mask)} aria-hidden="true" />
      ))}
    </div>
  );
};

export default ProgressiveBlur;
