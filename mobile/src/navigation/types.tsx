import {
    TitleScreenContainer,
    CameraScreenContainer,
} from "../views";

export const APP_SCREENS: {[index: string]: any} = {
    titleScreen: {
        component: TitleScreenContainer,
        options: {
        headerShown: false,
        },
    },
    cameraScreen: {
        component: CameraScreenContainer,
        options: {
        headerShown: false,
        },
    }
};

export type AppParamList = typeof APP_SCREENS;