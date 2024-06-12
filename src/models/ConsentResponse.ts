export interface ConsentResponse {
  id: number;
  deployment_id: string;
  created_at: string;
  created_by: string;
  updated_by: string;
  updated_at: string;
  data: {
    text: string;
    signature: string;
  };
}
