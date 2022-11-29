import { useQuery } from "@tanstack/react-query";
import getCharter from "../../../services/apiCharter";
import { useLocation } from "react-router-dom";
import styles from "./character-modal.module.scss";
const CharacterModal = () => {
  const { hash } = useLocation();
  const {
    isLoading: isLoading,
    error: error,
    data: charactersData,
  } = useQuery(["character", hash], () => getCharter(`/` + hash.slice(1)), {
    keepPreviousData: true,
  });
  if (isLoading) return <div> грузится </div>;
  if (error || !charactersData) return <div> ошибка </div>;
  console.log(charactersData);
  return (
    <div className={styles["character-modal"]}>
      <img src={charactersData.image} />
        <h1 className={styles.title}> {charactersData.name} </h1>
    </div>
  );
};

export default CharacterModal;
