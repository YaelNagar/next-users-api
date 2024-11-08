import axios from "axios";
import User from "@/app/types/user";

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUser = async (id: string): Promise<User> => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
