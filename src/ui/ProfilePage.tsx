import { getProfile } from "../api/profile";

export function ProfilePage({ userId }: { userId: string }) {
  const profile = getProfile(userId);
  return `<p>${profile.bio}</p>`;
}
