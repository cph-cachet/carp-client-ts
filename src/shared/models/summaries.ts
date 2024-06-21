export interface Summary {
  id: string;
  created_at: Date;
  file_name: string;
  status: string;
}

export interface SummaryToDownload {
  filename: string;
  data: SummaryData;
}

export interface SummaryData {
  id: string;
  created_at: Date;
  status: string;
}

export interface GeneratedAccountsToDownload {
  filename: string;
  data: string;
}
