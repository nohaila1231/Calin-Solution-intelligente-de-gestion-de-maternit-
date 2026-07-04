import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Heart, Baby, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const monthlyData = [
  {
    month: 1,
    title: "Début de l'aventure",
    subtitle: "Les premiers signes",
    description: "Félicitations ! Votre corps commence sa transformation magique.",
    symptoms: ["Fatigue", "Nausées matinales", "Seins sensibles"],
    advice: ["Prenez de l'acide folique", "Évitez l'alcool et le tabac", "Consultez votre médecin"],
    size: "Graine de pavot",
    color: "bg-primary/10 text-primary"
  },
  {
    month: 2,
    title: "Formation des organes",
    subtitle: "Développement crucial",
    description: "Les organes vitaux de votre bébé commencent à se former.",
    symptoms: ["Nausées persistantes", "Aversions alimentaires", "Émotions intenses"],
    advice: ["Alimentation équilibrée", "Hydratation importante", "Repos suffisant"],
    size: "Myrtille",
    color: "bg-secondary/10 text-secondary"
  },
  {
    month: 3,
    title: "Fin du premier trimestre",
    subtitle: "Soulagement en vue",
    description: "Les nausées diminuent et l'énergie revient progressivement.",
    symptoms: ["Moins de nausées", "Besoin fréquent d'uriner", "Première prise de poids"],
    advice: ["Première échographie", "Annonce aux proches", "Vêtements confortables"],
    size: "Prune",
    color: "bg-accent/30 text-accent-foreground"
  },
  {
    month: 4,
    title: "Épanouissement",
    subtitle: "Le plus beau trimestre",
    description: "Vous rayonnez ! C'est souvent la période la plus agréable.",
    symptoms: ["Regain d'énergie", "Peau éclatante", "Cheveux brillants"],
    advice: ["Exercices doux", "Crèmes anti-vergetures", "Planning de la chambre"],
    size: "Avocat",
    color: "bg-primary/10 text-primary"
  },
  {
    month: 5,
    title: "Premiers mouvements",
    subtitle: "Magie de la vie",
    description: "Vous sentez votre bébé bouger pour la première fois !",
    symptoms: ["Mouvements du bébé", "Ventre qui s'arrondit", "Changements posturaux"],
    advice: ["Échographie morphologique", "Musique pour bébé", "Renforcement du dos"],
    size: "Banane",
    color: "bg-secondary/10 text-secondary"
  },
  {
    month: 6,
    title: "Communication établie",
    subtitle: "Lien privilégié",
    description: "Votre bébé réagit à votre voix et à la musique.",
    symptoms: ["Mouvements plus forts", "Essoufflement", "Jambes lourdes"],
    advice: ["Cours de préparation", "Achats pour bébé", "Massage prénatal"],
    size: "Épis de maïs",
    color: "bg-accent/30 text-accent-foreground"
  },
  {
    month: 7,
    title: "Début du 3ème trimestre",
    subtitle: "Préparation intensive",
    description: "Votre corps se prépare activement à l'accouchement.",
    symptoms: ["Contractions de Braxton Hicks", "Difficultés de sommeil", "Reflux gastrique"],
    advice: ["Congé maternité", "Valise de maternité", "Exercices de respiration"],
    size: "Aubergine",
    color: "bg-primary/10 text-primary"
  },
  {
    month: 8,
    title: "Préparatifs finaux",
    subtitle: "Dernière ligne droite",
    description: "Bébé grandit rapidement et vous vous préparez à le rencontrer.",
    symptoms: ["Poids plus important", "Envies fréquentes d'uriner", "Anxiété croissante"],
    advice: ["Finir la chambre", "Cours d'accouchement", "Relaxation"],
    size: "Courge butternut",
    color: "bg-secondary/10 text-secondary"
  },
  {
    month: 9,
    title: "L'attente finale",
    subtitle: "Prête à tout moment",
    description: "Votre bébé est prêt à naître. Restez zen et patiente.",
    symptoms: ["Bébé descend", "Perte du bouchon muqueux", "Contractions régulières"],
    advice: ["Surveillez les signes", "Restez calme", "Profitez des derniers moments"],
    size: "Pastèque",
    color: "bg-accent/30 text-accent-foreground"
  }
];

const MonthlyAdvice = () => {
  const [expandedMonth, setExpandedMonth] = useState<number | null>(1);

  const toggleMonth = (month: number) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Calendar className="w-4 h-4 mr-2" />
            Suivi Mensuel
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Votre grossesse</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">mois par mois</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez l'évolution de votre bébé et recevez des conseils personnalisés 
            pour chaque étape de votre grossesse.
          </p>
        </div>

        <div className="grid gap-6">
          {monthlyData.map((data) => (
            <Card 
              key={data.month} 
              className={cn(
                "transition-all duration-500 hover:shadow-card cursor-pointer border-l-4",
                expandedMonth === data.month 
                  ? "shadow-card border-l-primary bg-gradient-card" 
                  : "hover:border-l-primary/50"
              )}
              onClick={() => toggleMonth(data.month)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn("px-4 py-2 rounded-xl font-bold text-lg", data.color)}>
                      Mois {data.month}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{data.title}</CardTitle>
                      <p className="text-muted-foreground font-medium">{data.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="bg-accent/20 border-accent text-accent-foreground">
                      Taille: {data.size}
                    </Badge>
                    {expandedMonth === data.month ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </CardHeader>

              {expandedMonth === data.month && (
                <CardContent className="pt-0 animate-fade-in">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {data.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <Heart className="w-4 h-4 text-secondary" />
                          Symptômes courants
                        </h4>
                        <ul className="space-y-2">
                          {data.symptoms.map((symptom, index) => (
                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-secondary rounded-full"></div>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          Conseils du mois
                        </h4>
                        <ul className="space-y-2">
                          {data.advice.map((tip, index) => (
                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Baby className="w-4 h-4 mr-2" />
                        Voir plus de détails
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlyAdvice;