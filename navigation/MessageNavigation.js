import { createStackNavigator } from 'react-navigation-stack';
import Messages from "../screens/Messages/Messages";
import Message from "../screens/Messages/Message";
import { stackStyles } from "./config";

export default createStackNavigator(
    {
      Messages,
      Message
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          ...stackStyles
        }
      }
    }
  );