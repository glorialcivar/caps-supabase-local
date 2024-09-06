// Pagination utility functions
import { buildNewPaginatedResponse } from "@simple/builders";
import { buildRawPaginatedResponseMeta } from "@simple/builders";
import { buildRawPaginatedResponse } from "@simple/builders";
import { PaginatedRequest } from "@simple/types";

export const prepareMockPaginated = <T extends Record<string, any>>(
  fullDataSet: T[],
  pagination: PaginatedRequest["pagination"],
  filters: PaginatedRequest["filters"],
  sorting: PaginatedRequest["sorting"] = {}
) => {
  const { page, pageSize } = pagination;
  const { query = "", field } = filters;
  const purgedByQuery = fullDataSet.filter(item => {
    return item[field]
      .trim()
      .toLocaleLowerCase()
      .includes(query.trim().toLocaleLowerCase());
  });

  const total = purgedByQuery.length;
  const from = (page - 1) * pageSize + 1;
  const to = page * pageSize;
  const data = purgedByQuery.slice(from - 1, to);
  const rawPaginated = buildRawPaginatedResponse(data, {
    meta: buildRawPaginatedResponseMeta({
      current_page: page,
      from,
      to,
      last_page: Math.ceil(total / pageSize),
      per_page: String(pageSize),
      total: total,
      path: ""
    })
  });
  return rawPaginated;
};

/*
 * TODO:* This should be remove when the pagination is standardized in the
 * backend
 */
export const prepareNewMockPaginated = <T extends Record<string, any>>(
  fullDataSet: T[],
  pagination: PaginatedRequest["pagination"]
) => {
  const { page, pageSize } = pagination;

  const total = fullDataSet.length;
  const to = page * pageSize;
  const from = to - pageSize;
  const hasMorePages = to < total;
  const data = fullDataSet.slice(from, to - 1);
  const newPaginated = buildNewPaginatedResponse(data, {
    page,
    hasMorePages,
    size: pageSize
  });
  return newPaginated;
};
