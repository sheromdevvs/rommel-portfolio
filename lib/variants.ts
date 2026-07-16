// Audience variants of the portfolio. The site is one codebase; each variant
// only overrides the few things that shift emphasis — the downloadable CV, the
// hero summary, and the ordering of the "Mobile" skill group. Everything else
// (experience, projects, domains, contact) is shared from content.ts.
//
// Routes:
//   /        → IOS_VARIANT     (iOS-focused; the default link)
//   /mobile  → MOBILE_VARIANT  (cross-platform / Android-friendly)
//
// Share the plain domain with iOS roles and the /mobile link with cross-platform
// or Android roles. To add a third focus later, add a Variant and a route — no
// duplication.
import { SKILLS } from "./content";

export type Variant = {
  id: "ios" | "mobile";
  // Downloadable CV served from /public — the tailored résumé for this audience.
  cv: string;
  // Hero summary paragraph; leads with the emphasis this audience cares about.
  summary: string;
  // Ordering of the "Mobile" skill group's items for this audience.
  mobileSkills: string[];
};

const BASE_MOBILE = SKILLS.find((s) => s.group === "Mobile")!.items;

export const IOS_VARIANT: Variant = {
  id: "ios",
  cv: "/Rommel-Valdiviezo-CV.pdf",
  summary:
    "iOS engineer specializing in fintech — building and scaling native iOS apps (Swift, SwiftUI, UIKit) used by 500,000+ users, with production Android experience across the same products. Experienced in payment systems, modular mobile architectures, application reliability and mobile security — with a proven ability to lead mobile initiatives from MVP to production.",
  // Swift-first, as authored in content.ts.
  mobileSkills: BASE_MOBILE,
};

export const MOBILE_VARIANT: Variant = {
  id: "mobile",
  cv: "/RommelValdiviezo-MobileAppDeveloper.pdf",
  summary:
    "Mobile software engineer specializing in fintech platforms — building and scaling native iOS and Android apps used by 500,000+ users. Equally at home in Swift/SwiftUI and Kotlin/Compose, with experience in payment systems, modular mobile architectures, application reliability and mobile security — and a proven ability to lead mobile initiatives from MVP to production.",
  // Interleaved so neither ecosystem reads as secondary.
  mobileSkills: [
    "Swift",
    "Kotlin",
    "SwiftUI",
    "Jetpack Compose",
    "UIKit",
    "Combine",
    "MVVM",
    "Clean Architecture",
    "Modularization",
    "SPM",
    "CocoaPods",
  ],
};

// Guard against a variant drifting out of sync with content.ts (e.g. a skill
// added to the base Mobile group but forgotten in an override).
if (MOBILE_VARIANT.mobileSkills.length !== BASE_MOBILE.length) {
  throw new Error(
    "MOBILE_VARIANT.mobileSkills is out of sync with the base Mobile skill group in content.ts",
  );
}
