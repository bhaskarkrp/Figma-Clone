import { generateRandomName } from "@/lib/utils";
import { useOthers } from "@liveblocks/react";
import { useMemo } from "react";
import { COLORS } from "@/constants";

export const useGetUsers = () => {
  const users = useOthers();

  return useMemo(() => {
    const modifiedUsers = users.map((user) => ({
      ...user,
      name: generateRandomName(user?.connectionId),
      color: COLORS[Number(user?.connectionId) % COLORS.length],
    }));

    return modifiedUsers;
  }, [users.length]);
};
