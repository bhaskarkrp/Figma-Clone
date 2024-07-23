import React from "react";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";
import { useOthers } from "@liveblocks/react";

const LiveCursors = () => {
  const users = useOthers();

  return users.map(({ connectionId, presence }) => {
    if (!presence?.cursor) return null;

    console.log({ presence });

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message || ""}
        name={connectionId.toString()}
      />
    );
  });
};

export default LiveCursors;
