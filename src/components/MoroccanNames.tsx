import { useState } from 'react';
import { Search, Heart, Star, Filter, Baby } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const moroccanNames = {
  girls: [
    { name: "Aicha", meaning: "Vivante, pleine de vie", origin: "Arabe", popularity: 5, category: "Classique" },
    { name: "Amina", meaning: "Sûre, paisible, fidèle", origin: "Arabe", popularity: 5, category: "Classique" },
    { name: "Yasmine", meaning: "Fleur de jasmin", origin: "Arabe", popularity: 4, category: "Nature" },
    { name: "Layla", meaning: "Nuit, beauté nocturne", origin: "Arabe", popularity: 4, category: "Poétique" },
    { name: "Zahra", meaning: "Fleur, celle qui brille", origin: "Arabe", popularity: 4, category: "Nature" },
    { name: "Khadija", meaning: "Née prématurément", origin: "Arabe", popularity: 5, category: "Historique" },
    { name: "Salma", meaning: "Paix, sécurité", origin: "Arabe", popularity: 4, category: "Moderne" },
    { name: "Lina", meaning: "Tendre, douce", origin: "Arabe", popularity: 4, category: "Moderne" },
    { name: "Nour", meaning: "Lumière", origin: "Arabe", popularity: 5, category: "Spirituel" },
    { name: "Malak", meaning: "Ange", origin: "Arabe", popularity: 4, category: "Spirituel" },
    { name: "Aya", meaning: "Signe, miracle", origin: "Arabe", popularity: 3, category: "Spirituel" },
    { name: "Rim", meaning: "Gazelle blanche", origin: "Arabe", popularity: 3, category: "Nature" },
    { name: "Dounia", meaning: "Monde, vie terrestre", origin: "Arabe", popularity: 4, category: "Moderne" },
    { name: "Soraya", meaning: "Étoile brillante", origin: "Arabe", popularity: 3, category: "Poétique" },
    { name: "Rajae", meaning: "Espoir", origin: "Arabe", popularity: 3, category: "Spirituel" },
    { name: "Hanane", meaning: "Compassion, tendresse", origin: "Arabe", popularity: 3, category: "Classique" },
    { name: "Oumaima", meaning: "Petite mère", origin: "Arabe", popularity: 4, category: "Traditionnel" },
    { name: "Zineb", meaning: "Ornement du père", origin: "Arabe", popularity: 3, category: "Traditionnel" },
    { name: "Amira", meaning: "Princesse", origin: "Arabe", popularity: 4, category: "Noble" },
    { name: "Ghita", meaning: "Petite chanson", origin: "Arabe", popularity: 3, category: "Artistique" }
  ],
  boys: [
    { name: "Mohamed", meaning: "Digne de louange", origin: "Arabe", popularity: 5, category: "Religieux" },
    { name: "Ahmed", meaning: "Le plus loué", origin: "Arabe", popularity: 5, category: "Religieux" },
    { name: "Youssef", meaning: "Dieu ajoutera", origin: "Hébraïque/Arabe", popularity: 5, category: "Prophétique" },
    { name: "Omar", meaning: "Vie longue, prospère", origin: "Arabe", popularity: 4, category: "Historique" },
    { name: "Ali", meaning: "Élevé, noble", origin: "Arabe", popularity: 5, category: "Noble" },
    { name: "Hassan", meaning: "Beau, bon", origin: "Arabe", popularity: 4, category: "Traditionnel" },
    { name: "Amine", meaning: "Loyal, honnête", origin: "Arabe", popularity: 4, category: "Vertueux" },
    { name: "Karim", meaning: "Généreux, noble", origin: "Arabe", popularity: 4, category: "Vertueux" },
    { name: "Adam", meaning: "Premier homme", origin: "Hébraïque/Arabe", popularity: 5, category: "Biblique" },
    { name: "Zakaria", meaning: "Dieu se souvient", origin: "Hébraïque/Arabe", popularity: 3, category: "Prophétique" },
    { name: "Ismail", meaning: "Dieu écoute", origin: "Hébraïque/Arabe", popularity: 4, category: "Prophétique" },
    { name: "Mehdi", meaning: "Le bien guidé", origin: "Arabe", popularity: 4, category: "Spirituel" },
    { name: "Soufiane", meaning: "Rapide, pur", origin: "Arabe", popularity: 3, category: "Traditionnel" },
    { name: "Ayoub", meaning: "Patient, qui revient vers Dieu", origin: "Arabe", popularity: 3, category: "Biblique" },
    { name: "Othmane", meaning: "Petit de l'outarde", origin: "Arabe", popularity: 3, category: "Historique" },
    { name: "Hamza", meaning: "Lion, fort", origin: "Arabe", popularity: 4, category: "Guerrier" },
    { name: "Anass", meaning: "Ami intime", origin: "Arabe", popularity: 3, category: "Moderne" },
    { name: "Rayan", meaning: "Porte du paradis", origin: "Arabe", popularity: 4, category: "Spirituel" },
    { name: "Saad", meaning: "Chance, bonheur", origin: "Arabe", popularity: 3, category: "Traditionnel" },
    { name: "Ilyas", meaning: "Mon Dieu est Yahvé", origin: "Hébraïque/Arabe", popularity: 3, category: "Prophétique" }
  ]
};

