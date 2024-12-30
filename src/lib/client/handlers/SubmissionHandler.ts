export default class SubmissionHandler {
  static async sendToServer(data: any): Promise<any> {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
