/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
interface AppCardProps {
  app: any;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="app-card">
      <img src={app.artworkUrl100} alt={app.name} />
      <div>{app.name}</div>
      <div>{app.artistName}</div>
    </div>
  );
};

export default AppCard;
