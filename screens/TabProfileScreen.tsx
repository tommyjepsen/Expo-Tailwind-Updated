import * as React from "react";
import { Text, View } from "../components/Themed";
import { t } from "react-native-tailwindcss";

export default function ProfileScreen() {
    return (
        <View style={[t.pY10, t.wFull, t.hFull, t.flex, t.itemsCenter, t.justifyCenter]}>
            <Text style={[t.text3xl]}>Profile</Text>
        </View>
    );
}
