import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from "react-native"
import React, {useState, useEffect} from "react";
import credentials from "../credentials.json";
import { useRouter } from "expo-router";

type signInProps = {
    isLoginBoolean: (boolean: boolean) => void;
    username: string;
    setUsername: (username: string) => void;
};

    const Signin: React.FC<signInProps> = ({isLoginBoolean , username, setUsername}: signInProps) => {
        const [password, setPassword] = useState<string>("");
        const router = useRouter();


        const handleSignIn =  () => {
            const user = credentials.users.find((user) => user.username === username && user.password === password);

            if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
                alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
                return;
            }

            if (user){
                router.navigate("./app/index");
                isLoginBoolean(true);
            }
            else {
                alert("Password or Username is incorrect");
            }

        };


    return(
        <View style={styles.container}>
            <Text style={styles.header}>Welcome</Text>

            <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            />

            <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            />

            <TouchableOpacity  style={styles.button} onPress={handleSignIn}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>



    );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        },
        input: {
            borderWidth: 1,
            borderColor: "#575757",
            padding: 10,
            margin: 10,
            marginTop: 100,
            width: "80%",

            borderRadius: 2,
        },
        button:{
            borderRadius: 5,
            backgroundColor: "#575ceb",
            color: "#fff",
            padding: 10,
        },
        header:{
            fontSize: 25,
            fontWeight: "bold",
            textDecorationLine: "underline",
        }
    
    
    });

export default Signin;