import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Maternité Sereine</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Votre compagnon de confiance pour une grossesse épanouie, 
              avec des conseils experts et une communauté bienveillante.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Conseils Grossesse', path: '/conseils' },
                { name: 'Prénoms Marocains', path: '/prenoms' },
                { name: 'À Propos', path: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Ressources</h3>
            <ul className="space-y-3">
              {[
                'Guide de grossesse',
                'Calculateur de grossesse',
                'Conseils nutrition',
                'Exercices prénatal',
                'Préparation accouchement'
              ].map((resource) => (
                <li key={resource}>
                  <a 
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-primary-foreground/80">
              Recevez nos conseils hebdomadaires directement dans votre boîte mail.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Votre email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button 
                variant="secondary" 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-medium">Téléphone</p>
                <p className="text-primary-foreground/80">+212 5 22 XX XX XX</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-primary-foreground/80">contact@maternite-sereine.ma</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-primary-foreground/80">Casablanca, Maroc</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Maternité Sereine. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;