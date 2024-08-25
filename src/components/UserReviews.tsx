import React from "react";
import "../styles/UserReviews.css";
import likeIcon from "../assets/icons/social-network.svg";
import commentIcon from "../assets/icons/hand.svg";
import starIcon from "../assets/icons/star.svg";
import plusIcon from "../assets/icons/plus.svg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";
import socialNetworkIcon from "../assets/icons/social-network.svg";

const UserReviews: React.FC = () => {
  return (
    <section className="user-reviews">
      <header className="reviews-header">
        <h2 className="reviews-title">
          <img
            src={arrowRightIcon}
            alt="Arrow Right Icon"
            className="arrow-icon"
          />
          Avaliações de Usuários
        </h2>
        <button className="add-review-button">
          <img src={plusIcon} alt="Plus Icon" className="Plus_icon" />
          Avaliar
        </button>
      </header>
      <ReviewItem
        author="CaioHalbert"
        date="9 de novembro de 2022"
        rating="10/10"
        title="What an incredible sequel!"
        content="A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns, or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better armor, in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles. I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend you start with God of War (2018). If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible: Ragnarök is here and it is beautiful."
        likes={33}
        comments={11}
      />
      <ReviewItem
        author="ClaudiaRayara"
        date="14 de novembro de 2022"
        rating="10/10"
        title="This game took part of my soul..."
        content="Warning: Spoilers!"
        likes={24}
        comments={6}
      />
    </section>
  );
};

interface ReviewItemProps {
  author: string;
  date: string;
  rating: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  author,
  date,
  rating,
  title,
  content,
  likes,
  comments,
}) => {
  return (
    <article className="review-item">
      <header className="review-header">
        <div className="highlighted-review">Avaliação em Destaque</div>
        <div className="rating-container">
          <img src={starIcon} alt="Star" className="star-icon" />
          <span className="rating">{rating}</span>
        </div>
      </header>
      <div className="review-meta">
        <span className="author">{author}</span>
        <span className="date">{date}</span>
      </div>
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
      <footer className="interactions">
        <div className="likes">
          <img src={likeIcon} alt="Like Icon" />
          <span>{likes}</span>
        </div>
        <div className="comments">
          <img src={commentIcon} alt="Comment Icon" />
          <span>{comments}</span>
        </div>
        <div className="social-network">
          <img src={socialNetworkIcon} alt="Social Network Icon" />
        </div>
      </footer>
    </article>
  );
};

export default UserReviews;
