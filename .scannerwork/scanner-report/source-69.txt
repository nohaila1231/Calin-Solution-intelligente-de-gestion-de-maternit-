import Navigation from '@/components/Navigation';
import MoroccanNames from '@/components/MoroccanNames';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Baby, Heart, Star, Crown } from 'lucide-react';

const Prenoms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            <Crown className="w-4 h-4 mr-2" />
            Héritage Marocain
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Prénoms</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Marocains</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plongez dans la richesse culturelle du Maroc et découvrez des prénoms 
            chargés d'histoire, de beauté et de significations profondes pour votre bébé.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 p-6 bg-card/30 backdrop-blur-md rounded-2xl border border-border/50">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Baby className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Prénoms uniques</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-foreground">8</div>
              <div className="text-sm text-muted-foreground">Catégories</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">1000+</div>
              <div className="text-sm text-muted-foreground">Ans d'histoire</div>
            </div>
          </div>
        </div>
      </section>

      {/* Names Component */}
      <MoroccanNames />

      {/* Cultural Context Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            <span className="text-foreground">L'importance du prénom dans la</span>
            <br />
            <span className="text-secondary">culture marocaine</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Tradition ancestrale
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dans la culture marocaine, le choix du prénom revêt une importance particulière. 
                Il reflète les espoirs, les valeurs et les aspirations que les parents 
                nourrissent pour leur enfant.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Heart className="w-5 h-5 text-secondary" />
                Significations profondes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Chaque prénom marocain porte en lui une histoire, une signification spirituelle 
                ou une qualité que l'on souhaite voir grandir chez l'enfant.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Crown className="w-5 h-5 text-accent-foreground" />
                Héritage royal
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Beaucoup de prénoms marocains trouvent leurs origines dans l'histoire 
                des dynasties royales et des personnalités marquantes du royaume.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Baby className="w-5 h-5 text-primary" />
                Modernité et tradition
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Les prénoms marocains d'aujourd'hui allient harmonieusement 
                respect des traditions et adaptation aux tendances contemporaines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prenoms;