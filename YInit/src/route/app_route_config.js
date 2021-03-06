import LoginScreen from 'demo/component/LoginScreen';
import MainScreen from 'demo/component/MainScreen';
import ProfileScreen from 'demo/component/ProfileScreen';
import StorageScreen from 'demo/component/StorageScreen';
import ThemeScreen from 'demo/component/ThemeScreen';
import I18nScreen from 'demo/component/I18nScreen';
import ImageScreen from 'demo/component/ImageScreen';
import DeviceInfoScreen from 'demo/component/DeviceInfoScreen';
import ScanScreen from 'demo/component/ScanScreen';
import SimpleScreen from 'demo/component/SimpleScreen';
import TabScreen from 'demo/component/TabScreen';
import CounterContainer from 'demo/container/counter/CounterContainer';



import ShowWebViewContainer from 'src/container/webview/ShowWebViewContainer';
import ShowSwiperContainer from 'src/container/swiper/ShowSwiperContainer';
export default {

    ShowWebViewContainer: { screen: ShowWebViewContainer },//
    ShowSwiperContainer: { screen: ShowSwiperContainer },//


    CounterContainer: { screen: CounterContainer },//demo counter
    LoginScreen: { screen: LoginScreen }, //demo react-navigation
    MainScreen: { screen: MainScreen },
    ProfileScreen: { screen: ProfileScreen },
    StorageScreen: { screen: StorageScreen },
    ThemeScreen: { screen: ThemeScreen },
    I18nScreen: { screen: I18nScreen },
    ImageScreen: { screen: ImageScreen },
    DeviceInfoScreen: { screen: DeviceInfoScreen },
    ScanScreen: { screen: ScanScreen },
    SimpleScreen: { screen: SimpleScreen },
    TabScreen: { screen: TabScreen },
}
