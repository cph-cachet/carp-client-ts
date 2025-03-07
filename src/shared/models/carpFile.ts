export interface CarpFile {
  id: number;
  study_id: string;
  owner_id: string;
  deployment_id: string;
  original_name: string;
  storage_name: string;
  metadata: {
    [key: string]: string;
  };
  updated_at: string;
  updated_by: string;
  created_at: string;
  created_by: string;
}
