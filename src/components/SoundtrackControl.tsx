import { useEffect, useState } from 'react';
import { isCinematicMusicOn, toggleCinematicMusic } from '../audio';
export default function SoundtrackControl() {
  const [on, setOn] = useState(false);
  useEffect(() => { const sync = () => setOn(isCinematicMusicOn()); window.addEventListener('cinematicmusicchange', sync); return () => window.removeEventListener('cinematicmusicchange', sync); }, []);
  return <button type="button" onClick={() => setOn(toggleCinematicMusic())} aria-label={on ? 'Mute cinematic soundtrack' : 'Play cinematic soundtrack'} title={on ? 'Mute soundtrack' : 'Play soundtrack'} className="fixed bottom-5 right-5 z-[100] flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-black/65 px-4 text-[10px] font-bold tracking-[0.16em] text-bone shadow-lg backdrop-blur-xl transition hover:border-white/50 sm:bottom-7 sm:right-7"><span aria-hidden>{on ? '♫' : '♪'}</span><span>{on ? 'SOUND ON' : 'SOUND OFF'}</span></button>;
}
