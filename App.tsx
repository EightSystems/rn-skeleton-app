import {
  Box,
  Button,
  Heading,
  Icon,
  Spinner,
  Text,
  Theme,
  ThemeProviderInjector
} from '@8sistemas/design-system/mobile/native';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

const App = () => {
  return (
    <ThemeProviderInjector theme={Theme}>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Box>
            <Heading>LG</Heading>
            <Heading fontSize={'md'} fontFace={'primaryBold'}>
              MD with Primary Bold
            </Heading>
            <Heading fontSize={'sm'}>SM</Heading>
            <Button>Ola</Button>
            <Icon
              familyName={'FontAwesome'}
              icon={'fa-facebook'}
              style={{fontSize: 50, color: 'green'}}></Icon>
            <Spinner size={52} color={'blue'} />
            <Text fontFace={'primaryBold'}>Primary Bold text</Text>
            <Text fontFace={'secondaryBold'}>Secondary Bold text</Text>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </ThemeProviderInjector>
  );
};

export default App;
