import axios from "axios";
import Practice from "../types/Practice";

export const getPractice = async (): Promise<Practice[]> => {
  try {
    const response = await axios.get("http://localhost:3000/api/usersApi");
    return response.data.practice;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
};
