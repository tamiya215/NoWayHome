export const site = {
  name: "NoWayHome Research Laboratory",
  tagline: "Exploring the unexplained behaviors of Jeong Yujong.",
  description: "경희대학교 학생 네 명의 독립적인 모임, NoWayHome. 친구들과의 일상과 추억을 연구 활동의 형식으로 기록합니다.",
};

// Switch to page routes when the individual pages are ready.
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "People", href: "/people" },
  { label: "Research", href: "/#research" },
  { label: "Publications", href: "/#publications" },
  { label: "News", href: "/#news" },
] as const;
