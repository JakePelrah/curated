import { useEffect, useState } from "react";
import { useVideoManager } from "./VideoProvider";

const noembed = "https://noembed.com/embed?url=";
export default function VideoCard({ url }) {
  const { setPlayerVideo } = useVideoManager();
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(`${noembed}${url}`)
      .then((res) => res.json())
      .then(({ title, thumbnail_url }) => {
        setImgSrc(thumbnail_url);
        setTitle(title);
      });
  }, []);

  return (
    <div className="col mb-5">
      <div onClick={() => setPlayerVideo(url)} className="card">
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
        </div>
      </div>
    </div>
  );
}
