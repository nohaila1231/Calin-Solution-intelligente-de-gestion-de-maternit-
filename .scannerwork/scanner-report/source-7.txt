import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-maternity.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-secondary/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 transition-colors duration-300">
                <Sparkles className="w-3 h-3 mr-1" />
                Accompagnement Premium
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground">Une grossesse</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">sereine</span>,
                <br />
                <span className="text-foreground">un parcours</span>
                <br />
                <span className="text-secondary">accompagné</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Suivi personnalisé, conseils d'experts et communauté 
                bienveillante pour vivre pleinement votre maternité.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">40+</div>
                <div className="text-sm text-muted-foreground">Semaines de conseils</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Prénoms marocains</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-foreground">15k+</div>
                <div className="text-sm text-muted-foreground">Mamans satisfaites</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-card group transition-all duration-300"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                En savoir plus
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-card flex items-center justify-center">
                      <Heart className="w-3 h-3 text-primary-foreground" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+15,000 mamans nous font confiance</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="Femme enceinte sereine"
                className="w-full h-[600px] lg:h-[700px] rounded-3xl shadow-floating object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-4 -left-8 bg-card/95 backdrop-blur-md p-6 rounded-2xl shadow-card animate-float max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-base">Suivi personnalisé</div>
                    <div className="text-sm text-muted-foreground">Conseils adaptés à chaque étape</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-card/95 backdrop-blur-md p-6 rounded-2xl shadow-card animate-float max-w-xs" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-base">Communauté active</div>
                    <div className="text-sm text-muted-foreground">15,000+ mamans vous accompagnent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;