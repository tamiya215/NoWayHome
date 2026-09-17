import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { about } from "@/content/about";
import { navigation } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "정유종의 예측하기 어려운 행동에 대한 관찰에서 시작해 네 사람의 시간과 기억을 기록하는 독립 연구 모임, NoWayHome Research Laboratory.",
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Container>
        <header className={styles.intro}>
          <p className="eyebrow" lang="en"><span className="accent-rule" />{about.label}</p>
          <h1 lang="en">{about.title}</h1>
          <div className={styles.prose}>
            {about.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </header>

        {about.sections.map((section, index) => (
          <section key={section.id} className={styles.information} aria-labelledby={`${section.id}-title`}>
            <SectionHeading number={String(index + 1).padStart(2, "0")} label={section.label} id={`${section.id}-title`}>{section.title}</SectionHeading>
            <div className={styles.prose}>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}

        <section className={styles.approach} aria-labelledby="methodology-title">
          <SectionHeading number="04" label={about.methodology.label} id="methodology-title">{about.methodology.title}</SectionHeading>
          <ol className={styles.methods}>
            {about.methodology.steps.map((method, index) => (
              <li key={method.label}>
                <h3 className="eyebrow" lang="en"><span className="section-number">{String(index + 1).padStart(2, "0")}</span>{method.label}</h3>
                <p>{method.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className={styles.closing}>
          <p lang="en">{about.closing}</p>
          <nav aria-label="Explore the lab" lang="en" className={styles.links}>
            {about.links.map((link) => {
              const destination = navigation.find((item) => item.label === link.destination);
              return destination ? <TextLink key={link.destination} href={destination.href}>{link.label}</TextLink> : null;
            })}
          </nav>
        </div>
      </Container>
    </main>
  );
}
