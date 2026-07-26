
import "./App.css";
import ImageCard from "./components/ImageCard";
import images from "./images";

function App() {
  return (
   <>
  <div className="hero">
    <span className="hero-badge"><img src="/bird_icon.svg" alt="Bird icon" width={16} height={16} /> Feathers & Flight</span>
    <h1 className="title">Bird Gallery</h1>
    <p className="subtitle">
      Explore a vibrant flock of the world's most captivating birds —
      from dazzling peacocks to silent owls and soaring eagles.
    </p>
  </div>

  <div className="gallery">
    {images.map((item) => (
      <ImageCard
        key={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
      />
    ))}
  </div>
</>

  );
}

export default App;