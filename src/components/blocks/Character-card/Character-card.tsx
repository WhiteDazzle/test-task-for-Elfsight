import React from "react";
import TypeCharter from "../../../typeData/typeCharter";
import styles from './Character-card.module.scss'
const CharacterCard = ({
                         name,
  image,
}: TypeCharter) => {
  return (
    <div className={styles['Character-card']}>
      <img className={styles.img} src={image} />
      <p>{name}</p>
    </div>
  );
};
export default CharacterCard;
