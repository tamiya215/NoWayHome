import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div><p className="footer-name">NoWayHome<span className="wordmark-dot">.</span></p><p className="footer-subtitle">Research Laboratory</p></div>
          <p className="footer-description">경희대학교 학생 네 명으로 구성된<br />독립적인 모임입니다.</p>
          <TextLink href="#main-content">Back to top</TextLink>
        </div>
        <div className="footer-bottom"><span>© NoWayHome Research Laboratory</span><span>Observation begins with curiosity.</span></div>
      </Container>
    </footer>
  );
}