const categories = ["Tous", "Classique", "Moderne", "Spirituel", "Nature", "Noble", "Traditionnel", "Religieux"];

const MoroccanNames = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (name: string) => {
    setFavorites(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  const filterNames = (names: typeof moroccanNames.girls) => {
    return names.filter(name => {
      const matchesSearch = name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           name.meaning.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Tous" || name.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const renderStars = (popularity: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={cn("w-3 h-3", i < popularity ? "text-accent fill-accent" : "text-muted-foreground")} 
      />
    ));
  };

  const NameCard = ({ name, meaning, origin, popularity, category }: any) => (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{origin}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleFavorite(name)}
            className="hover:bg-transparent"
          >
            <Heart 
              className={cn(
                "w-5 h-5 transition-colors duration-300",
                favorites.includes(name) 
                  ? "text-secondary fill-secondary" 
                  : "text-muted-foreground hover:text-secondary"
              )} 
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{meaning}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {renderStars(popularity)}
          </div>
          <Badge variant="outline" className="bg-accent/10 border-accent text-accent-foreground">
            {category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            <Baby className="w-4 h-4 mr-2" />
            Héritage Culturel
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Prénoms</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Marocains</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez la richesse des prénoms marocains, leurs significations profondes 
            et choisissez celui qui résonnera avec votre cœur.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher un prénom..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 backdrop-blur-md border-border/50 focus:border-primary"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "transition-all duration-300",
                  selectedCategory === category
                    ? "bg-gradient-primary text-primary-foreground shadow-card"
                    : "border-primary/20 text-primary hover:bg-primary/10"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Names Tabs */}
        <Tabs defaultValue="girls" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-card/50 backdrop-blur-md">
            <TabsTrigger 
              value="girls" 
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground"
            >
              Prénoms Filles
            </TabsTrigger>
            <TabsTrigger 
              value="boys"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground"
            >
              Prénoms Garçons
            </TabsTrigger>
          </TabsList>

          <TabsContent value="girls" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterNames(moroccanNames.girls).map((name) => (
                <NameCard key={name.name} {...name} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="boys" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterNames(moroccanNames.boys).map((name) => (
                <NameCard key={name.name} {...name} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Favorites Summary */}
        {favorites.length > 0 && (
          <div className="mt-16 p-6 bg-card/50 backdrop-blur-md rounded-2xl border border-border/50">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-secondary" />
              Vos prénoms favoris ({favorites.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {favorites.map((name) => (
                <Badge 
                  key={name} 
                  variant="secondary" 
                  className="bg-secondary/10 text-secondary border-secondary/20 cursor-pointer hover:bg-secondary/20 transition-colors duration-300"
                  onClick={() => toggleFavorite(name)}
                >
                  {name}
                  <Heart className="w-3 h-3 ml-1 fill-secondary" />
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoroccanNames;