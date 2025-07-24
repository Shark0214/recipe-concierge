export class ExportWebhookWorker {
  handle(payload: any) {
    console.log('shopping_list_exported', payload);
  }
}
