const ReplaceParameterInSearchString = (
  search: string,
  param: string,
  paramValue: string | number
) => {
  const arraySearchParams = search.slice(1).split("&");
  const newParams = param + `=` + paramValue;
  const indexParameterInSearchString = arraySearchParams.findIndex((current) =>
    current.includes(param)
  );
  if (indexParameterInSearchString >= 0 && !paramValue)
    return (
      `?` +
      [
        ...arraySearchParams.slice(0, indexParameterInSearchString),
        ...arraySearchParams.slice(indexParameterInSearchString + 1),
      ].join("&")
    );
  return indexParameterInSearchString < 0
    ? `?` + [...arraySearchParams, newParams].join("&")
    : `?` +
      [
        ...arraySearchParams.slice(1, indexParameterInSearchString),
        newParams,
        ...arraySearchParams.slice(indexParameterInSearchString + 1),
      ].join("&");
};

export default ReplaceParameterInSearchString;
