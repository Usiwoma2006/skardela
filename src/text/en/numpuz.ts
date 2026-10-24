// The text of the Numpuz puzzle type.
export const numpuz = {
  name: "Numpuz",
  summary: "Fill each blank with + \u2212 \u00d7 or \u00f7 to reach the target number.",
  tagline: "Fill in the operators",
  rules: [
    "Fill each blank between the numbers with + \u2212 \u00d7 or \u00f7.",
    "The equation must be equal to the target number.",
    "\u00d7 and \u00f7 are worked out before + and \u2212.",
    "Each blank takes one operator.",
  ],
  boardLabel: "Numpuz board",
  target: (target: number) => `Target: ${target}`,
  operatorSymbols: { "+": "+", "-": "\u2212", "\u00d7": "\u00d7", "\u00f7": "\u00f7" },
  operatorNames: { "+": "plus", "-": "minus", "\u00d7": "times", "\u00f7": "divided by" },
  blank: (blank: { position: number; operator: string }) =>
    `Blank ${blank.position}, ${blank.operator === "" ? "empty" : blank.operator}`,
  key: (name: string) => `Put ${name} in the selected blank`,
  checkButton: "Check",
  status: {
    start: "Select a blank. Then choose an operator.",
    incomplete: "Fill every blank before you check.",
    wrong: "Not yet. The equation is not equal to the target. Try again.",
    solved: "You solved the puzzle. The equation is equal to the target.",
  },
};