import TypeCharter from "./typeCharter";

type TypeCharactersResponse = {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: TypeCharter[];
}
export default TypeCharactersResponse