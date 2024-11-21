import ReactPlayer from "react-player/youtube";
import { useVideoManager } from "./VideoProvider";
import Recommended from "./Recommended";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./App.css";

const videos = [
  "https://youtu.be/al08aGQTkFk?si=2KMVTWvpquzCg-8J",
  "https://youtu.be/o1ED4FQjDGk?si=1NVOqYXnGC5zZ_-M",
  "https://youtu.be/IlkdW1Mrgpc?si=NQy3VvF_5-LXr60D",
  "https://youtu.be/vOo3TLgL0kM?si=OH-yJK9-2Xaqob7w",
  "https://youtu.be/al08aGQTkFk?si=2KMVTWvpquzCg-8J",
  "https://youtu.be/o1ED4FQjDGk?si=1NVOqYXnGC5zZ_-M",
  "https://youtu.be/IlkdW1Mrgpc?si=NQy3VvF_5-LXr60D",
  "https://youtu.be/vOo3TLgL0kM?si=OH-yJK9-2Xaqob7w",
  "https://youtu.be/al08aGQTkFk?si=2KMVTWvpquzCg-8J",
  "https://youtu.be/o1ED4FQjDGk?si=1NVOqYXnGC5zZ_-M",
  "https://youtu.be/IlkdW1Mrgpc?si=NQy3VvF_5-LXr60D",
  "https://youtu.be/vOo3TLgL0kM?si=OH-yJK9-2Xaqob7w",
  "https://youtu.be/al08aGQTkFk?si=2KMVTWvpquzCg-8J",
  "https://youtu.be/o1ED4FQjDGk?si=1NVOqYXnGC5zZ_-M",
  "https://youtu.be/IlkdW1Mrgpc?si=NQy3VvF_5-LXr60D",
  "https://youtu.be/vOo3TLgL0kM?si=OH-yJK9-2Xaqob7w",
];


function App() {
  const { playerVideo } = useVideoManager();

  return (
    <>
      <div className="d-flex">
        <Sidebar />

        <div className="d-flex flex-column align-items-center mt-3 px-4">
          <ReactPlayer
            width="100%"
            height="50vh"
            url={playerVideo}
            controls={true}
            light={true}        
          />
          <hr />
          <div className="d-flex">
            <Recommended videos={videos} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
