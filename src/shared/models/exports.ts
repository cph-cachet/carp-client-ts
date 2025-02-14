export interface Export {
  id: string;
  created_at: Date;
  file_name: string;
  status: string;
  study_id: string;
  type: string;
}

export interface ExportToDownload {
  filename: string;
  data: ExportData;
}

export interface ExportData {
  id: string;
  created_at: Date;
  status: string;
}

export interface GeneratedAccountsToDownload {
  filename: string;
  data: string;
}
