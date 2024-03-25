import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from './Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

export const topicIcons = {
  Linux: <FontAwesome name={'linux'} color={COLORS.primary} size={25} />,
  bash: (
    <MaterialCommunityIcons name={'bash'} color={COLORS.primary} size={25} />
  ),
  uncategorized: (
    <MaterialIcons name={'device-unknown'} color={COLORS.primary} size={25} />
  ),
  Docker: <Ionicons name={'logo-docker'} color={COLORS.primary} size={25} />,
  SQL: <Fontisto name={'mysql'} color={COLORS.primary} size={25} />,
  CMS: (
    <MaterialCommunityIcons
      name={'content-paste'}
      color={COLORS.primary}
      size={25}
    />
  ),
  Code: <Entypo name={'code'} color={COLORS.primary} size={25} />,
  DevOps: (
    <MaterialCommunityIcons
      name={'microsoft-azure-devops'}
      color={COLORS.primary}
      size={25}
    />
  ),
};
