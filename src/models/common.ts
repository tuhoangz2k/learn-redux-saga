export interface PaginationParams {
    _limit: number;
    _page: number;
    _totalRows: number;
}
export interface ListReponse<T> {
    data: T[];
    pagination: PaginationParams;
}
