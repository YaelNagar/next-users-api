import User from "@/app/types/user";
export default interface StoreState {
  users: User[];
  setUsers: (users: User[]) => void;
  add: (user: User) => void;
  delete: (id: number) => void;
  update: (id: number, updatedUser: Partial<User>) => User;
}
