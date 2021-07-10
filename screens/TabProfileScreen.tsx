import * as React from "react";
import { Text, View } from "../components/Themed";
import { t } from "react-native-tailwindcss";
import { Toast } from "../components/Toast";
import { TouchableOpacity } from "react-native";

export default function ProfileScreen() {
    const [showToast, setShowToast] = React.useState(false);

    return (
        <View
            style={[
                t.pY10,
                t.wFull,
                t.hFull,
                t.flex,
                t.itemsCenter,
                t.justifyCenter,
            ]}
        >
            <Text style={[t.text3xl]}>Profile</Text>

            <TouchableOpacity onPress={() => setShowToast(!showToast)}>
                <Text style={[t.textXs, t.mT10]}>Toggle Toast</Text>
            </TouchableOpacity>

            {showToast && <Toast text="This is a Toast"></Toast>}
        </View>
    );
}
