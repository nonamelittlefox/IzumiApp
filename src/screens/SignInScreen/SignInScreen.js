import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from "react-native";
// import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import axios from "axios";
import Toast from "react-native-toast-message";

import { stylesCSS } from "./style";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("111111");
  const [password, setPassword] = useState("123456789");
  const [showPassword, setShowPassword] = useState(true);

  const showToast = (props) => {
    Toast.show({
      text1: props.title,
      text2: props.content,
      type: props.variant,
      duration: 3000,
      position: "top",
    });
  };

  const urlLoginToIzumiCloud = "https://izumi-cloud.vw-dev.com/api/auth/login";
  const token = "yJpdiI6IkRQOU0xaVlYUnpMdXNZemsyQzdmM1E9PSIsInZhbHVlIjoibmJRYU5mT0grOTNDVXIrWWNGc3pKZVV6ZU9DZ2pPV0JMdUQyQyt0eHlxZWRCdHZSYVZTSEZhdlYvYy9Qd2RLS3hUQWkzd2lUTEV4ZXcwdU9INkloWG90OG5pRmJDRDBFaFMrVXA4K1BIYzNLVzJTeU03SXppZTBqTDJUa3BEeUciLCJtYWMiOiJlMTBkZDRhZDVhMzVmNWU1OTllNTE2YjAzZTU3YTA4NzhhMGI1YWE3OTY5YWE1ZmQxN2I3YzM5NTYwNDE2ODIwIiwidGFnIjoiIn0=";

  const onSignIn = async () => {
    console.log("Signing in...");

    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;

    const account = {
      id: username,
      password: password,
    };

    const response = await axios.post(urlLoginToIzumiCloud, account);
    console.log(JSON.stringify(response.data));

    console.log(response.data.code);

    if (response.data.code === 200) {
      navigation.push("Dashboard");
      showToast({
        variant: "success",
        title: "成功",
        content: "正常にサインインします。",
      });
    } else {
      showToast({
        variant: "warning",
        title: "警告",
        content: "サインインに失敗しました。",
      });
    }
  };

  const onRegister = () => {
    navigation.push("SignUpScreen");
  };

  const onForgetPassword = () => {
    navigation.push("ForgotPasswordScreen");
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/images/izumi-background.jpg")}
            resizeMode="cover"
            style={styles.backgroundImage}
          >
            <View style={styles.zoneLogo}>
              <Text style={styles.textLogo}>Izumi</Text>
            </View>

            <View style={styles.zoneInput}>
              <View style={styles.inputUserId}>
                <View style={styles.iconUser}>
                  <Icon
                    style={{ lineHeight: 60 }}
                    name="user"
                    size={30}
                    color="#1534A1"
                  />
                </View>

                <TextInput
                  placeholder="ユーザID"
                  value={username}
                  onChangeText={setUsername}
                  autoFocus={true}
                  KeyboardType="number-pad"
                  style={styles.baseInput}
                />
              </View>

              <View style={styles.inputPassword}>
                <View style={styles.iconKey}>
                  <Icon
                    style={{ lineHeight: 60 }}
                    name="lock"
                    size={30}
                    color="#1534A1"
                  />
                </View>

                <TextInput
                  placeholder="パスワード"
                  value={password}
                  onChangeText={setPassword}
                  autoFocus={false}
                  style={styles.baseInput}
                  secureTextEntry={showPassword}
                />
                <Pressable style={styles.iconEye} onPress={togglePassword}>
                  {showPassword ? (
                    <Icon
                      style={{ lineHeight: 60 }}
                      name="eye"
                      size={20}
                      color="#1534A1"
                    />
                  ) : (
                    <Icon
                      style={{ lineHeight: 60 }}
                      name="eye-slash"
                      size={20}
                      color="#1534A1"
                    />
                  )}
                </Pressable>
              </View>
            </View>

            <View style={styles.zoneHelper}>
              <CustomButton
                text="ログイン"
                onPress={onSignIn}
                style={{ marginBottom: 20 }}
              />
              <CustomButton
                text="初めて使用する場合"
                onPress={onRegister}
                style={{ marginBottom: 20 }}
              />
              <CustomButton
                text="パスワードを忘れてしまった場合"
                onPress={onForgetPassword}
              />
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(stylesCSS);

export default SignInScreen;
