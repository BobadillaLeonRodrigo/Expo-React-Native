import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './LoginStyle'

export const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='Email'
                    value=''
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.textinput}
                    placeholder='Password'
                    value=''
                />
                <Button
                    title='Login'
                />
        </View>
    )
}

export default LoginScreen