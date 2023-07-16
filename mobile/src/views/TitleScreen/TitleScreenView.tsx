import React, { useState } from "react";
import { ActivityIndicator, ImageBackground, View } from "react-native";
import { Screen, PrimaryButton } from "../../components";
import { styles } from "./styles/TitleScreenView.styles";

interface TitleScreenViewProps {
    loader?: boolean;
    start: () => void;
}

function TitleScreenView ({
    start,
}: TitleScreenViewProps): JSX.Element {
    const [loading, setLoading] = useState(true);

    function toggleLoading() { 
        setLoading(!loading); 
    }

    return(
        <Screen type='fixed'>
            <View style={styles.mainView}>
                <ImageBackground 
                    source={require('../../assets/Splash_Screen_Logo.png')}
                    style={styles.logoImage}
                    onLoad={toggleLoading}
                >
                    <ActivityIndicator size={'large'} animating={loading} color={'black'}/>
                </ImageBackground>
                <PrimaryButton 
                    mode={'filled'} 
                    title={'Start'}
                    onPress={start}
                    stylesOverride={styles.startButton}
                    titleStylesOverride={styles.startButtonText}
                />
            </View>
        </Screen>
    );
};

export default TitleScreenView;
