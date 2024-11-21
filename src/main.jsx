import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import VideoManager from './VideoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <VideoManager>
    <App />
  </VideoManager>
)
