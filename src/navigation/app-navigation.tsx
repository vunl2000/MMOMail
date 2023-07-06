import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import {
    hideLoading,
    ProgressDialog,
    showLoading,
} from '../components/progress-dialog';

import { RootNavigation } from './root-navigator';

import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';


export const AppContainer = () => {
    // const { loadingApp, showDialog } = { loadingApp: false, showDialog: true };
    // useEffect(() => {
    //     if (showDialog) {
    //         showLoading();
    //     } else {
    //         hideLoading();
    //     }
    // }, [showDialog]);


    // render
    return (
        <NavigationContainer >
            <>
                <StatusBar translucent backgroundColor={"transparent"} />

                <RootNavigation />

                <ProgressDialog />

            </>
        </NavigationContainer>
    );
};