import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import TitleScreenView from "./TitleScreenView";

interface TitleScreenContainerProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

export function TitleScreenContainer ({
    navigation,
}: TitleScreenContainerProps): JSX.Element {
    function start(){
        navigation.navigate('cameraScreen');
    }

    return(
        <TitleScreenView start={start}/>
    );
};
