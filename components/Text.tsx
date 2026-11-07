import React from 'react';
import { Text, TextProps } from 'react-native';

type TextoProps = TextProps & {
  autoFit?: boolean;
};

export default function Texto({ autoFit = false, ...props }: TextoProps) {
  return (
    <Text
      {...props}
      numberOfLines={autoFit ? 1 : undefined}
      adjustsFontSizeToFit={autoFit}
      style={[props.style, { fontFamily: 'SpaceMono_Regular' }]}
    >
      {props.children}
    </Text>
  );
}

