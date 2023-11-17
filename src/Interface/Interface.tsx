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
