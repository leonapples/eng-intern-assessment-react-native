export interface StopWatchButtonProps {
  text: string;
  onPress: (() => void) | undefined;
}

export interface StopWatchProps {
  formattedTime: string;
}