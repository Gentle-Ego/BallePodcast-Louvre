
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Episode } from '@/data/episodes';
import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface EpisodeCardProps {
  episode: Episode;
  featured?: boolean;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, featured = false }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/episode/${episode.id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className={cn(
        "episode-card cursor-pointer rounded-lg overflow-hidden bg-card border border-border",
        featured ? "col-span-full md:col-span-2" : "col-span-1",
      )}
    >
      <div className="relative">
        <img 
          src={episode.imagePath} 
          alt={episode.title} 
          className={cn(
            "w-full h-48 object-cover",
            featured && "h-64 md:h-80"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
          <div className="text-white">
            {featured && (
              <Badge variant="secondary" className="mb-2 bg-louvre-gold text-louvre-navy">
                Featured Episode
              </Badge>
            )}
            <h3 className="font-serif text-lg md:text-xl font-bold leading-tight mb-1">{episode.title}</h3>
            <div className="flex items-center text-sm space-x-2">
              <span>{episode.date}</span>
              <span>•</span>
              <span>{episode.duration}</span>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-louvre-gold/85 rounded-full p-2 backdrop-blur-sm">
          <Play className="h-5 w-5 text-louvre-navy" />
        </div>
      </div>
      <div className={cn(
        "p-4 bg-card",
        featured ? "md:p-6" : ""
      )}>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {episode.description}
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
