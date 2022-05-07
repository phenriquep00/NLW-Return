import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { FeedbackType } from '../../components/Widget';
import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Screenshot } from '../../components/Screenshot';
import { Button } from '../../components/Button';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../libs/api';

interface Props {
    feedbackType: FeedbackType;
    onFeedbackCanceled: () => void;
    onFeedbackSent: () => void;

}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {

    const [ isSendingFeedback, setisSendingFeedback ] = useState(false);

    const [screenshot, setScreenshot] = useState<string | null >(null);
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [comment, setComment] = useState('');


    function handleScreenshot() {
        captureScreen({
            format: 'jpg',
            quality: 0.8,

        })
        .then(uri => setScreenshot(uri))
        .catch(err => console.error('Oops, something went wrong', err));
    }

    function handleScreenshotRemove() {
        setScreenshot(null);
    }

    async function handleSendFeedback() {
        if(isSendingFeedback){
            return
        }
        
        setisSendingFeedback(true);

        try{

            await api.post('/feedbacks', {
                type: feedbackType,
                screenshot,
                comment

            });
            onFeedbackSent();

        }catch(error){
            console.log(error);
            setisSendingFeedback(false);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onFeedbackCanceled}>
                    <ArrowLeft
                        size={24}
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image
                        source={feedbackTypeInfo.image}
                        style={styles.image}
                    >

                    </Image>
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput
                multiline
                style={styles.input}
                placeholder="Type your feedback here"
                placeholderTextColor={theme.colors.text_secondary}
                autoCorrect={false}
                onChangeText={setComment}
            />

            <View style={styles.footer}>
                <Screenshot
                    onTakeShot={handleScreenshot}
                    onRemoveShot={handleScreenshotRemove}
                    screenshot={screenshot}
                />
                <Button
                    onPress={ handleSendFeedback }
                    isLoading={isSendingFeedback}
                />
            </View>

        </View>
    );
}