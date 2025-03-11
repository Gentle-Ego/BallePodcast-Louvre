import React from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';
import { useTheme } from './ThemeProvider';

interface HeaderProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  searchQuery = '', 
  setSearchQuery = () => {}, 
  showSearch = true 
}) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2" onClick={() => navigate('/')} role="button">
          {/* Removed extra container and use logoicon.png */}
          <img 
            src="/logoicon.png" 
            alt="Louvre Logo" 
            className={`h-10 w-10 ${theme === 'dark' ? 'filter invert' : ''}`}
          />
          <h1 className="font-serif text-xl md:text-2xl font-bold">
            Balle<span className="text-louvre-gold">Podcast</span> Louvre Edition
          </h1>
        </div>
        
        {showSearch && (
          <div className="flex items-center gap-3 w-full md:w-1/3">
            <div className="flex items-center gap-2">
              {theme === 'light' ? (
                <Sun className="h-5 w-5 text-louvre-gold cursor-pointer" onClick={toggleTheme} />
              ) : (
                <Moon className="h-5 w-5 text-louvre-gold cursor-pointer" onClick={toggleTheme} />
              )}
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-louvre-navy"
              />
            </div>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-10 bg-muted border-none"
                placeholder="Search episodes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
