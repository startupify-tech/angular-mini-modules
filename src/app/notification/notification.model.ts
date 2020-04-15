export class Notification {
  public title: string;
  public text: string;
  public targetUrl?: string;
  public read?: boolean;
  public createdAt?: number;
  // public attributes?: {};
  // public actions?: {};

  constructor() {
    this.read = false;
  }
};
