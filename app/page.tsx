import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Container>
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow"><span className="accent-rule" />An independent student research group</p>
          <h1 id="hero-title" lang="en">NoWayHome<br />Research Laboratory<span className="title-period">.</span></h1>
          <div className="hero-bottom">
            <p className="hero-statement" lang="en">{site.tagline}</p>
            <TextLink href="#about">Discover the lab</TextLink>
          </div>
          <div className="hero-caption"><span>Observation. Documentation. Inquiry.</span><span>NWH LAB / INTRODUCTION</span></div>
        </section>

        <section id="about" className="section section-split" aria-labelledby="about-title">
          <SectionHeading number="01" label="About the lab" id="about-title">일상을 관찰하고,<br />함께 기록합니다.</SectionHeading>
          <div className="section-copy">
            <p className="lead">NoWayHome은 경희대학교 학생 네 명이 함께하는 독립적인 모임입니다. 친구들과의 일상과 추억을 연구 활동의 형식으로 기록합니다.</p>
            <p>시작은 한 연구실 홈페이지였습니다. 정유종이 어느 교수님의 연구실 소개를 보고 감탄했던 순간에서, 우리만의 연구실을 만드는 아이디어가 시작되었습니다.</p>
            <p>관찰의 중심에는 정유종이 있습니다. 그의 설명하기 어려운 행동과 함께한 순간들을, 조금 더 주의 깊게 들여다봅니다.</p>
          </div>
        </section>

        <div className="overview-grid">
          <section id="people" className="overview-section" aria-labelledby="people-title">
            <SectionHeading number="02" label="People" id="people-title">Four members.<br />A shared curiosity.</SectionHeading>
            <p>정유종과 세 명의 친구들. 함께 관찰하고 기록하는 NoWayHome의 구성원들을 소개할 예정입니다.</p>
            <p className="status-note">구성원 소개 준비 중</p>
          </section>
          <section id="research" className="overview-section" aria-labelledby="research-title">
            <SectionHeading number="03" label="Research" id="research-title">Everyday moments.<br />Open questions.</SectionHeading>
            <p>친구들과 있었던 사건과 정유종의 행동을 연구 주제로 기록합니다. 일상에서 시작된 질문들을 이곳에 모읍니다.</p>
            <p className="status-note">연구 기록 준비 중</p>
          </section>
        </div>

        <section id="publications" className="section archive-section" aria-labelledby="publications-title">
          <SectionHeading number="04" label="Publications" id="publications-title">The written record.</SectionHeading>
          <div className="archive-empty"><p>함께한 사건을 논문의 형식으로 남깁니다.</p><span>첫 번째 기록을 준비하고 있습니다.</span></div>
        </section>
        <section id="news" className="section archive-section" aria-labelledby="news-title">
          <SectionHeading number="05" label="News" id="news-title">From the lab.</SectionHeading>
          <div className="archive-empty"><p>NoWayHome의 새로운 소식과 기록.</p><span>새로운 소식이 등록되면 이곳에서 전합니다.</span></div>
        </section>
      </Container>
    </main>
  );
}
