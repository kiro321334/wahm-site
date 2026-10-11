const d = {
  play: 'M8 5v14l11-7z', close: 'M6 6l12 12M18 6L6 18', down: 'M12 5v14M6 13l6 6 6-6', up: 'M12 19V5M6 11l6-6 6 6', plus: 'M12 5v14M5 12h14', minus: 'M5 12h14', check: 'M20 6L9 17l-5-5', chat: 'M21 12a8 8 0 0 1-11.6 7L4 20l1.1-4.8A8 8 0 1 1 21 12z', mail: 'M3 5h18v14H3z|M3 7l9 7 9-7',
  volume: 'M4 9v6h4l5 4V5L8 9z|M17 9a4 4 0 0 1 0 6', full: 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5',
  portal: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z|M12 3c-4 3-4 15 0 18M12 3c4 3 4 15 0 18', cube: 'M12 3l8 4.5v9L12 21l-8-4.5v-9z|M4 7.5l8 4.5 8-4.5M12 12v9', focus: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z|M12 2v4M12 18v4M2 12h4M18 12h4', spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18',
  film: 'M3 5h18v14H3z|M3 10h18M3 14h18', bolt: 'M13 2L4 14h7l-1 8 9-12h-7z', grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z', globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z|M3 12h18M12 3c-4 4-4 14 0 18M12 3c4 4 4 14 0 18', phone: 'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z|M11 18h2', file: 'M6 3h8l4 4v14H6z|M14 3v4h4',
};
export default function Icon({ n, size = 20, className = '', fill = false }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{d[n].split('|').map((p, i) => <path key={i} d={p} />)}</svg>;
}
