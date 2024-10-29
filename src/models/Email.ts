export interface GenericEmailRequest {
  recipient: string;
  subject: string;
  message: string;
  cc?: string[];
}
