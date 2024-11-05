"use client";
import { create } from "zustand";
import StoreState from "@/app/types/storeState";
import User from "@/app/types/user";

const useStore = create<StoreState>((set, get) => ({
  users: [],
  setUsers: (users) => set(() => ({ users })),
  add: (user: User) => set((state) => ({ users: [...state.users, user] })),
  delete: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  update: (id: number, updatedUser: Partial<User>): User => {
    set((state) => {
      const users = state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      );
      return { users };
    });
    const updatedUsers = get().users;
    const updatedUserRecord = updatedUsers.find((user) => user.id === id);

    if (!updatedUserRecord) {
      throw new Error(`User with id ${id} not found`);
    }

    return updatedUserRecord;
  },
}));

export default useStore;
