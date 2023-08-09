import React, {SetStateAction, useEffect, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {TextInput} from 'react-native-gesture-handler';
import PlayerCard from '../cards/PlayerCard';
import ActionButton from '../buttons/ActionButton';

const player = {
  player_image:
    'https://apiv3.apifootball.com/badges/players/9898_k-benzema.jpg',
  player_name: 'K. Benzema',
  player_number: '9',
  player_age: '35',
  team_name: 'Real Madrid',
};

type Props = {
  visibility: boolean;
  setVisibility: React.Dispatch<SetStateAction<boolean>>;
};

const AddPlayerBottomSheet = ({visibility, setVisibility}: Props) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['10%', '85%'], []);

  //handling bottomsheet visibility
  useEffect(() => {
    if (visibility) bottomSheetRef?.current?.present();
    else bottomSheetRef?.current?.close();
  }, [visibility]);

  const handleAddPlayer = () => {
    setVisibility(false);
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onDismiss={() => setVisibility(false)}>
        <View style={styles.contentContainer}>
          {/* player name input */}
          <Text style={styles.title}>Agregar un jugador</Text>
          <Text style={styles.subTitle}>Nombre</Text>
          <View style={styles.txtInput}>
            <TextInput
              placeholder=". . ."
              maxLength={30}
              style={{color: 'white', fontSize: 20}}
              placeholderTextColor="white"
              caretHidden={false}
            />
          </View>

          {/* player fetch */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <PlayerCard playerData={player} />

            <View style={{margin: 25}}>
              <ActionButton
                title="Agregar al equipo"
                onPress={handleAddPlayer}
                bgColor="#357a38"
              />
            </View>
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default AddPlayerBottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: 'white',
  },
  title: {
    color: '#181828',
    fontSize: 30,
    fontFamily: 'comforta',
    marginTop: 10,
  },
  subTitle: {
    color: '#181828',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'comforta',
    textAlignVertical: 'center',
  },
  txtInput: {
    backgroundColor: '#181828',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});
