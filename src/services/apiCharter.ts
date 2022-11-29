import getResource from "./api";
import TypeCharter from "../typeData/typeCharter";

const getCharter = async (
    params: string | undefined
): Promise<TypeCharter> => {
    const additionUrl = params ? params : "";
    const charterList = await getResource(additionUrl);
    return charterList.json();
};

export default getCharter