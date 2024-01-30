import "./css/card.css";

function Card() {
  return (
    <div className="card">
      <img
        src="./src/images/illustration-article.svg"
        alt="illustration article"
      />
      <br />
      <br />
      <div className="text">
        <p>Learning</p>
        <br />
        <p>Published 21 Dec 2023</p>
        <br />
        <a href="#" target="_blank">
          <h2>HTML & CSS foundations</h2>
        </a>
        <br />
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <br />
        <div className="avatar">
          <img src="./src/images/image-avatar.webp" alt="" />
          <p>Grey Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
