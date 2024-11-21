import { createContext, useContext, useState } from "react";

const VideoManagerContext = createContext();
export const useVideoManager = () => useContext(VideoManagerContext);

export default function VideoManager({ children }) {
  const [playerVideo, setPlayerVideo] = useState('https://youtu.be/McM3CfDjGs0?si=miumzViVcKRT8HEK');

 
  return (
    <VideoManagerContext.Provider value={{ playerVideo, setPlayerVideo }}>
      {children}
    </VideoManagerContext.Provider>
  );
}
