import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './PortalTooltip.css';

export default function PortalTooltip({ children, content }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top = triggerRect.bottom + 8;
    let left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

    const margin = 8;
    if (left < margin) left = margin;
    if (left + tooltipRect.width > window.innerWidth - margin) {
      left = window.innerWidth - tooltipRect.width - margin;
    }
    if (top + tooltipRect.height > window.innerHeight - margin) {
      top = triggerRect.top - tooltipRect.height - 8;
    }

    setPosition({ top, left });
  };

  useLayoutEffect(() => {
    if (visible) updatePosition();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const handleUpdate = () => updatePosition();
    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [visible]);

  return (
    <>
      <span
        ref={triggerRef}
        className="portal-tooltip__trigger"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </span>
      {visible &&
        createPortal(
          <div
            ref={tooltipRef}
            className="portal-tooltip"
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
            role="tooltip"
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
}