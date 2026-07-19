import { CanDeactivateFn } from '@angular/router';

export const canExitGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  return true;
};
