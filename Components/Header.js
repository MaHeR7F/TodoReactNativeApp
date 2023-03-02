import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    title: {
        color: 'red',
        padding: 10,
        paddingTop : 20,
        backgroundColor: "black",
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    bold: {
        fontWeight: 'bold'
    },
});
export default function Header() {
    return (
        <View>
            <Text style={styles.title}><Text style={styles.bold}>Todo</Text></Text>
        </View>
    );
}