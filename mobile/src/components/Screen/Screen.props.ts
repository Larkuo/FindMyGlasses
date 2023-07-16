export interface ScreenProps {
    type: 'fixed' | 'scroll';
    children?: React.ReactNode;
    statusBarHidden?: boolean;
};