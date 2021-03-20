import React, { Children } from 'react';
import { Text } from 'react-native';
import SkeletonContent  from 'react-native-skeleton-content';


interface IChidrenProp {
  children : JSX.Element,
  loading : boolean
}

export default function Placeholder(props : IChidrenProp) {

  return (
    <SkeletonContent
      containerStyle={{ width: 150 , backgroundColor : '#000' , marginHorizontal : 5}}
      isLoading={props.loading}
      boneColor="#0a0a0a"
      highlightColor="#171616"
      animationType="shiver"
      layout={[
        { key: 'someId', width: 150, height: 200, marginBottom: 6},
      ]}
    >
      {props.children}
    </SkeletonContent>
  );
}

