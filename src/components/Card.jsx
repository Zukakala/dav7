import styles from './Card.module.css';

const Card = ({ image, title, description, price, rating, buttonColor }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}</p>
      <div className={styles.stars}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <button style={{ backgroundColor: buttonColor }} className={styles.button}>
        Buy Now
      </button>
    </div>
  );
};

export default Card;
