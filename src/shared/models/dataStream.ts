import { CompletedTask, Data } from "../coreTypes";

export type DataStreamType =
  | "survey"
  | "health"
  | "cognition"
  | "image"
  | "audio"
  | "video"
  | "informed_consent"
  | "sensing"
  | "one_time_sensing";
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

export class CompletedAppTask extends CompletedTask {
  public static dataType = "dk.cachet.carp.completedapptask";

  public completedAt: Date;

  constructor(
    taskName: string,
    public taskType: DataStreamType,
    taskData?: Data | null,
  ) {
    super(taskName, taskData as any);
  }
}
