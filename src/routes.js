import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from "./pages/main";

const AppNavigation = createStackNavigator({
    Main
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F",
        },
        headerTintColor: "#FFF"
    }
})

export default createAppContainer(AppNavigation);