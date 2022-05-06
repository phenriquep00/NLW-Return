import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import { styles } from './styles';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function Widget() {

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }

  return (
    <>
      <TouchableOpacity>
        <ChatTeardropDots
          style={styles.button}
          size={50}
          color={theme.colors.text_on_brand_color}
        />
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[1, 280]}
          backgroundStyle={styles.modal}
          handleIndicatorStyle={styles.indicator}
          
        />
      </TouchableOpacity>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);