export type StepFunction = () => void;

export class Flow {

  private steps: StepFunction[];
  private currentStepIndex: number;

  constructor(steps: StepFunction[]) {
    this.steps = steps;
    this.currentStepIndex = 0;
  }

  executeSteps() {
    this.currentStepIndex++;
    if (this.currentStepIndex > this.steps.length) {
      throw new Error(`Missing a step: attempted to execute step ${this.currentStepIndex + 1} when there are only ${this.steps.length} steps.`);
    }
    for (let i = 0; i <= this.currentStepIndex; i++) {
      this.steps[i]();
    }
  }

}

export function expectRoute(route: string) {
  cy.location().should((location) => {
    expect(location.pathname).to.eq(route);
  });
}