// All three colours remain visible. Only translation and opacity change over time.
export function FooterRings() {
  return (
    <svg
      className="he-footer-rings-svg"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeWidth="24">
        <g className="he-footer-ring-motion he-footer-motion-turquoise">
          <circle
            cx="190"
            cy="210"
            r="145"
            stroke="var(--observatory-turquoise)"
          />
        </g>
        <g className="he-footer-ring-motion he-footer-motion-blue">
          <circle cx="310" cy="250" r="142" stroke="var(--observatory-blue)" />
        </g>
        <g className="he-footer-ring-motion he-footer-motion-lime">
          <circle cx="265" cy="310" r="132" stroke="var(--observatory-lime)" />
        </g>
      </g>
    </svg>
  );
}
