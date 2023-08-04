const options = [
  { label: 'Home', value: '/' },
  { label: 'Presidential Race', value: '/president' },
];

const unclickables = ["Independent", "Write-ins", "None of these candidates"];

const questionsWithOptions = {
  "What is your stance on abortion?": [
    "Pro-life, and I also oppose abortion for victims of rape and incest",
    "Pro-life, but allow in cases of rape, incest, or danger to the mother or child",
    "Pro-choice, but ban after the first three months",
    "Pro-choice, I don’t agree but the government has no right to ban it",
    "Pro-choice, and providing birth control, sex education, and more social services will help reduce the number of abortions"
  ],
  "Should convicted criminals have the right to vote?": [
    "Yes, every citizen deserves the right to vote",
    "Yes, except for felons convicted of murder or violent crimes",
    "Yes, but only after completing their sentences and parole/probation",
    "No"
  ],
  "Should funding for local police departments be redirected to social and community-based programs?": [
    "Yes, and abolish the police",
    "Yes, replace police with unarmed community-based responders for non-violent calls",
    "No, increase funding and training for police departments in higher crime rate communities"
  ],
  "Should the government increase or decrease military spending?": [
    "Increase",
    "Increase, but only after our deficit is drastically reduced",
    "Neither, I am satisfied with the current amount of spending",
    "Decrease"
  ],
  "Should the federal government increase funding of entitlements, such as Medicaid, Medicare, Social Security, and Unemployment?": [
    "Yes",
    "Yes, but only increase for the elderly and disabled",
    "No, and each state should decide their own level of coverage",
    "No, and eligibility should only include the elderly and disabled",
    "No, the federal government should not increase funding for any social programs",
    "No, and abolish all entitlements"
  ],
  "Should the U.S. raise taxes on the rich?": [
    "Yes",
    "Yes, but raise taxes on all other income brackets as well",
    "No, but lower taxes for the poor",
    "No, keep the current tax structure",
    "No, reform to a flat tax",
    "No, lower the income tax rate and remove all existing tax loopholes for large corporations",
    "No, abolish the income tax, disallow all deductions and increase the sales tax"
  ],
  "If found guilty, should former President Trump be pardoned for mishandling classified documents?": [
    "Yes, he did nothing wrong",
    "Yes, this indictment represents a political double standard",
    "No, no one is above the law"
  ],
  "Should the government increase environmental regulations to prevent climate change?": [
    "Yes, and provide more incentives for alternative energy production",
    "No, provide more incentives for alternative energy production instead",
    "No, tax carbon emissions instead",
    "No, global warming is a natural occurrence and there's nothing we can do"
  ],
  "Should the government raise the federal minimum wage?": [
    "Yes, make it a living wage",
    "Yes, and adjust it every year according to inflation",
    "No",
    "No, and remove any federal minimum wage"
  ],
  "Should there be more restrictions on the current process of purchasing a gun?": [
    "Yes, all guns should be banned from private citizen ownership.",
    "Yes, ban all guns except hunting rifles",
    "Yes, ban assault rifles",
    "Yes, require more stringent background checks, training, and add more psychological testing.",
    "No, current laws are already sufficient",
    "No, except to expand to individuals with mental health issues.",
    "No, the government should not infringe on the second amendment.",
    "No, a citizen has the right to bear arms in private and public."
  ],
  "Should the federal government pay for tuition at four-year colleges and universities?": [
    "Yes",
    "Yes, but only for partial tuition",
    "No, but provide lower interest rates for student loans",
    "No, but provide more scholarship opportunities for low-income students",
    "No"
  ],
  "Do you support affirmative action programs?": [
    "Yes, but it's only a band-aid trying to heal a much larger issue and we should create more social programs to address poverty",
    "Yes",
    "No, and minority groups should not receive any favorable treatment"
  ],
  "Should the U.S. build a wall along the southern border?": [
    "Yes, and Mexico should pay for it",
    "Yes",
    "No, but increase our military presence along the southern border",
    "No, this would be too costly and ineffective"
  ],
  "Do you support the Affordable Care Act (Obamacare)?": [
    "Yes, but a mandatory single-payer system would be even better",
    "Yes",
    "Yes, I support a majority of the plan but not all aspects",
    "No, government should not be involved in healthcare",
    "No, open the markets so insurers can compete across state lines"
  ]
};

export { options, unclickables, questionsWithOptions };