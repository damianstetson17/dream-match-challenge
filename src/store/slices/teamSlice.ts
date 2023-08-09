import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PlayerData, Team, UpdateTeamPayloadType} from '../../types';
import {getPlayerData} from '../../services/ApiFootball/ApiFootball';

interface TeamSlice {
  teams: Team[];
  loading: boolean;
  error: boolean;
  playerFetchedData: PlayerData[];
  teamSelected: Team | null;
}

const initialState: TeamSlice = {
  teams: [],
  teamSelected: null,
  loading: false,
  error: false,
  playerFetchedData: [],
};

/**
 * Try GET player information
 */
export const fetchPlayerData = createAsyncThunk(
  'FootballApi/fetchPlayerData',
  async (player_name: string, thunkAPI) => {
    try {
      const response = await getPlayerData(player_name);

      //if an error is returned
      if (response.hasOwnProperty('error')) {
        return thunkAPI.rejectWithValue(
          'Ocurrió un error al intentar buscar jugadores, intentalo más tarde o verifica tus credenciales (.inv)',
        );
      }
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  },
);

export const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    //set selected team state for handling updates
    setTeamSelected: (state, action: PayloadAction<Team | null>) => {
      state.teamSelected = action.payload;
    },

    //set selected team state for handling updates
    addNewTeam: (state, action: PayloadAction<Team>) => {
      const newTeam = action.payload;

      //can't add more than two teams
      if (state.teams.length < 2) {
        //if not exists already a teamwith the same name
        if (!state.teams.find(team => team.name === newTeam.name)) {
          state.teams = [...state.teams, newTeam];
        }
      }
    },

    //delete player from selected team state
    //(can be updated too using setTeamSelected reducer, but this one helps to reduces code)
    deletePlayer: (state, action: PayloadAction<string>) => {
      if (state.teamSelected) {
        const playerToDeleteName = action.payload;
        state.teamSelected.players = state.teamSelected?.players.filter(
          p => p.player_name !== playerToDeleteName,
        );
      }
    },
    addPlayer: (state, action: PayloadAction<PlayerData>) => {
      const newPlayer = action.payload;

      //null check, in that case we fill it with blank data
      if (!state.teamSelected) {
        state.teamSelected = {name: '', players: [newPlayer], number: 1};
      }

      //max players check (only 5)
      if (state.teamSelected.players.length === 5) {
        return;
      }

      //if is the first player to add
      if (state.teamSelected.players.length === 0) {
        state.teamSelected.players = [...state.teamSelected.players, newPlayer];
        return;
      }

      //if the player is not already in any team
      if (
        !state.teamSelected?.players.find(
          p => p.player_name === newPlayer.player_name,
        )
      ) {
        state.teamSelected.players = [...state.teamSelected.players, newPlayer];
      }
    },

    //update an existing team in teams state
    updateTeam: (state, action: PayloadAction<UpdateTeamPayloadType>) => {
      const {oldName, newTeamValues} = action.payload;

      // Find the index of the team to update
      const teamIndex = state.teams.findIndex(team => team.name === oldName);

      if (teamIndex !== -1) {
        // Create a new state with the updated team
        const updatedTeams = [...state.teams];
        updatedTeams[teamIndex] = newTeamValues;

        //setting the updated states
        state.teams = updatedTeams;
      }
    },

    //delete a team in teams state
    deleteTeam: (state, action: PayloadAction<string>) => {
      const teamToDeleteName = action.payload;
      state.teams = state.teams.filter(t => t.name !== teamToDeleteName);
    },

    //delete data api
    resetData: state => {
      state.playerFetchedData = [];
    },
    //delete error msg
    resetError: state => {
      state.error = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPlayerData.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchPlayerData.fulfilled,
        (state, action: PayloadAction<PlayerData[]>) => {
          state.loading = false;
          state.playerFetchedData = action.payload;
        },
      )
      .addCase(fetchPlayerData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {
  setTeamSelected,
  addPlayer,
  addNewTeam,
  deletePlayer,
  deleteTeam,
  updateTeam,
  resetData,
  resetError,
} = teamSlice.actions;
export default teamSlice.reducer;
