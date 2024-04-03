import { sortingOptions } from "../data/sortingOprions";
import { ISelectedSort } from "../types/initialStates";

export const generateUrl = (options: ISelectedSort): string => {
  if (!options) return "";
  const order = sortingOptions?.order.en[options.order];
  const sort = sortingOptions?.sort.en[options.sort];
  return `https://api.stackexchange.com/2.3/tags?order=${order}&sort=${sort}&site=stackoverflow`;
};
