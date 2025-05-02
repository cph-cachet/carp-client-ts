export type DataStreamType =
  | "survey"
  | "health"
  | "cognition"
  | "image"
  | "audio"
  | "informed_consent"
  | "sensing";
export type DataStreamScope = "study" | "deployment" | "participant";

export interface DataStreamSummaryRequest {
  study_id: string;
  deployment_id?: string;
  participant_id?: string;
  scope: DataStreamScope;
  type: DataStreamType;
  from: string; // ISO8601String;
  to: string; // ISO8601String;
}

export interface DateTaskQuantityTriple {
  date: string; // ISO8601String;
  task: string;
  quantity: number;
}

export interface DataStreamSummary {
  data: DateTaskQuantityTriple[];
  study_id: string;
  deployment_id: string;
  participant_id: string;
  scope: DataStreamScope;
  type: DataStreamType;
  from: string; // ISO8601String;
  to: string; // ISO8601String;
}
