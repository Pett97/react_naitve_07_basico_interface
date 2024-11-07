import { Image, StyleSheet, Text, View } from 'react-native';
import FullScreen from '../src/containers/FullScreen';
import LoginScreen from '../src/screens/login/login';
export default function App() {
  return (
    <FullScreen>
    <LoginScreen></LoginScreen>
    </FullScreen>
  );
}

