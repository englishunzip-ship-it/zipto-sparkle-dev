import { useRef, useState, useEffect } from "react";

const clients = [
  "TechCorp",
  "EduLearn",
  "HealthPlus",
  "FinanceHub",
  "RetailMax",
  "StartupXYZ",
  "CloudNine",
  "DataFlow",
];

const ClientTrustBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-12 border-y border-border/30 bg-card/30 overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm mb-8 uppercase tracking-wider">
          Trusted by innovative companies
        </p>
      </div>
      
      {/* Infinite Scroll Container with user control */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className={`flex animate-marquee-fast md:animate-marquee-fast animate-marquee-mobile whitespace-nowrap cursor-grab ${isDragging ? 'cursor-grabbing [animation-play-state:paused]' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="mx-8 lg:mx-16 text-xl sm:text-2xl font-bold text-primary hover:text-muted-foreground/40 active:text-muted-foreground/40 transition-colors duration-300 cursor-default flex-shrink-0 select-none"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTrustBar;
