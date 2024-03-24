import React from 'react';
import {View} from 'react-native';

const Layout = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}): React.JSX.Element => {
  return <View className={`flex-1 ${classname}`}>{children}</View>;
};

export default Layout;
