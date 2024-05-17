import AppCard from "@/components/AppCard";
import { useAppSelector } from "@/hooks";
import { RootState } from "@/store";

export default function Favorites() {
  const { favoriteApps } = useAppSelector(
    (state: RootState) => state.favorites
  );

  return (
    <div>
      {favoriteApps.length === 0 ? (
        <div>No favorites yet</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {favoriteApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
