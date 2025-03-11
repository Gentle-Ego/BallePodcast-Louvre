
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { episodes } from '@/data/episodes';
import Header from '@/components/Header';
import AudioPlayer from '@/components/AudioPlayer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const EpisodeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const episode = episodes.find(ep => ep.id === id);
  
  if (!episode) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header showSearch={false} />
        <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Episode Not Found</h2>
          <p className="text-muted-foreground mb-6">The episode you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Episodes
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header showSearch={false} />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Episodes
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{episode.title}</h1>
            
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <span>{episode.date}</span>
              <span className="mx-2">•</span>
              <span>{episode.duration}</span>
            </div>
            
            <div className="mb-8">
              <AudioPlayer audioPath={episode.audioPath} />
            </div>
            
            <div className="prose prose-slate max-w-none">
              <h2 className="font-serif text-2xl font-bold mb-4">About this Episode</h2>
              <p className="text-foreground leading-relaxed">{episode.description}</p>
              
              <Separator className="my-8" />
              
              <div className="bg-muted p-6 rounded-lg border border-border">
                <h3 className="font-serif text-lg font-bold mb-3">Did you enjoy this episode?</h3>
                <p className="text-sm text-muted-foreground mb-4">Explore more episodes about the Louvre's magnificent collection.</p>
                <Button 
                  variant="default" 
                  className="bg-louvre-gold text-louvre-navy hover:bg-louvre-gold/90"
                  onClick={() => navigate('/')}
                >
                  Browse All Episodes
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden mb-6 border border-border">
                <img 
                  src={episode.imagePath} 
                  alt={episode.title} 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-serif text-lg font-bold mb-3">About the Louvre Podcast</h3>
                <p className="text-sm text-muted-foreground">
                  Join us as we explore the masterpieces, the hidden gems, and the fascinating stories behind 
                  the world's most famous museum. Each episode takes you on a journey through the halls of the Louvre, 
                  bringing art history to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-louvre-navy text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-xl font-bold mb-2">Louvre Podcast Explorer</h2>
          <p className="text-sm text-louvre-gold/80">&copy; {new Date().getFullYear()} - Discover the art and history of the world's most famous museum</p>
        </div>
      </footer>
    </div>
  );
};

export default EpisodeDetail;
