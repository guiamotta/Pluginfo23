import { useState } from 'react';
import styles from "../styles/FavoriteButton.module.css"

type FavoriteButtonProps = {
  onToggleFavorite: () => void;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    onToggleFavorite();
  };

  return (
    <button className={styles.starButton} onClick={handleClick}>
      {isFavorite ? (
        <span className={styles.star}>★</span> // Display filled star icon
      ) : (
        <span className={styles.star}>☆</span> // Display empty star icon
      )}
    </button>
  );
};

export default FavoriteButton;
