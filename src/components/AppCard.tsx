import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/store";
import {
  addFavorite,
  removeFavorite,
} from "@/features/favorites/favoritesSlice";
import { AppData } from "@/types";

interface AppCardProps {
  app: AppData;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const dispatch = useAppDispatch();

  const { favoriteApps } = useAppSelector(
    (state: RootState) => state.favorites
  );

  const isFavorite = favoriteApps.some(
    (favoriteApp) => favoriteApp.id === app.id
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(app));
    } else {
      dispatch(addFavorite(app));
    }
  };

  return (
    <Card className="min-w-[300px] dark:border dark:border-slate-600">
      <CardContent className="p-5 dark:bg-slate-900 dark:rounded-lg">
        <div className="flex justify-between items-start">
          <img
            width="50px"
            height="50px"
            className="rounded-lg mb-1"
            src={app.artworkUrl100}
            alt={app.name}
          />
          <button onClick={handleFavoriteClick}>
            {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
          </button>
        </div>
        <p className="text-xs text-gray-400">{app.name}</p>
        <div>{app.artistName}</div>
      </CardContent>
    </Card>
  );
};

export default AppCard;
