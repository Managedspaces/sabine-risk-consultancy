/**
 * Site-wide configuration
 * Update TOOLS_APP_URL here when the tools app moves to a custom domain.
 */
export const SITE_URL = "https://sabine-risk-consultancy.netlify.app";

export const TOOLS_APP_URL = "https://managedspaces.github.io/ergonomic-tools";

export const TOOLS = {
  ergonomicRisk: {
    id: "ergonomic-risk-assessment",
    appPath: "/",          // path within the tools app to launch this tool directly
    questions: 29,
    categories: 6,
    jurisdictions: 6,
  },
  homeOffice: {
    id: "home-office-risk-assessment",
    appPath: "/",
    questions: 30,
    categories: 6,
    jurisdictions: 6,
  },
  psychosocial: {
    id: "psychosocial-risk-assessment",
    appPath: "/",
    questions: 20,
    categories: 5,
    jurisdictions: 6,
  },
  riskBuilder: {
    id: "risk-assessment-builder",
    appPath: "/",
    hazardTypes: 9,
    jurisdictions: 6,
  },
} as const;
