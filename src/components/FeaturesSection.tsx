import { Calendar, Heart, Users, BookOpen, Baby, Shield, Sparkles, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Calendar,
    title: "Suivi Personnalisé",
    description: "Un accompagnement semaine par semaine adapté à votre grossesse",
    benefits: ["Conseils personnalisés", "Rappels importants", "Suivi médical"],
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Heart,
    title: "Bien-être & Santé",
    description: "Tout pour prendre soin de vous et de votre bébé naturellement",
    benefits: ["Nutrition optimale", "Exercices adaptés", "Relaxation"],
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: Users,
    title: "Communauté Bienveillante",
    description: "Échangez avec d'autres mamans dans un environnement sécurisé",
    benefits: ["Forums d'entraide", "Témoignages", "Conseils partagés"],
    color: "bg-accent/30 text-accent-foreground"
  },
  {
    icon: BookOpen,
    title: "Ressources Complètes",
    description: "Une bibliothèque riche en conseils et informations vérifiées",
    benefits: ["Articles d'experts", "Guides pratiques", "Vidéos éducatives"],
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Baby,
    title: "Développement Bébé",
    description: "Suivez l'évolution de votre bébé mois après mois",
    benefits: ["Croissance détaillée", "Étapes importantes", "Images 3D"],
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: Shield,
    title: "Sécurité & Confidentialité",
    description: "Vos données personnelles sont protégées et sécurisées",
    benefits: ["Données chiffrées", "Conformité RGPD", "Accès sécurisé"],
    color: "bg-accent/30 text-accent-foreground"
  }
];

const stats = [
  { value: "15,000+", label: "Mamans accompagnées", icon: Heart },
  { value: "40", label: "Semaines de conseils", icon: Calendar },
  { value: "500+", label: "Prénoms marocains", icon: Baby },
  { value: "98%", label: "Satisfaction client", icon: Star }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Fonctionnalités Complètes
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Tout ce dont vous avez</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">besoin en un seul endroit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une plateforme complète pensée pour accompagner chaque étape de votre grossesse 
            avec expertise et bienveillance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gradient-hero rounded-3xl">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;