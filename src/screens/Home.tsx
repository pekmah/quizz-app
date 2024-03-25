import React, {ReactElement} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';

import Layout from '../layout.tsx';
import {StudentSvg} from '../assets/icons';
import {fetchCategories} from '../services/CategoriesServices.ts';
import {topicIcons} from '../constants/Topics.js';
import {useNavigation} from '@react-navigation/native';
import {quizScreenProp} from '../types/navigation';

const Home = (): React.JSX.Element => {
  const navigation = useNavigation<quizScreenProp>();

  const {data, isFetching, refetch} = useQuery<Category[]>({
    queryKey: ['quizz_categories'],
    queryFn: fetchCategories,
  });

  const handleQuiz = () => {
    navigation.navigate('quiz');
  };

  return (
    <Layout classname={'bg-primary pt-3'}>
      <Text className={'font-ojuju-bold text-center text-light text-2xl'}>
        QUIZZ APP
      </Text>

      <View className={'flex-row items-end'}>
        <View className={'mt-8 flex flex-col flex-1 px-3'}>
          <Text className={'text-light text-xl font-sans-semibold'}>
            Challange yourself
          </Text>

          <Text className={'text-light font-sans text-sm mt-1'}>
            Increase your knowledge by playing the quizz game.
          </Text>

          {/*  button  */}
          <TouchableOpacity
            className={'bg-light my-3 px-3 py-2 mr-auto rounded'}>
            <Text className={'font-sans-bold text-primary '}>Start Now</Text>
          </TouchableOpacity>
        </View>

        <View className={'flex-[0.5] '}>
          <StudentSvg />
        </View>
      </View>

      <View className={'bg-bg_light rounded-tl-[35px] p-5 mt-5 flex-1'}>
        {/* header */}
        <Header />

        <FlatList
          onRefresh={refetch}
          refreshing={isFetching}
          data={data}
          renderItem={({item}) =>
            renderTopicItem({item, handlePress: handleQuiz})
          }
          numColumns={2}
        />
      </View>
    </Layout>
  );
};

const renderTopicItem = ({
  item,
  handlePress,
}: {
  item: Category;
  handlePress: () => void;
}): ReactElement => (
  <TopicItem
    key={item?.id}
    // @ts-ignore
    icon={topicIcons[item.name]}
    title={item.name}
    handlePress={handlePress}
  />
);

export default Home;

const Header = () => (
  <View className={'flex-row justify-between items-center mb-3'}>
    <Text className={'text-primary text-base font-sans-bold'}>
      Explore Quizzes
    </Text>

    <TouchableOpacity>
      <Text className={'font-sans-bold text-xs text-primary uppercase'}>
        View All
      </Text>
    </TouchableOpacity>
  </View>
);

const TopicItem = ({
  icon,
  title,
  handlePress,
}: {
  icon: any;
  title: string;
  handlePress?: () => void;
}): ReactElement => (
  <TouchableOpacity
    className={
      'm-2 bg-light p-5 rounded-xl flex flex-col items-center justify-center flex-1'
    }
    onPress={handlePress}>
    {icon}
    <Text className={'mt-2 text-primary font-sans-medium'}> {title}</Text>
  </TouchableOpacity>
);
