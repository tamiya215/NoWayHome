export type Person = {
  id: string;
  name: string;
  group: "subject" | "researcher";
  position: string;
  biography: string[];
  researchInterests: string[];
  // Optional full Instagram profile URL. Leave unset until a real URL is provided.
  instagram?: string;
  portrait?: { src: `/images/people/${string}`; alt: string };
};

// Add a real image to public/images/people/, then set portrait.src and portrait.alt.
// Omit portrait to retain the typography-based profile layout.
// Add instagram: "" to any person and fill in their actual URL to display the link.
export const people: Person[] = [
  {
    id: "yujong",
    name: "정유종",
    group: "subject",
    position: "Primary Research Subject",
    biography: ["2005년 순천 출생. NoWayHome Research Laboratory의 주요 관찰 대상이다. 일상적으로 예측하기 어려운 행동과 다양한 기행을 반복적으로 보여주며, 이를 통해 연구진에게 지속적인 관찰 자료를 제공하고 있다."],
    researchInterests: ["Unexplained Behavior", "Spontaneous Incidents", "Behavioral Observation"],
    instagram: "https://www.instagram.com/uuujong/",
  },
  {
    id: "minkyoung",
    name: "김민경",
    group: "researcher",
    position: "Senior Researcher",
    biography: ["2004년 부산 출생. 기계공학부와 화학공학과를 복수전공하고 있다. 주요 연구 방법은 관찰 대상에 대한 지속적이고 집요한 도발과 이에 따른 반응의 분석이다. 한편 춘식이에 대해 이례적으로 높은 수준의 관심을 보이는 것으로 알려져 있다."],
    researchInterests: ["Provocation Studies", "Yujong Response Analysis", "Choonsik Studies"],
    instagram: "https://www.instagram.com/cnstlrㅣ_/",
  },
  {
    id: "hyejun",
    name: "이혜준",
    group: "researcher",
    position: "Research Fellow",
    biography: ["2005년 창원 출생. 정유종과 고등학교 시절부터 알고 지낸 인물로, 연구진 가운데 가장 장기간에 걸친 관찰 경험을 보유하고 있다. 관찰 대상인 정유종을 상당히 귀여워하는 경향이 있으며, 패션 인플루언서로도 활동하고 있다."],
    researchInterests: ["Longitudinal Yujong Studies", "Visual Culture", "Fashion"],
    instagram: "https://www.instagram.com/whyoiotoe/",
  },
  {
    id: "wonho",
    name: "이원호",
    group: "researcher",
    position: "Principal Investigator",
    biography: [
      "2004년 오산 출생. 4월 처음 정유종을 접한 이후 일련의 기행에 의문을 품었으며, 보다 가까운 거리에서 이를 관찰하기 위해 친밀한 사회적 관계를 형성하는 참여관찰 방법을 채택하였다.",
      "관찰 대상을 지속적으로 놀리는 동시에 유독 편애하는 경향을 보이며, 이로 인해 다른 연구원들의 지속적인 원성을 사고 있다.",
    ],
    researchInterests: ["Participant Observation", "Yujong Studies", "Behavioral Analysis"],
    instagram: "https://www.instagram.com/elnowoh/",
  },
];
