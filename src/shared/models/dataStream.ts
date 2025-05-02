type ISO8601String = string & { __brand: "ISO8601" };
type DataStreamType =
  | "survey"
  | "health"
  | "cognition"
  | "image"
  | "audio"
  | "video"
  | "informed_consent";
type DataStreamScope = "study" | "deployment" | "participant";

export interface DataStreamSummaryRequest {
  study_id: string;
  deployment_id?: string;
  participant_id?: string;
  scope: DataStreamScope;
  type: DataStreamType;
  from: ISO8601String;
  to: ISO8601String;
}

export interface DateTaskQuantityTriple {
  date: ISO8601String;
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
  from: ISO8601String;
  to: ISO8601String;
}
