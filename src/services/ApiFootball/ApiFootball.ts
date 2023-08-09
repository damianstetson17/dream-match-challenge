import axios from 'axios';
import { FOOTBALL_API_KEY } from "@env" 

/**
 * GET for player data to Football API
 * @param player_name
 */
export const getPlayerData = async (player_name: string) => {
  const APIkey = FOOTBALL_API_KEY;
  const uri = `https://apiv3.apifootball.com/?action=get_players&player_name=${player_name}&APIkey=${APIkey}`;
  
  try {
    const response = await axios.post(uri);

    return response;
  } catch (error: any) {
    throw new Error('Error al crear la orden: ' + error?.message);
  }
};
