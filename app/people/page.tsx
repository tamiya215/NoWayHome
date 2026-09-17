import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PersonCard } from "@/components/people/person-card";
import { people } from "@/content/people";
import { openPosition } from "@/content/recruitment";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "People",
  description: "NoWayHome Research Laboratory의 주요 관찰 대상 정유종과 연구진 김민경, 이혜준, 이원호를 소개합니다.",
};

export default function PeoplePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Container>
        <header className={styles.intro}>
          <p className="eyebrow" lang="en"><span className="accent-rule" />NoWayHome Research Laboratory</p>
          <h1 lang="en">People<span className="title-period">.</span></h1>
          <p className={styles.description}>관찰의 중심에 있는 한 사람과, 그 일상을 함께 기록하는 연구진을 소개합니다.</p>
        </header>
        <section className={styles.group} aria-labelledby="subject-title">
          <SectionHeading number="01" label="Primary Research Subject" id="subject-title">Subject of Inquiry</SectionHeading>
          <div className={styles.profiles}>
            {people.filter((person) => person.group === "subject").map((person) => <PersonCard key={person.id} person={person} />)}
          </div>
        </section>
        <section className={styles.group} aria-labelledby="team-title">
          <SectionHeading number="02" label="Research Team" id="team-title">The Researchers</SectionHeading>
          <div className={styles.profiles}>
            {people.filter((person) => person.group === "researcher").map((person) => <PersonCard key={person.id} person={person} />)}
          </div>
        </section>
        <section className={styles.recruitment} aria-labelledby="open-position-title">
          <div className={styles.recruitmentHeading} lang="en">
            <h2 id="open-position-title" className="eyebrow">Open Position</h2>
            <p className={styles.positionTitle}>{openPosition.title}</p>
          </div>
          <p className={styles.recruitmentDescription}>{openPosition.description}</p>
          <dl className={styles.recruitmentStatus} lang="en">
            <dt className="eyebrow">Status</dt>
            <dd>{openPosition.status}</dd>
          </dl>
        </section>
      </Container>
    </main>
  );
}
