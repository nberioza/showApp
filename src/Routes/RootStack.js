import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from '../Screens/home/HomeScreen';
import DetailsScreen from '../Screens/details/DetailsScreen';

const RootStack = createStackNavigator({
            Home : HomeScreen,
              
            Details : DetailsScreen
               
},
{
   initialRouteName : "Home" ,
   defaultNavigationOptions:{
       headerStyle:{
           backgroundColor : 'blue'
       },
       
   }
})
const AppContainer =createAppContainer(RootStack);
export default AppContainer ;