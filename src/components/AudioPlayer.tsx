
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Rewind, FastForward, Play, Pause } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

interface AudioPlayerProps {
  audioPath: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioPath }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);

    // Cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [audioRef]);

  // Set volume
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleTimeChange = (newValue: number[]) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = newValue[0];
      setCurrentTime(newValue[0]);
    }
  };

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue[0]);
  };

  const handleBackward = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.max(0, audio.currentTime - 10);
    }
  };

  const handleForward = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.min(duration, audio.currentTime + 10);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-card rounded-lg p-4 shadow-md border border-border">
      <audio ref={audioRef} src={audioPath} preload="metadata" />
      
      <div className="flex items-center gap-3 mb-3">
        <Slider
          value={[currentTime]}
          min={0}
          max={duration || 100}
          step={0.1}
          onValueChange={handleTimeChange}
          className="w-full"
        />
        <span className="text-sm text-muted-foreground w-20 text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full" 
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume]}
            min={0}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
            className="w-20"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full" 
            onClick={handleBackward}
          >
            <Rewind className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="default" 
            size="icon" 
            className="h-12 w-12 rounded-full bg-louvre-gold text-louvre-navy hover:bg-louvre-gold/90 hover:text-louvre-navy"
            onClick={togglePlay}
          >
            {isPlaying ? 
              <Pause className="h-6 w-6" /> : 
              <Play className="h-6 w-6 ml-0.5" />
            }
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full" 
            onClick={handleForward}
          >
            <FastForward className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="w-[88px]"></div> {/* Spacer for balance */}
      </div>
    </div>
  );
};

export default AudioPlayer;
