import { DefaultReporter } from 'vitest/reporters';

class CustomReporter extends DefaultReporter {
  constructor() {
    super();
    this.originalConsoleError = console.error;
    this.errorMessages = [];

    console.error = (...args) => {
      this.errorMessages.push(args);
    };
  }

  // console log errors only if the test fails
  onTestEnd(test) {
    if (test.status === 'fail' && this.errorMessages.length) {
      console.error('Error messages:', this.errorMessages);
    }
    this.errorMessages = [];
  }
}

export default CustomReporter;
