function createAiWorkplaceAudiencePoll() {
  const form = FormApp.create("AI in the workplace: Audience poll");
  form.setDescription("Audience poll for the AI in the workplace discussion.");
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setPublishingSummary(false);

  form.addMultipleChoiceItem()
    .setTitle("Q1. Industry")
    .setHelpText("Which best describes your work?")
    .setChoiceValues([
      "Academia",
      "Industry / tech",
      "Other (e.g., policy, government, think tank)"
    ])
    .setRequired(true);

  form.addGridItem()
    .setTitle("Q2. AI as Complement vs. Substitute")
    .setHelpText("By 2030, AI's effect on US employment in each profession will be:")
    .setRows([
      "Software developers",
      "Customer support representatives",
      "Economists"
    ])
    .setColumns([
      "Substantial decline (>15%)",
      "Moderate decline (5-15%)",
      "About unchanged (+/-5%)",
      "Moderate increase (5-15%)",
      "Substantial increase (>15%)"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Q3. AI Capabilities Today and Tomorrow")
    .setHelpText("Which scenario best describes AI capabilities by 2030?")
    .setChoiceValues([
      "Slow progress: AI as a capable assistant. Writes literature reviews at the level of a PhD student; handles half of all 8-hour freelance coding tasks; can unload dishwashers in some homes",
      "Moderate progress: AI as an effective collaborator. Autonomous labs drive rapid advances in solar; nearly all coding tasks <=5 days of human effort are automatable; robots do dishes as fast as humans; robo-taxis drive anywhere humans can",
      "Rapid progress: AI surpasses humans on most cognitive and physical tasks. Autonomous researchers compress years of work into days; AI writes Pulitzer-caliber books; robots assist in any home or factory worldwide"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Q4. AI in R&D")
    .setHelpText("By 2030, the traditional academic economics paper will be:")
    .setChoiceValues([
      "MORE important: peer-reviewed papers become the trusted filter when AI generates infinite content; the value of curation and gatekeeping rises",
      "Alive and unchanged: papers remain the primary unit of research; AI just speeds up drafting",
      "Drowning in AI slop: more papers than ever, but average quality drops and trust in the literature erodes",
      "Outpaced by slow publishing: 3-5 year publication cycles can't keep up with AI-accelerated research; serious work shifts to faster venues (working papers, blogs, dynamic notebooks)",
      "Bypassed by industry: frontier insights migrate to AI labs and industry; academic papers become a lagging indicator"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Q5. Early Warning Signs and the Transition")
    .setHelpText("Where will we FIRST see clear signs that AI is reshaping the US labor market?")
    .setChoiceValues([
      "Entry-level hiring: junior roles cut first in AI-exposed occupations",
      "Within firms: firms that adopt AI shrink their workforce or reshuffle tasks, before any aggregate effects show up",
      "Productivity or wages: productivity accelerates, or wages compress in exposed occupations, before headcount adjusts",
      "No clear signal by 2030: effects too small or too noisy to detect"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Q6. Entrepreneurship in the Age of AI")
    .setHelpText("What will be the BIGGEST AI-driven change to the US business landscape by 2030?")
    .setChoiceValues([
      "More new firms: significant rise in new business applications",
      "Smaller firms: similar number of firms, but smaller on average; rise of the \"solopreneur\"",
      "More concentration: large incumbents capture the gains; winner-take-most dynamics intensify",
      "Bifurcation: boom in both very small and very large firms; mid-sized firms hollow out",
      "Little change: US firm structure looks much like today's in the Age of AI"
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Q7. AI and Signaling in the Labor Market")
    .setHelpText("By 2030, how will AI affect the match between workers and jobs?")
    .setChoiceValues([
      "Better matches: cheaper search and screening on both sides outweighs the noise from AI-written applications",
      "Worse matches: too many applications, all looking alike",
      "Better for outsiders, worse for insiders: AI levels the playing field; credentials and connections matter less",
      "Better for insiders, worse for outsiders: gains concentrate among the credentialed and well-connected",
      "No substantial change in match quality"
    ])
    .setRequired(true);

  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Public URL: " + form.getPublishedUrl());
}
