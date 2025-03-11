
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import EpisodeCard from '@/components/EpisodeCard';
import { episodes } from '@/data/episodes';

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredEpisodes = useMemo(() => {
    if (!searchQuery.trim()) return episodes;
    
    const normalizedQuery = searchQuery.toLowerCase().trim();
    return episodes.filter(episode => 
      episode.title.toLowerCase().includes(normalizedQuery)
    );
  }, [searchQuery]);

  // Get featured episodes
  const featuredEpisodes = useMemo(() => 
    episodes.filter(episode => episode.featured),
    []
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        {searchQuery.trim() ? (
          <>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Search Results: <span className="text-muted-foreground font-normal">"{searchQuery}"</span>
            </h2>
            
            {filteredEpisodes.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No episodes found</h3>
                <p className="text-muted-foreground">Try searching with different keywords</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEpisodes.map(episode => (
                  <EpisodeCard key={episode.id} episode={episode} />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {featuredEpisodes.length > 0 && (
              <div className="mb-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Featured Episodes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredEpisodes.map(episode => (
                    <EpisodeCard key={episode.id} episode={episode} featured={true} />
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">All Episodes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {episodes.map(episode => (
                  <EpisodeCard key={episode.id} episode={episode} />
                ))}
              </div>
            </div>
          </>
        )}
      </main>
      
      <footer className="bg-louvre-navy text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-xl font-bold mb-2">Louvre Podcast Explorer</h2>
          <p className="text-sm text-louvre-gold/80">&copy; {new Date().getFullYear()} - Discover the art and history of the world's most famous museum</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
