export type PaginatedResponseDto<T> = {
  page?: number | null;
  size?: number | null;
  total?: number | null;
  content: Array<T>;
};
