export function calculateIncomeTax(income: number): number {
  if (income <= 2259.2) {
    return 0;
  }

  if (income <= 2826.65) {
    return income * 0.075;
  }

  if (income <= 3751.05) {
    return income * 0.15;
  }

  if (income <= 4664.68) {
    return income * 0.225;
  }

  return income * 0.275;
}
