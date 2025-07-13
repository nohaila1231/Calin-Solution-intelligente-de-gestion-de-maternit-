import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Baby, BookOpen, User, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/', icon: Heart },
    { name: 'Conseils Grossesse', path: '/conseils', icon: BookOpen },
    { name: 'Prénoms Marocains', path: '/prenoms', icon: Baby },
    { name: 'À Propos', path: '/about', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-border/20 sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-border/10 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center space-x-6 text-primary-foreground/90">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+212 5 22 XX XX XX</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>contact@maternite-sereine.ma</span>
              </div>
            </div>
            <div className="text-primary-foreground/90 font-medium">
              Consultations 24h/7j
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-soft">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                <Baby className="w-2 h-2 text-secondary-foreground" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Maternité Sereine
              </span>
              <div className="text-xs text-muted-foreground font-medium">
                Votre compagnon de grossesse
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group",
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Urgences
            </Button>
            <Button 
              className="bg-gradient-primary hover:opacity-90 shadow-card transition-all duration-300 px-6"
            >
              Consultation Gratuite
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-card rounded-lg mt-2 shadow-card animate-fade-in">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300",
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;