import React, {
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {TextInput} from 'react-native-gesture-handler';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchPlayerData} from '../../store/slices/teamSlice';
import SearchList from '../lists/searchPlayersList/SearchList';

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
  const playersInCurrentTeam = useAppSelector(
    state => state.teams.teamSelected?.players,
  );
  const loading = useAppSelector(state => state.teams.loading);
  const dispatch = useAppDispatch();

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['10%', '85%'], []);

  const [playerName, setPlayerName] = useState('');

  useEffect(() => {
    if (playersInCurrentTeam?.length === 5) {
      setVisibility(false);
    }
  }, [playersInCurrentTeam]);

  //handling bottomsheet visibility
  useEffect(() => {
    if (visibility) bottomSheetRef?.current?.present();
    else bottomSheetRef?.current?.close();
  }, [visibility]);

  const handleAddPlayer = () => {
    setVisibility(false);
  };

  const handleFetchedPlayers = () => {
    if (playerName.length > 1) {
      dispatch(fetchPlayerData(playerName));
    }
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
              onChangeText={name => setPlayerName(name)}
              onEndEditing={() => handleFetchedPlayers()}
            />
          </View>

          {/* player fetch */}
          <View
            style={{
              flex: 1,
            }}>
            {loading ? (
              <View style={styles.activIndicatorContainer}>
                <ActivityIndicator color={'#181828'} size={60} />
              </View>
            ) : (
              <View>
                <SearchList />
              </View>
            )}
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
  },
  subTitle: {
    color: '#181828',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'comforta',
    textAlignVertical: 'center',
  },
  txtInput: {
    backgroundColor: '#181828',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  activIndicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
