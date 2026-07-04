import { Heart, Users, Award, Shield, Star, Baby, Sparkles, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const team = [
  {
    name: "Dr. Fatima Benali",
    role: "Gynécologue-Obstétricienne",
    experience: "15 ans d'expérience",
    speciality: "Grossesses à risque",
    image: "👩‍⚕️"
  },
  {
    name: "Sarah Alami",
    role: "Sage-femme certifiée",
    experience: "10 ans d'expérience",
    speciality: "Préparation à l'accouchement",
    image: "👩‍⚕️"
  },
  {
    name: "Dr. Amina Chakib",
    role: "Nutritionniste",
    experience: "12 ans d'expérience",
    speciality: "Nutrition prénatale",
    image: "👩‍⚕️"
  },
  {
    name: "Aicha Mansouri",
    role: "Psychologue périnatale",
    experience: "8 ans d'expérience",
    speciality: "Bien-être émotionnel",
    image: "👩‍⚕️"
  }
];

const values = [
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Nous accompagnons chaque femme avec empathie et respect",
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Des conseils vérifiés par des professionnels de santé",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Un environnement d'échange et de soutien mutuel",
    color: "bg-accent/30 text-accent-foreground"
  },
  {
    icon: Star,
    title: "Excellence",
    description: "La plus haute qualité dans tous nos services",
    color: "bg-primary/10 text-primary"
  }
];

const achievements = [
  { number: "15,000+", label: "Mamans accompagnées" },
  { number: "98%", label: "Taux de satisfaction" },
  { number: "50+", label: "Professionnels partenaires" },
  { number: "5", label: "Années d'expérience" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Notre Mission
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Accompagner chaque</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">future maman</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maternité Sereine est née de la volonté d'offrir à chaque femme 
            un accompagnement personnalisé et bienveillant tout au long de sa grossesse.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  <span className="text-foreground">Notre</span>
                  <span className="text-secondary"> histoire</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fondée en 2019 par une équipe de professionnels de santé passionnés, 
                  Maternité Sereine est née du constat que de nombreuses femmes manquaient 
                  d'informations fiables et de soutien pendant leur grossesse.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous avons créé une plateforme qui allie expertise médicale, 
                  richesse culturelle marocaine et technologie moderne pour offrir 
                  le meilleur accompagnement possible.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-3xl shadow-floating">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Baby className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Vision</h3>
                      <p className="text-muted-foreground">Démocratiser l'accès aux conseils d'experts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Mission</h3>
                      <p className="text-muted-foreground">Accompagner avec bienveillance et expertise</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/30 rounded-2xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Objectif</h3>
                      <p className="text-muted-foreground">Rendre chaque grossesse sereine et épanouie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-foreground">Nos</span>
              <span className="text-primary"> valeurs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ces principes guident chacune de nos actions et définissent 
              notre approche de l'accompagnement maternel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-4">
                    <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-foreground">Notre équipe</span>
              <span className="text-secondary"> d'experts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des professionnels de santé expérimentés et passionnés, 
              dédiés à votre bien-être et celui de votre bébé.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="space-y-4">
                  <div className="text-6xl mx-auto">{member.image}</div>
                  <div>
                    <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {member.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">{member.experience}</p>
                  <p className="text-sm text-secondary font-medium">{member.speciality}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Rejoignez notre communauté
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Commencez dès aujourd'hui votre parcours vers une grossesse sereine 
            avec le soutien de nos experts et de notre communauté bienveillante.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Commencer maintenant
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;