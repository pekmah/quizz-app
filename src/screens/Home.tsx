import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Layout from '../layout.tsx';
import {StudentSvg} from '../assets/icons';

const Home = (): React.JSX.Element => {
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

      <View className={'bg-bg_light rounded-tl-[35px] p-8 mt-5 flex-1'} />
    </Layout>
  );
};

export default Home;
