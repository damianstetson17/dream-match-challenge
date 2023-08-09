import {StatusBar, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  children?: ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#181828'} />
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#181828'},
});
