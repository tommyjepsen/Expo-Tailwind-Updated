import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";
import { Text, View } from "../components/Themed";
import { TextInput } from "react-native-gesture-handler";
const unsplash = require("../assets/images/unsplash.jpg");

export default function LoginScreen({ navigation }: any) {
    const onLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Root" }],
        });
    };
    return (
        <View style={[t.flex, t.hFull, t.wFull]}>
            <View style={[t.flex, t.justifyCenter, t.flex1]}>
                <Text
                    style={[
                        t.text6xl,
                        t.fontSemibold,
                        t.pB2,
                        t.textWhite,
                        t.textCenter,
                        t.textShadow,
                    ]}
                >
                    Startday
                </Text>
                <Text
                    style={[t.textSm, t.textWhite, t.textCenter, t.textShadow]}
                >
                    All-in-one freelance management platform
                </Text>
                <Image
                    style={[
                        {
                            width: 100 + "%",
                            height: 100 + "%",
                            resizeMode: "cover",
                            zIndex: -1,
                            position: "absolute",
                        },
                    ]}
                    source={unsplash}
                />
            </View>
            <View style={[t.flex, t.flex0, t.p6, t.bgWhite]}>
                <Text style={[t.textXl]}>Log in to your account</Text>
                <View style={[t.pT5]}>
                    <Text style={[t.textXs, t.fontSemibold, t.pB2]}>Email</Text>
                    <TextInput
                        style={[t.wFull, t.bgGray200, t.p4, t.rounded]}
                        keyboardType="email-address"
                        placeholder="Enter your email"
                    ></TextInput>
                </View>
                <View style={[t.pT5]}>
                    <Text style={[t.textXs, t.fontSemibold, t.pB2]}>
                        Password
                    </Text>
                    <TextInput
                        style={[t.wFull, t.bgGray200, t.p4, t.rounded]}
                        keyboardType="visible-password"
						textContentType="password"
                        placeholder="Enter your password"
                    ></TextInput>
                </View>
                <View style={[t.pT5]}>
                    <TouchableOpacity
                        onPress={() => onLogin()}
                        style={[t.bgBlack, t.wFull, t.p5, t.rounded]}
                    >
                        <Text style={[t.textWhite, t.textCenter, t.wFull]}>
                            Log in to your account
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[t.pT5]}>
                    <TouchableOpacity
                        style={[t.wFull, t.p5]}
                        onPress={() => onLogin()}
                    >
                        <Text style={[t.textBlack, t.textCenter, t.wFull]}>
                            Create an account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
