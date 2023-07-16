import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { Pressable } from "react-native";
import { PrimaryButtonProps } from "./PrimaryButton.props";
import { styles } from "./PrimaryButton.styles";

export function PrimaryButton ({
    mode,
    title = 'button',
    onPress,
    disabled,
    loading,
    stylesOverride,
    titleStylesOverride,
    icon,
}: PrimaryButtonProps): JSX.Element {
    const containerStyle = mode === 'outline'?
        disabled? styles.outlineDisabledContainer : styles.outlineContainer :
        disabled? styles.filledDisabledContainer : styles.filledContainer;

    const titleStyle = disabled? styles.disabledTitle : mode === 'outline'?
                        styles.outlineTitle : styles.filledTitle;

    return(
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={[styles.mainContainer, containerStyle, stylesOverride]}
        >
            {icon}
            {loading?
                <ActivityIndicator
                    size='small'
                    color='rgba(0, 0, 0, 0.7)'
                    style={styles.loader}
                /> 
            : null}
            <Text style={[styles.title, titleStyle, titleStylesOverride]}>{title}</Text>
        </Pressable>
    );
};
