const options = [
  { label: 'Home', value: '/' },
  { label: 'Presidential Race', value: '/president' },
];

const unclickables = ["Independent", "Write-ins", "None of these candidates"];

const questionsWithOptions = {
  "What is your stance on abortion?": [
    ["Pro-Life", "Pro-life, and I also oppose abortion for victims of rape and incest"],
    ["Pro-Life", "Pro-life, but allow in cases of rape, incest, or danger to the mother or child"],
    ["Pro-Choice", "Pro-choice, but ban after the first three months"],
    ["Pro-Choice", "Pro-choice, I don’t agree but the government has no right to ban it"],
    ["Pro-Choice", "Pro-choice, and providing birth control, sex education, and more social services will help reduce the number of abortions"]
  ],
  "Should convicted criminals have the right to vote?": [
    ["Enfranchisement", "Yes, every citizen deserves the right to vote"],
    ["Enfranchisement", "Yes, except for felons convicted of murder or violent crimes"],
    ["Conditional Voting", "Yes, but only after completing their sentences and parole/probation"],
    ["Felon Disenfranchisement", "No"]
  ],
  "Should funding for local police departments be redirected to social and community-based programs?": [
    ["Police Abolition", "Yes, and abolish the police"],
    ["Community Policing", "Yes, replace police with unarmed community-based responders for non-violent calls"],
    ["Back The Blue", "No, increase funding and training for police departments in higher crime rate communities"]
  ],
  "Should the government increase or decrease military spending?": [
    ["Increase Military", "Increase"],
    ["Reduce Deficit", "Increase, but only after our deficit is drastically reduced"],
    ["Military Spending", "Neither, I am satisfied with the current amount of spending"],
    ["Decrease Military", "Decrease"]
  ],
  "Should the federal government increase funding of entitlements, such as Medicaid, Medicare, Social Security, and Unemployment?": [
    ["Increase Entitlements", "Yes"],
    ["Selective Entitlements", "Yes, but only increase for the elderly and disabled"],
    ["State Autonomy", "No, and each state should decide their own level of coverage"],
    ["Selective Entitlements", "No, and eligibility should only include the elderly and disabled"],
    ["Entitlement Cuts", "No, the federal government should not increase funding for any social programs"],
    ["Abolish Entitlements", "No, and abolish all entitlements"]
  ],
  "Should the U.S. raise taxes on the rich?": [
    ["Rich Tax", "Yes"],
    ["Raise Taxes", "Yes, but raise taxes on all other income brackets as well"],
    ["Lower Taxes", "No, but lower taxes for the poor"],
    ["Taxes", "No, keep the current tax structure"],
    ["Flat Tax", "No, reform to a flat tax"],
    ["Lower Taxes", "No, lower the income tax rate and remove all existing tax loopholes for large corporations"],
    ["Abolish Income Tax", "No, abolish the income tax, disallow all deductions and increase the sales tax"]
  ],
  "If found guilty, should former President Trump be pardoned for mishandling classified documents?": [
    ["Trump Innocent", "Yes, he did nothing wrong"],
    ["Laptop From Hell", "Yes, this indictment represents a political double standard"],
    ["Rule of Law", "No, no one is above the law"]
  ],
  "Should the government increase environmental regulations to prevent climate change?": [
    ["Increase regulations Incentivize Energy", "Yes, and provide more incentives for alternative energy production"],
    ["Incentivize Energy", "No, provide more incentives for alternative energy production instead"],
    ["Tax Carbon Emissions", "No, tax carbon emissions instead"],
    ["Climate Change Denial", "No, global warming is a natural occurrence and there's nothing we can do"]
  ],
  "Should the government raise the federal minimum wage?": [
    ["Living Wage", "Yes, make it a living wage"],
    ["Inflation-Adjusted Wage", "Yes, and adjust it every year according to inflation"],
    ["Same Wages", "No"],
    ["Abolish Minimum Wage", "No, and remove any federal minimum wage"]
  ],
  "Should there be more restrictions on the current process of purchasing a gun?": [
    ["Gun Ban", "Yes, all guns should be banned from private citizen ownership."],
    ["Only Hunting Allowed", "Yes, ban all guns except hunting rifles"],
    ["Assault Rifle Ban", "Yes, ban assault rifles"],
    ["Gun Control", "Yes, require more stringent background checks, training, and add more psychological testing."],
    ["Gun Rights", "No, current laws are already sufficient"],
    ["Limited Gun Control", "No, except to expand to individuals with mental health issues."],
    ["2nd Amendment", "No, the government should not infringe on the second amendment."],
    ["More Guns", "No, a citizen has the right to bear arms in private and public."]
  ],
  "Should the federal government pay for tuition at four-year colleges and universities?": [
    ["College For All", "Yes"],
    ["Partial Tuition Funding", "Yes, but only for partial tuition"],
    ["Lower Student Loans", "No, but provide lower interest rates for student loans"],
    ["Federal Scholarships", "No, but provide more scholarship opportunities for low-income students"],
    ["Private Tuition", "No"]
  ],
  "Do you support affirmative action programs?": [
    ["Racial Inequity", "Yes, but it's only a band-aid trying to heal a much larger issue and we should create more social programs to address racial inequity"],
    ["Affirmative Action", "Yes"],
    ["Oppose Affirmative Action", "No, and minority groups should not receive any favorable treatment"]
  ],
  "Should the U.S. build a wall along the southern border?": [
    ["Build The Wall", "Yes, and Mexico should pay for it"],
    ["Border Wall", "Yes"],
    ["Increase Border Military", "No, but increase our military presence along the southern border"],
    ["No Border Wall", "No, this would be too costly and ineffective"]
  ],
  "Do you support the Affordable Care Act (Obamacare)?": [
    ["Medicare For All", "Yes, but a mandatory single-payer system would be even better"],
    ["Obamacare", "Yes"],
    ["Limit Obamacare", "Yes, I support a majority of the plan but not all aspects"],
    ["Private Healthcare", "No, government should not be involved in healthcare"],
    ["Private Healthcare", "No, open the markets so insurers can compete across state lines"]
  ]
};

const parties = ["Democratic Party", "Republican Party", "Independent", "Libertarian Party", "Green Party", "Constitution Party", "Alliance Party", "Other"];

export { options, unclickables, questionsWithOptions, parties };