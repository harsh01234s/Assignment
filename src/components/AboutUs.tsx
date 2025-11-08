const AboutUs = () => {
  const stats = [
    { number: "85+", label: "Projects" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Experts Team" },
  ];

  const brands = ["TED", "Coca-Cola", "HQ(9)", "FAO"];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats and Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-navy mb-4">
                A montage of familiar faces and names.
              </h2>
              <p className="text-foreground leading-relaxed">
                Some stories come from the biggest names. Others begin with bold, rising voices.
                We've been fortunate to walk alongside both - listening, creating, and building 
                stories that matter.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="flex gap-6 flex-wrap">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="sticky-note p-6 min-w-[140px] text-center"
                  style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
                >
                  <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
                  <div className="text-primary font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Tagline and Brands */}
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="font-script text-4xl text-navy leading-relaxed">
                Every project is more than just a brief - it's a new chapter waiting to be written. 
                Together, we've crafted tales that inspire, connect, and endure.
              </p>
            </div>

            {/* Brand Logos Area */}
            <div className="relative">
              <div className="flex flex-wrap gap-8 items-center justify-center">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="text-3xl font-bold text-primary opacity-60 hover:opacity-100 transition-opacity"
                    style={{ 
                      transform: `rotate(${Math.random() * 20 - 10}deg)`,
                      fontSize: index === 0 ? '2.5rem' : '2rem'
                    }}
                  >
                    {brand}
                  </div>
                ))}
              </div>

              {/* Decorative Mountain Illustration */}
              <div className="mt-12 relative h-48 overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <path
                    d="M 0,150 L 80,100 L 160,120 L 200,60 L 240,120 L 320,80 L 400,140 L 400,200 L 0,200 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-navy opacity-20"
                  />
                  <circle cx="200" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy opacity-20">
                    {[...Array(16)].map((_, i) => (
                      <line
                        key={i}
                        x1="200"
                        y1="60"
                        x2={200 + Math.cos((i * Math.PI * 2) / 16) * 40}
                        y2={60 + Math.sin((i * Math.PI * 2) / 16) * 40}
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    ))}
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
