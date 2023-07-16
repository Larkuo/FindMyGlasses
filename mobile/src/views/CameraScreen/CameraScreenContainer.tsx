import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import CameraScreenView from "./CameraScreenView";

interface CameraScreenContainerProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

export function CameraScreenContainer({
    navigation,
}: CameraScreenContainerProps): JSX.Element {
    function goBack(){
        navigation.canGoBack() && navigation.goBack();
    }
    return(
        <CameraScreenView
            goBack={goBack}
        />
    );
}