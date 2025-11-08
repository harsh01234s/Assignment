import teamSilhouette from "@/assets/team-silhouette.svg";
import teamShadow from "@/assets/team-shadow.svg";

const AboutTeam = () => {
  return (
    <section 
      id="team" 
      className="py-20 px-4 relative"
      style={{
        backgroundColor: '#FDD0C1',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Sticky Note */}
            <div className="sticky-note p-6 max-w-md">
              <p className="text-navy leading-relaxed">
                Some craft films. Some build brands. Some curate art. We bring it all together - a 
                collective of storytellers driven by one belief: every project deserves to become more 
                than just a message; it should become a masterpiece.
              </p>
              <p className="text-navy mt-4 leading-relaxed">
                From first spark to final frame, from raw ideas to timeless visuals - we shape stories 
                that stay with you.
              </p>
            </div>

            {/* Building Illustration Placeholder */}
            <div className="relative w-64 h-48 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-end justify-center pb-4">
                <div className="w-32 h-32 bg-primary/30 rounded-t-full" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-24 bg-primary/40 rounded-t-lg" />
            </div>

            <div className="text-center italic text-navy">
              <p className="font-script text-xl">Branding Experts</p>
            </div>
          </div>

          {/* Right Side - Team Silhouettes */}
          <div className="space-y-8">
            <div className="flex justify-center items-end relative">
              <img 
                src={teamSilhouette} 
                alt="Team silhouettes" 
                className="w-full max-w-md mx-auto"
              />
              <img 
                src={teamShadow} 
                alt="" 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <p className="font-script text-xl text-navy">Film Makers</p>
                  <div className="w-32 h-1 bg-navy/20 mt-2 mx-auto rounded-full" />
                </div>
                <div className="text-center">
                  <p className="font-script text-xl text-navy">Art Curators</p>
                  <div className="w-32 h-1 bg-navy/20 mt-2 mx-auto rounded-full" />
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-navy text-lg font-medium mb-4">
                  Take a closer look at the stories V bring to life.
                </p>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Lace Border */}
      <div className="absolute bottom-0 left-0 right-0 h-12 lace-border" />
    </section>
  );
};

export default AboutTeam;
