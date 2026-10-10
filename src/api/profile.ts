import type { Profile } from "../models/profile";

export function getProfile(userId: string): Profile {
  return { userId, bio: "" };
}
