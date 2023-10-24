const arrG = [
  {
    id: 1,
    usrs: [
      { id: "ad", name: "daj" },
      { id: "ax", name: "dagggj" },
      { id: "adx", name: "dajsfsf" },
    ],
  },
  {
    id: 2,
    usrs: [
      { id: "ax", name: "dagggj" },
      { id: "adx", name: "dajsfsf" },
    ],
  },
  {
    id: 3,
    usrs: [
        { id: "ad", name: "daj" },
        { id: "ax", name: "dagggj" },
    ],
  },
];

arrG.filter((v) => {
  const cloneusr = v.usrs.map((v) => v.id);

  return cloneusr.includes("ad");
});
///aliofff
