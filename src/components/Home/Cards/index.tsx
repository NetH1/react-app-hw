import React from "react";
import styles from "./cards.module.css";

interface TennisCardProps {}

const TennisCard: React.FC<TennisCardProps> = () => {
  const cards = [
    { title: "5 летних грунтовых кортов" },
    { title: "Зал с покрытием “Искусственная трава”" },
    { title: "Зал с покрытием“Хард”" },
  ];
  return (
    <div className="flex items-center justify-around mt-36">
      {cards.map((card) => (
        <div className="border-[#F7ECE1] border py-6 px-5" key={card.title}>
          <div className={styles.card}>
            <span className="w-3/5 block mx-auto font-bold text-2xl">
              {card.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TennisCard;
