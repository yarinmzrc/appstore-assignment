/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AppCardProps {
  app: any;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <Card className="min-w-[300px]">
      <CardContent className="p-5">
        <img
          width="50px"
          height="50px"
          className="rounded-lg mb-1"
          src={app.artworkUrl100}
          alt={app.name}
        />
        <p className="text-xs text-gray-400">{app.name}</p>
        <div>{app.artistName}</div>
      </CardContent>
    </Card>
  );
};

export default AppCard;
