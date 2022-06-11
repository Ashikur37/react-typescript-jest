import Card from "../card/Card";
import "./cards.css";
type Cat = {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: {
    url: string;
    alt: string;
  };
  favoured: boolean;
};
type Prop = {
  cats: Cat[];
};
const Cards = ({ cats }: Prop) => {
  return (
    <div className="pet-cards-container">
      {cats.map((cat) => (
        <Card key={cat.id} {...cat} />
      ))}
    </div>
  );
};

export default Cards;
