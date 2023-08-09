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
import {fetchPlayerData, resetError} from '../../store/slices/teamSlice';
import SearchList from '../lists/searchPlayersList/SearchList';
import OkPopup from '../popups/OkPopup';

type Props = {
  visibility: boolean;
  setVisibility: React.Dispatch<SetStateAction<boolean>>;
};

const AddPlayerBottomSheet = ({visibility, setVisibility}: Props) => {
  const playersInCurrentTeam = useAppSelector(
    state => state.teams.teamSelected?.players,
  );
  const loading = useAppSelector(state => state.teams.loading);
  const error = useAppSelector(state => state.teams.error);
  const dispatch = useAppDispatch();

  const [showPopup, setShowPopup] = useState(false);

  //show error msg popup
  useEffect(() => {
    if (error) {
      setShowPopup(true);
    }
  }, [error]);

  //bottom sheet
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['10%', '85%'], []);

  const [searchPlayerName, setSearchPlayerName] = useState('');

  //if user complete the team dismiss the bottom sheet
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

  //fetch player in API
  const handleFetchedPlayers = () => {
    if (searchPlayerName.length > 1) {
      dispatch(fetchPlayerData(searchPlayerName));
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
              onChangeText={name => setSearchPlayerName(name)}
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

          {/* error API popup msg */}
          <OkPopup
            title="Error al buscar jugadores"
            message="Ocurrió un error al intentar buscar jugadores"
            show={showPopup}
            setShow={setShowPopup}
            onConfirmPressed={() => {
              setShowPopup(false);
              dispatch(resetError());
            }}
          />
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
