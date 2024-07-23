import React from "react";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";
import { useOthers } from "@liveblocks/react";
import { useGetUsers } from "../users/useGetUsers";

const LiveCursors = () => {
  const users = useOthers();
  const modifiedUsers = useGetUsers();

  return users.map(({ connectionId, presence }, index) => {
    if (!presence?.cursor) return null;

    return (
      <Cursor
        key={connectionId}
        color={modifiedUsers?.[index].color}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message || ""}
        name={modifiedUsers?.[index].name}
      />
    );
  });
};

export default LiveCursors;
