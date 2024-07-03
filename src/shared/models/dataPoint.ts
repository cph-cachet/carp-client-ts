export interface DataPoint {
  carp_header: {
    study_id: string; // should propably be a number or UUID
    user_id: string;
    device_role_name: string;
    trigger_id: string;
    data_format: {
      namepace: string; // spelled wrong
      name: string;
    };
    start_time: string;
  };
  carp_body: {
    classname: string;
    id: string;
    timestamp: string;
    device_info: unknown; // not sure what this is supposed to hold
    latitude: number;
    longitude: number;
    altitude: number; // relevant
    accuracy: number;
    speed: number;
    speed_accuracy: number;
  };
}

export interface DataPointResponse {
  id: number;
  study_id: string;
  created_by_user_id: number;
  carp_header: {
    study_id: string; // should propably be a number or UUID
    device_role_name: string;
    trigger_id: string;
    data_format: {
      namepace: string; // spelled wrong
      name: string;
    };
    start_time: string;
  };
  carp_body: {
    classname: string;
    id: string;
    timestamp: string;
    device_info: unknown; // not sure what this is supposed to hold
    latitude: number;
    longitude: number;
    altitude: number; // relevant
    accuracy: number;
    speed: number;
    speed_accuracy: number;
  };
  created_at: string;
  updated_at: string;
}
