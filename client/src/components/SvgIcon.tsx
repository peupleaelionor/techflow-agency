/**
 * Composant pour afficher les icônes SVG premium
 * Remplace les emojis génériques
 */

interface SvgIconProps {
  type: 'clients' | 'growth' | 'retention' | 'graph-map' | 'graph-bars' | 'gauge';
  size?: number;
  className?: string;
}

export default function SvgIcon({ type, size = 64, className = '' }: SvgIconProps) {
  const iconPath = `/assets/icons`;
  
  const iconMap = {
    'clients': `${iconPath}/icon-clients.svg`,
    'growth': `${iconPath}/icon-growth.svg`,
    'retention': `${iconPath}/icon-retention.svg`,
    'graph-map': `${iconPath}/graph-clients-map.svg`,
    'graph-bars': `${iconPath}/graph-growth-bar.svg`,
    'gauge': `${iconPath}/gauge-retention.svg`,
  };

  return (
    <img
      src={iconMap[type]}
      alt={`Icon: ${type}`}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{ width: `${size}px`, height: 'auto' }}
    />
  );
}
