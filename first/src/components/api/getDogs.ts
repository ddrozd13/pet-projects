import axios from "axios";

export interface IGetDog {
  message: string[];
}

const getDogs = async (): Promise<IGetDog> => {
    try{
      const response = await axios.get(`https://dog.ceo/api/breed/hound/images`);

      return response.data;
    } catch (e) {
      alert(e);
      throw(e);
    }

}
export default getDogs;