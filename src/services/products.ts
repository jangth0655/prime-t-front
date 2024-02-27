import { api } from "./httpClient";

export type WAITING = "WAITING";
export type ENABLED = "ENABLED";
export type DISABLED = "DISABLED";
export type COMPLETED = "COMPLETED";

export type ProductType = "TYPE_A" | "TYPE_B" | "TYPE_C";
export type ProductProgressStatus = WAITING | ENABLED | DISABLED | COMPLETED;

export type ProductAllArg = {
  prd_type: ProductType;
  prd_progress_status?: ProductProgressStatus;
  offset?: number;
  limit?: number;
  search?: string;
  sort?: "id" | "-id";
};

export const getProductAll = async ({
  limit = 10,
  sort = "id",
  offset = 0,
  ...rest
}: ProductAllArg) => {
  const { prd_progress_status, prd_type, search } = rest;
  const response = (
    await api.get<Promise<ProductList>>(`/products`, {
      params: {
        prd_type,
        limit,
        sort,
        offset,
        ...(prd_progress_status && { prd_progress_status }),
        ...(search && { search }),
      },
    })
  ).data;

  return response;
};

export type ProductList = {
  total_count: number;
  total_count_filtered: number;
  pagination_pages: number;
  items: Product[];
};

export type Product = {
  id: number;
  prd_type: ProductType;
  prd_name: string;
  prd_progress_status: ProductProgressStatus;
  sales_start_dt: Date;
  sales_end_dt: Date;
  settle_start_dt: Date;
  settle_end_dt: Date;
  crypto_name: string;
  crypto_code: string;
  crypto_conv_rate: number;
  issue_qty: number;
  remain_qty: number;
  achv_rate: number;
  exp_return_rate: number;
  return_rate: number;
};
