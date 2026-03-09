import { useRef, useEffect } from "react";

interface IconifyProps {
  icon: string;
  className?: string;
}

const Iconify = ({ icon, className }: IconifyProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = `<iconify-icon icon="${icon}" class="${className || ''}"></iconify-icon>`;
    }
  }, [icon, className]);

  return <span ref={ref} />;
};

export default Iconify;
