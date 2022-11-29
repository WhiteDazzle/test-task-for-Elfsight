import getResource from "./api";
import TypeCharactersResponse from "../typeData/TypeChartersListResponce";

const getChartersList = async (
  params: string
): Promise<TypeCharactersResponse> => {
  const additionUrl = params ? params : "";
  const charterList = await getResource(additionUrl);
  return charterList.json();
};

export default getChartersList;