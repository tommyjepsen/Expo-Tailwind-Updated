import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { t } from "react-native-tailwindcss";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabOneScreen() {
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("@storage_Key");
            if (value !== null) {
                console.log("value", value);
            }
        } catch (e) {
            console.log("e", e);
        }
    };

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={[t.text6xl]}>Tab One</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
