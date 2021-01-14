import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings193358Navigator from '../features/Settings193358/navigator';
import Settings193356Navigator from '../features/Settings193356/navigator';
import SignIn2193354Navigator from '../features/SignIn2193354/navigator';
import BlankScreen0193352Navigator from '../features/BlankScreen0193352/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings193358: { screen: Settings193358Navigator },
Settings193356: { screen: Settings193356Navigator },
SignIn2193354: { screen: SignIn2193354Navigator },
BlankScreen0193352: { screen: BlankScreen0193352Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
