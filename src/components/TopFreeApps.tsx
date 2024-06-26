import { AppData, Status } from "@/types";
import AppCard from "./AppCard";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface TopFreeAppsProps {
  apps: Array<AppData>;
  status: string;
}

const TopFreeApps = ({ apps, status }: TopFreeAppsProps) => {
  return (
    <section>
      <h2 className="text-3xl mb-4">Top Free Apps</h2>
      {status !== Status.LOADING && apps.length === 0 ? (
        <p>No apps found</p>
      ) : null}
      <ScrollArea className="whitespace-nowrap rounded-md gap-3">
        <div className="flex w-max space-x-4 pb-4">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default TopFreeApps;
