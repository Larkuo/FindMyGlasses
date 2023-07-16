export interface PrimaryButtonProps {
    mode: 'outline' | 'filled';
    title?: string;
    onPress?: () => void;
    disabled?: boolean;
    loading?: boolean;
    stylesOverride?: Object;
    titleStylesOverride?: Object;
    icon?: React.ReactNode;
}
