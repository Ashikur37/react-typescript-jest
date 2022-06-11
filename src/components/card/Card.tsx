import "./card.css";
import heartFilled from "../../svgs/heartFilled.svg";
import heartOutlined from "../../svgs/heartOutlined.svg";
import { useState } from "react";

type Props = {
  name: string;
  phone: string;
  email: string;
  image: {
    url: string;
    alt: string;
  };
  favoured: boolean;
};

function Card({ name, phone, email, image: { url, alt }, favoured }: Props) {
  const [isFavored, setIsFavored] = useState(favoured);
  return (
    <article className="card">
      <div className="card-header">
        <img src={url} alt={alt} className="card-img" />
        <button className="heart" onClick={() => setIsFavored(!isFavored)}>
          {isFavored ? (
            <img src={heartFilled} alt="filled heart" />
          ) : (
            <img src={heartOutlined} alt="outlined heart" />
          )}
        </button>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </article>
  );
}

export default Card;
