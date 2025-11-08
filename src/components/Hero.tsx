import mandalaImage from "@/assets/mandala.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Mandala Background */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-40">
        <img src={mandalaImage} alt="" className="w-full h-full object-contain" />
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Logo and Mandala */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 mandala-pattern opacity-20" />
            <div className="relative text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-7xl font-bold text-primary">V</span>
                <span className="text-6xl font-semibold text-navy">Films</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-script text-navy leading-tight">
            Varnan is where stories find their voice and form
          </h1>
          
          <div className="flex gap-4 text-2xl text-primary font-medium">
            <span>Films</span>
            <span>.</span>
            <span>Brands</span>
            <span>.</span>
            <span>Art</span>
          </div>

          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Since 2009, V've been telling stories - stories of people, their journeys, 
              and the places that shape them.
            </p>
            <p>
              Some begin in polished boardrooms, others in humble village squares. 
              But every story starts the same way - by listening with intention.
            </p>
            <p>
              V believes it takes trust, patience, and an eye for the unseen to capture 
              what truly matters. V doesn't just tell stories - V honors them.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Lace Border */}
      <div className="absolute bottom-0 left-0 right-0 h-12 lace-border" />
    </section>
  );
};

export default Hero;
