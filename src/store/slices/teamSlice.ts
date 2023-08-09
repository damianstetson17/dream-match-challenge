import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Team, UpdateTeamPayloadType} from '../../types';

interface TeamSlice {
  teams: Team[];
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string;
  data: any;
  teamSelected: Team | null;
}

const initialState: TeamSlice = {
  teams: [
    {
      name: 'Los super pibes',
      number: 1,
      players: [
        {
          player_image:
            'https://apiv3.apifootball.com/badges/players/9898_k-benzema.jpg',
          player_name: 'K. Benzema',
          player_number: '9',
          player_age: '35',
          team_name: 'Real Madrid',
        },
      ],
    },
    {name: 'Re locos FC', number: 2, players: []},
  ],
  teamSelected: null,
  loading: 'idle',
  error: '',
  data: null,
};

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
      //can't add more than two teams
      if (state.teams.length < 2) {
        state.teams = [...state.teams, action.payload];
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
      state.data = null;
    },
  },
  extraReducers: builder => {},
});

export const {
  setTeamSelected,
  addNewTeam,
  deletePlayer,
  deleteTeam,
  updateTeam,
  resetData,
} = teamSlice.actions;
export default teamSlice.reducer;
