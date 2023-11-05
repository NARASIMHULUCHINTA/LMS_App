import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../styles';

const styles = StyleSheet.create({
  sharedButton: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop:10,
  },
  sharedText: {
    fontSize: Spacing.SCALE_16,
    textAlign: 'center',
    padding: 5,
  },
  tertiary: {
    fontSize: Spacing.SCALE_14,
    color: Colors.SECONDARY,
    marginLeft: 5,
  },
  borderPrimary: {
    borderColor: Colors.PRIMARY,
    borderWidth: 2,
    backgroundColor: Colors.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
} as any);

export const PrimaryButton = (props: any) => {
  const primaryButtonData = props;
  return (
    <TouchableOpacity
      onPress={primaryButtonData.onPress}
      style={[
        { backgroundColor: Colors.PRIMARY },
        styles.sharedButton,
        primaryButtonData.padding,
      ]}>
      <Text
        style={[
          { color: Colors.WHITE, fontFamily: Typography.FONT_FAMILY_REGULAR },
          styles.sharedText,
        ]}>
        {primaryButtonData.title}
      </Text>
    </TouchableOpacity>
  );
};
