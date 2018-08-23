/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createSwitchNavigator  } from 'react-navigation';
import HomeScreen from './Home'
import DrawerScreen from './Drawer'
import Popover from "./Popover";
import Pagination from "./Pagination";
import SegmentedControl from "./SegmentedControl";
import Tabs from "./Tabs";
import TabBar from "./TabBar"
import DatePicker from "./DatePicker"
import DatePickerView from "./DatePickerView"
import ImagePicker from "./ImagePicker"
import InputItem from "./InputItem"



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Drawer: DrawerScreen,
    Popover: Popover,
    Pagination: Pagination,
    SegmentedControl: SegmentedControl,
    Tabs: Tabs,
    TabBar: TabBar,
    DatePicker: DatePicker,
    DatePickerView: DatePickerView,
    ImagePicker:ImagePicker,
    InputItem:InputItem

  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ababab',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
export default AppNavigator;