import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link className="wordmark" href="/" aria-label="NoWayHome Research Laboratory 홈">
          <span>NoWayHome<span className="wordmark-dot">.</span></span>
          <span className="wordmark-subtitle">Research Laboratory</span>
        </Link>
        <MobileNav />
      </Container>
    </header>
  );
}
