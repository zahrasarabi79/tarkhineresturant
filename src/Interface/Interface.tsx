export interface IconComponentProps {
  pathName: string;
  color?: string;
  size?: string;
  focused?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export interface ISliderComponentProps {
  sliderTitle: string[];
  sliderBtnTitle: string;
}

type ActionType = "PREVIOUS_IMAGE" | "NEXT_IMAGE" | "SET_CURRENT_INDEX";
export interface IChangeImageAction {
  type: ActionType;
  payload?: number;
}
export interface IChengeSliderAction {
  type: string;
  payload: string;
}

export interface INavListItem {
  item: string;
  route: string;
  children?: INavListChildren[];
}
export interface INavListChildren {
  item: string;
  ChildrenRouth: string;
}
export interface IAboutSectionItem {
  icon: string;
  title: string;
}
export interface IBranchCard {
  branch: IBranche;
}
export interface IBranche {
  desktopImage: string;
  address: string;
  tabletImage: string;
  branchName: string;
  mobileImage: string;
}
export interface IMenuItem {
  image: string;
  titleBtn: string;
}
export interface IFoodMenuItemProps {
  menuImage: string;
  titleBtn: string;
}
