export type TNullish = null | undefined;

export type TApiResponse<T> = {
   success: boolean;
   message: string;
   data: T;
};