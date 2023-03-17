export type ALink = '_blank' | '_parent' | '_top' | '_self';

export type HistoryItemType = {
    label: string,
    path?: string,
    query?: any,
    target?: ALink,
    extend?: boolean
}

export type HistoryType = Array<HistoryItemType>;

export interface HistoryState {
    //所有记录集合
    list: Array<HistoryType>,
    current: HistoryType,
    [key: string]: unknown;
}