import { DefaultReporter } from 'vitest/reporters';

class CustomReporter extends DefaultReporter {
  shouldLogOnSuccess;

  constructor(shouldLogOnSuccess) {
    super();
    this.shouldLogOnSuccess = shouldLogOnSuccess;
  }

  onUserConsoleLog(log) {
    if (this.shouldLogOnSuccess) {
      super.onUserConsoleLog(log);
    }
  }
}

export default CustomReporter;
