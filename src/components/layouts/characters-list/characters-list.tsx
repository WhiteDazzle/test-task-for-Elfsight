import React, { useEffect, useState } from "react";
import CharacterCard from "../../blocks/Character-card/Character-card";

import styles from "./characters-list.module.scss";
import typeCharter from "../../../typeData/typeCharter";
import { useQuery } from "@tanstack/react-query";
import getChartersList from "../../../services/api-charters-list";
import { Pagination, Modal } from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReplaceParameterInSearchString from "../../../assets/functions/ReplaceParameterInSearchString";
import CharacterModal from "../../blocks/character-modal/character-modal";

const CharactersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { search, hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const newSearchString = ReplaceParameterInSearchString(
      search,
      "page",
      currentPage
    );
    navigate(newSearchString);
  }, [search, currentPage, navigate]);
  const {
    isLoading: isLoadingList,
    error: errorList,
    data: charactersListData,
  } = useQuery(["charactersList", search], () => getChartersList(search), {
    keepPreviousData: true,
  });
  if (isLoadingList) return <div> загрузка </div>;
  if (errorList || !charactersListData?.results) return <div> ошибка </div>;

  const createCharacterCard = (character: typeCharter) => {
    return (

        <li className={styles["card-wrapper"]} key={character.id} tabIndex={0}>
          <Link to={search + `#` + character.id}>
          <CharacterCard {...character} />
          </Link>
        </li>
    );
  };

  return (
      <div>
    <ul className={styles['character-list']}>
      {charactersListData.results.map(createCharacterCard)}
    </ul>
        {charactersListData?.info.pages && charactersListData?.info.pages > 1 && (<Pagination
        count={charactersListData?.info.pages || 1}
        page={currentPage}
        onChange={(e, page) => setCurrentPage(page)}
        />
        )}
        <Modal open={!!hash} onClose={() => navigate(-1)}>
          <div className={styles[`character-info`]}>
            <button className={styles['button-close']} onClick={() => navigate(-1)}>  </button>
          <CharacterModal/>
          </div>
        </Modal>
    </div>
  );
};
export default CharactersList;
