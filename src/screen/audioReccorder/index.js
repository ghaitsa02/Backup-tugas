import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AudioEncoderAndroidType,
  AudioSet,
} from 'react-native-audio-recorder-player';
import {request, PERMISSIONS} from 'react-native-permissions';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioPath, setAudioPath] = useState(null);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {
    requestPermissions();
    const audioRecorderPlayer = new AudioRecorderPlayer();
    setRecorder(audioRecorderPlayer);
  }, []);

  const requestPermissions = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
      console.log('Permission Result:', result);
    } catch (error) {
      console.log('Error requesting permissions:', error);
    }
  };

  const startRecording = async () => {
    if (recorder) {
      const audioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        OutputFormatIOS: 'mpeg_4',
        AudioSourceAndroid: 6, // AudioSource.MIC
      };

      const path = await recorder.startRecorder(audioSet);
      setAudioPath(path);
      setIsRecording(true);
    }
  };

  const stopRecording = async () => {
    if (recorder) {
      const result = await recorder.stopRecorder();
      setIsRecording(false);
      console.log('Audio file saved at:', result);
    }
  };

  return (
    <View>
      <Text>Audio Recorder</Text>
      <Button
        title={isRecording ? 'Stop' : 'Record'}
        onPress={isRecording ? stopRecording : startRecording}
      />
      {audioPath && <Text>Audio file saved at: {audioPath}</Text>}
    </View>
  );
};

export default AudioRecorder;
