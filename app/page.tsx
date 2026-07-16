import PortfolioPage from "@/components/PortfolioPage";
import { IOS_VARIANT } from "@/lib/variants";

// Default landing — iOS-focused. Share this plain domain with iOS roles.
export default function Home() {
  return <PortfolioPage variant={IOS_VARIANT} />;
}
