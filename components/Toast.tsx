import * as React from "react";
import { Text, View } from "react-native";
import { t } from "react-native-tailwindcss";

type Props = {
    text: string;
};

export function Toast(props: Props) {
    return (
        <View
            style={[
                t.wFull,
                t.h104,
                t.absolute,
                t.bottom0,
                t.left0,
                t.p4,
            ]}
        >
            <View
                style={[
                    t.wFull,
                    t.bgBlue900,
					t.rounded,
                    t.flex,
					t.pT5,
					t.pB5,
                    t.justifyCenter,
                    t.itemsCenter,
                ]}
            >
                <Text style={[t.textWhite]}>{props.text}</Text>
            </View>
        </View>
    );
}
