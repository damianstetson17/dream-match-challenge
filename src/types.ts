/**
 * Team type for listing teams and handling data
 */
export type Team = {
  name: string;
  number: number;
  players: PlayerData[];
};

/**
 * Item type for players used for listing teams
 * and getting data from api
 */
export type PlayerData = {
  player_image: string;
  player_name: string;
  player_number: string;
  player_birthdate: string;
  team_name: string;
};

/**
 * UpdateTeamPayloadType payload for updating team reducer
 */
export type UpdateTeamPayloadType = {
  oldName: string;
  newTeamValues: Team;
};
