import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import { styles } from './styles';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Form } from '../Form';
import { Sucess } from '../Sucess';

export type FeedbackType = keyof typeof feedbackTypes




function Widget() {

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }

  return (
    <>
      <TouchableOpacity>
        style={styles.button}
        onPress={handleOpen}
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
        />
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[0, 300]}
        >
          <Options  />

        </BottomSheet>
      </TouchableOpacity>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);