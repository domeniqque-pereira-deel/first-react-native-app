import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from "./pages/main";

const AppNavigation = createStackNavigator({
    Main
})

export default createAppContainer(AppNavigation);