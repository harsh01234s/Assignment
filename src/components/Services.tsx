import { useState } from "react";
import borderFrame from "@/assets/border-frame.svg";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: "Film Production",
      image: "/api/placeholder/400/500",
      description: "Who says films are just an escape? We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.",
      offerings: ["Documentaries", "Corporate Videos", "2D Animation Videos", "3D Animation Videos"]
    },
    {
      title: "Branding",
      image: "/api/placeholder/400/500",
      description: "Building brands that resonate and endure. From strategy to visual identity, we craft brand experiences that connect with audiences.",
      offerings: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Collateral"]
    },
    {
      title: "Art Curation",
      image: "/api/placeholder/400/500",
      description: "Curating art experiences that inspire and transform spaces. We bring together creativity and context to create meaningful exhibitions.",
      offerings: ["Exhibition Design", "Art Direction", "Space Curation", "Cultural Projects"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-navy mb-4">
            The storyboard reveals the breadth of our craft.
          </h2>
          <div className="w-48 h-1 bg-navy mx-auto rounded-full" />
        </div>

        {/* Polaroid Cards */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="polaroid bg-card p-6 pb-12 cursor-pointer"
              onClick={() => setSelectedService(index)}
              style={{ 
                transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
              }}
            >
              <div className="aspect-[4/5] bg-muted mb-4 overflow-hidden rounded">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-navy/20 flex items-center justify-center">
                  <span className="text-6xl text-navy/30">📷</span>
                </div>
              </div>
              <h3 className="text-center text-xl font-semibold text-navy">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Service Detail Modal/Expandable Section */}
        {selectedService !== null && (
          <div className="mt-16 p-8 bg-card rounded-lg shadow-lg max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="mb-6 text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              ← Back
            </button>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-navy">
                {services[selectedService].title}
              </h3>
              
              <p className="text-lg text-foreground leading-relaxed font-script">
                "Filmmaking is a chance to live many lifetimes." - Robert Altman
              </p>
              
              <div className="border-t-2 border-navy/20 pt-6">
                <p className="text-foreground leading-relaxed mb-4">
                  {services[selectedService].description}
                </p>
                
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-navy mb-3">V crafts:</h4>
                  <ul className="space-y-2">
                    {services[selectedService].offerings.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-8 text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-2">
                  Explore Now →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Border Frame */}
      <div className="absolute bottom-0 left-0 right-0 h-[114px]">
        <img src={borderFrame} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Services;
