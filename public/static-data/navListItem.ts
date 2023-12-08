import { INavListItem } from "@/Interface/Interface";

export const navListItems: INavListItem[] = [
  { item: "تماس با ما", route: "" },
  { item: "درباره ما", route: "" },
  { item: "اعطای نمایندگی", route: "" },
  {
    item: "منو",
    route: "",
    children: [
      { item: "غذای اصلی", ChildrenRouth: "" },
      { item: "پیش غذا", ChildrenRouth: "" },
      { item: "دسر", ChildrenRouth: "" },
      { item: "نوشیدنی", ChildrenRouth: "" },
    ],
  },
  {
    item: "شعبه",
    route: "",
    children: [
      { item: "چالوس", ChildrenRouth: "" },
      { item: "اکباتان", ChildrenRouth: "" },
      { item: "اقدسیه", ChildrenRouth: "" },
      { item: "ونک ", ChildrenRouth: "" },
    ],
  },
  { item: "صفحه اصلی", route: "" },
];
