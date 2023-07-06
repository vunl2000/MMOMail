import React, { Suspense } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import KeyboardManager from 'react-native-keyboard-manager';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppContainer } from './navigation/app-navigation';
import { NativeBaseProvider, VStack } from 'native-base';

// const json = require('./app/assets/vector-icon/selection.json');

// const key = json.icons.reduce((pv, curr) => {
//   pv[(curr.properties.name as string).replaceAll('-', '_')] =
//     curr.properties.name;

//   return pv;
// }, {});

// console.log(
//   Object.entries(key)
//     .sort(([, a], [, b]) => a - b)
//     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {}),
// );
if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);

    KeyboardManager.setEnableDebugging(false);

    KeyboardManager.setKeyboardDistanceFromTextField(10);

    KeyboardManager.setLayoutIfNeededOnUpdate(true);

    KeyboardManager.setEnableAutoToolbar(false);

    KeyboardManager.setOverrideKeyboardAppearance(true);

    KeyboardManager.setKeyboardAppearance('default');

    KeyboardManager.setShouldResignOnTouchOutside(true);

    KeyboardManager.setShouldPlayInputClicks(true);

    KeyboardManager.resignFirstResponder();

    KeyboardManager.reloadLayoutIfNeeded();
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

const MyApp = () => {
    return (
        <SafeAreaProvider>
            <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
                <Suspense fallback={null}>

                    <GestureHandlerRootView style={styles.root}>
                        <AppContainer />
                    </GestureHandlerRootView>
                </Suspense>
            </KeyboardProvider>
        </SafeAreaProvider>
    );
};

export default MyApp;