import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/store";
import {
  addFavoriteWithLocalStorage,
  removeFavoriteWithLocalStorage,
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
      dispatch(removeFavoriteWithLocalStorage(app));
    } else {
      dispatch(addFavoriteWithLocalStorage(app));
    }
  };

  return (
    <Card className="min-w-[300px] dark:border dark:border-slate-600">
      <CardContent className="p-5 dark:bg-slate-900 dark:rounded-lg">
        <div className="flex justify-between items-start">
          <img
            width={50}
            height={50}
            className="rounded-lg mb-1"
            src={app.artworkUrl100}
            alt={app.name}
          />
          <button onClick={handleFavoriteClick}>
            {isFavorite ? (
              <HeartFilledIcon width={18} height={18} />
            ) : (
              <HeartIcon width={18} height={18} />
            )}
          </button>
        </div>
        <p className="text-xs text-gray-400">{app.name}</p>
        <div>{app.artistName}</div>
      </CardContent>
    </Card>
  );
};

export default AppCard;
