import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import PasswordResetNotifyButton from '../../components/PasswordResetNotifyButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

import { stylesCSS } from './style';

const NotifyResetPasswordScreen = ({ navigation }) => {
  const returnToLoginScreen = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textLogo}>Izumi</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.description}>初期設定が完了しました。</Text>

          <Text style={[styles.description, { paddingTop: 30 }]}>登録されたメールアドレスに</Text>
          <Text style={styles.description}>登録完了メールを送信しています。</Text>

          <Text style={[styles.description, { paddingTop: 30 }]}>メールに添付したリンクから</Text>
          <Text style={styles.description}>パスワード設定をお願い致します。</Text>
        </View>

        <View style={styles.footer}>
          <PasswordResetNotifyButton text='ログイン画面に戻る' onPress={returnToLoginScreen} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create(stylesCSS);

export default NotifyResetPasswordScreen;