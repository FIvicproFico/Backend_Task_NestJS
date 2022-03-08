export interface IMailOptions {
  from: string;
  to: string;
  subject: string;
  text?: string;
  template?: string;
  context?: object;
}
