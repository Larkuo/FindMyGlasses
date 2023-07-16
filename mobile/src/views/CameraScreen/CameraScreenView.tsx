import React from "react";
import { View } from "react-native";
import { PrimaryButton, Screen } from "../../components";
import { styles } from "./styles/CameraScreenView.styles";

interface CameraScreenViewProps {
    goBack: () => void;
}

function CameraScreenView({
    goBack,
}: CameraScreenViewProps): JSX.Element {
    return(
        <Screen type="fixed">
            <View style={styles.mainView}>
                <View style={styles.bottomContainer}>
                    <PrimaryButton 
                        mode="filled" 
                        title="Search"
                        onPress={goBack}
                        stylesOverride={styles.searchButton}
                        titleStylesOverride={styles.searchButtonLabel}
                    />
                </View>
            </View>
        </Screen>
    );
}

export default CameraScreenView;