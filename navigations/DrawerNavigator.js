import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";;
import { Theme } from '../utils';
import { WithScrollView } from './helper';
import CustomDrawer from './CustomDrawer';
import CustomHeader from './CustomHeader';
import BottomTabNavigator from './BottomTabNavigator';
import Donate from '../screens/Donate';
import About from '../screens/About';
import Updates from '../screens/Updates';
import Team from '../screens/Team';
import Process from '../screens/Process';
import Press from '../screens/Press';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={CustomDrawer}
    drawerPosition="right" 
    drawerStyle={{ 
      backgroundColor: Theme.green
    }}
    screenOptions={(props) => ({ header: () => <CustomHeader dark {...props} /> })}
    drawerContentOptions={{ 
      inactiveTintColor: 'white', 
      activeTintColor: 'black',
      activeBackgroundColor: 'white'
    }}
    
  >
    <Drawer.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Drawer.Screen name="Donate" component={WithScrollView(Donate)}  />
    <Drawer.Screen name="About" component={WithScrollView(About)}  />
    <Drawer.Screen name="Updates" component={WithScrollView(Updates)}  />
    <Drawer.Screen name="Team" component={WithScrollView(Team)}  />
    <Drawer.Screen name="Process" component={WithScrollView(Process)}  />
    <Drawer.Screen name="Press" component={WithScrollView(Press)}  />
    <Drawer.Screen name="Contact" component={WithScrollView(Contact)}  />
  </Drawer.Navigator>
)

export default DrawerNavigator;