import axios from 'axios';

export const getCurrentTime = async () => {
  try {
    const response = await axios.get('http://worldtimeapi.org/api/timezone/Europe/Kyiv');

    const { timezone, unixtime, raw_offset } = response.data;
    return { timezone, unixtime, raw_offset };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
