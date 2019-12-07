export class NotificationUtil {
  component;
  ERROR_DURATION = 0;
  SUCCESS_DURATION = 2000;

  constructor(component) {
    this.component = component;
  }

  sendSuccessMessage(message) {
    this.component.$notify.success({
      duration: this.SUCCESS_DURATION,
      type: "success",
      title: "Success",
      message
    });
  }

  sendErrorMessage(message) {
    this.component.$notify.error({
      duration: this.ERROR_DURATION,
      type: "error",
      title: "Error",
      message
    });
  }
}
