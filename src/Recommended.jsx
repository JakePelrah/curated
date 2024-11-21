import VideoCard from "./VideoCard";


export default function Recommended({ videos }) {
  const renderVideoCards = videos.map((url, i) => <VideoCard key={i} url={url} />);
  return (
    <div className="recommended">
      <div
        className="row row-cols-1 
        row-cols-sm-2 
        row-cols-md-3 
        row-cols-lg-4"
      >
        {renderVideoCards}
      </div>
    </div>
  );
}
