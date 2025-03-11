
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

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

  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2" onClick={() => navigate('/')} role="button">
          <div className="bg-louvre-navy text-louvre-gold h-10 w-10 rounded-md flex items-center justify-center">
            <h1 className="font-serif text-xl font-bold">L</h1>
          </div>
          <h1 className="font-serif text-xl md:text-2xl font-bold">
            Louvre <span className="text-louvre-gold">Podcast</span>
          </h1>
        </div>
        
        {showSearch && (
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10 bg-muted border-none"
              placeholder="Search episodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
