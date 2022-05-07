import React, { useRef, useState } from 'react';
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
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }

  function handleRestartFeedbacl() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent(){
    setFeedbackSent(true);

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
          {
            feedbackSent
              ?
              <Sucess />
              :
              <>
                {
                  feedbackType
                    ?
                    <Form
                      feedbackType={feedbackType}
                      onFeedbackCanceled={handleRestartFeedbacl}
                      onFeedbackSent={handleFeedbackSent}

                    />
                    :
                    <Options onFeedbackTypeChanged={setFeedbackType}/>
            }
              </>
          }

        </BottomSheet>
      </TouchableOpacity>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);