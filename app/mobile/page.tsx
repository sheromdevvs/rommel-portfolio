import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";
import { MOBILE_VARIANT } from "@/lib/variants";

// Cross-platform / Android-friendly variant. Share this link (…/mobile) with
// cross-platform or Android roles; it serves the Mobile App Developer résumé.
export const metadata: Metadata = {
  title: "Rommel Valdiviezo — Mobile App Developer",
  description:
    "Mobile software engineer specializing in fintech platforms — native iOS and Android apps at scale, equally at home in Swift/SwiftUI and Kotlin/Compose.",
};

export default function Mobile() {
  return <PortfolioPage variant={MOBILE_VARIANT} />;
}
