import { NavigationAction, NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export enum APP_SCREEN {
    UN_AUTHORIZE = 'UN_AUTHORIZE',
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',

    AUTHORIZE = 'AUTHORIZE',
    HOME = 'HOME',
}

export interface BaseProps<T extends ParamListBase = {}> {
    navigation?: NavigationProp<any>,
    route?: RouteProp<T>
}
