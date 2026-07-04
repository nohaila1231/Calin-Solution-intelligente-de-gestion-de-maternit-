import { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const articles = [
  {
    id: 1,
    title: "Alimentation pendant la grossesse : guide complet",
    excerpt: "Découvrez les aliments essentiels pour une grossesse sereine et un bébé en bonne santé.",
    content: "Une alimentation équilibrée est cruciale pendant la grossesse...",
    category: "Nutrition",
    trimester: "Tout trimestre",
    author: "Dr. Fatima Benali",
    readTime: "8 min",
    date: "2024-01-15",
    featured: true
  },
  {
    id: 2,
    title: "Exercices prénataux sécurisés",
    excerpt: "Les meilleurs exercices pour rester en forme pendant votre grossesse.",
    content: "L'exercice pendant la grossesse présente de nombreux avantages...",
    category: "Sport & Bien-être",
    trimester: "2ème trimestre",
    author: "Sarah Alami",
    readTime: "6 min",
    date: "2024-01-12",
    featured: false
  },
  {
    id: 3,
    title: "Préparation à l'accouchement : techniques de respiration",
    excerpt: "Maîtrisez les techniques de respiration pour un accouchement plus serein.",
    content: "La respiration est un outil puissant pour gérer la douleur...",
    category: "Préparation",
    trimester: "3ème trimestre",
    author: "Aicha Mansouri",
    readTime: "10 min",
    date: "2024-01-10",
    featured: true
  },
  {
    id: 4,
    title: "Gestion des nausées matinales",
    excerpt: "Conseils pratiques pour soulager les nausées du premier trimestre.",
    content: "Les nausées matinales touchent environ 80% des femmes enceintes...",
    category: "Santé",
    trimester: "1er trimestre",
    author: "Dr. Amina Chakib",
    readTime: "5 min",
    date: "2024-01-08",
    featured: false
  },
  {
    id: 5,
    title: "Aménager la chambre de bébé selon la tradition marocaine",
    excerpt: "Créez un espace harmonieux alliant modernité et traditions marocaines.",
    content: "L'aménagement de la chambre de bébé est un moment magique...",
    category: "Préparation",
    trimester: "2ème trimestre",
    author: "Leila Benjelloun",
    readTime: "7 min",
    date: "2024-01-05",
    featured: false
  },
  {
    id: 6,
    title: "Sommeil et grossesse : optimiser votre repos",
    excerpt: "Améliorez la qualité de votre sommeil avec nos conseils d'experts.",
    content: "Le sommeil pendant la grossesse peut être perturbé...",
    category: "Bien-être",
    trimester: "Tout trimestre",
    author: "Dr. Nadia Tazi",
    readTime: "9 min",
    date: "2024-01-03",
    featured: true
  }
];

const categories = ["Tous", "Nutrition", "Sport & Bien-être", "Préparation", "Santé", "Bien-être"];
const trimesters = ["Tous", "1er trimestre", "2ème trimestre", "3ème trimestre", "Tout trimestre"];

const Conseils = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedTrimester, setSelectedTrimester] = useState("Tous");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory;
    const matchesTrimester = selectedTrimester === "Tous" || article.trimester === selectedTrimester;
    return matchesSearch && matchesCategory && matchesTrimester;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Nutrition": "bg-primary/10 text-primary border-primary/20",
      "Sport & Bien-être": "bg-secondary/10 text-secondary border-secondary/20",
      "Préparation": "bg-accent/30 text-accent-foreground border-accent/20",
      "Santé": "bg-primary/10 text-primary border-primary/20",
      "Bien-être": "bg-secondary/10 text-secondary border-secondary/20"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle);
    if (!article) return null;

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button 
            onClick={() => setSelectedArticle(null)}
            variant="outline"
            className="mb-8"
          >
            ← Retour aux articles
          </Button>
          
          <article className="space-y-8">
            <header className="space-y-4">
              <Badge className={getCategoryColor(article.category)}>
                {article.category}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground">{article.title}</h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
            </header>
            
            <div className="prose max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {article.excerpt}
              </p>
              <div className="text-foreground leading-relaxed space-y-4">
                <p>{article.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Filter className="w-4 h-4 mr-2" />
            Conseils d'Experts
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Conseils pour une</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">grossesse sereine</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Découvrez nos articles rédigés par des professionnels de santé 
            pour vous accompagner tout au long de votre grossesse.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Tabs defaultValue="category" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="category">Par catégorie</TabsTrigger>
              <TabsTrigger value="trimester">Par trimestre</TabsTrigger>
            </TabsList>
            
            <TabsContent value="category" className="mt-6">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gradient-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trimester" className="mt-6">
              <div className="flex flex-wrap justify-center gap-2">
                {trimesters.map((trimester) => (
                  <Button
                    key={trimester}
                    variant={selectedTrimester === trimester ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTrimester(trimester)}
                    className={selectedTrimester === trimester ? "bg-gradient-primary" : ""}
                  >
                    {trimester}
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Articles en vedette</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredArticles.map((article) => (
                  <Card 
                    key={article.id}
                    className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    onClick={() => setSelectedArticle(article.id)}
                  >
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                          {article.trimester}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Articles */}
          {regularArticles.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Tous les articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article) => (
                  <Card 
                    key={article.id}
                    className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    onClick={() => setSelectedArticle(article.id)}
                  >
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        <Badge variant="outline" className="bg-accent/20 text-accent-foreground border-accent/20">
                          {article.trimester}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Aucun article ne correspond à vos critères de recherche.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conseils;