import { AppData, Status } from "@/types";
import AppCard from "./AppCard";

interface TopPaidAppsProps {
  apps: Array<AppData>;
  status: string;
}

const TopPaidApps = ({ apps, status }: TopPaidAppsProps) => {
  return (
    <section>
      <h2 className="text-3xl mb-4">Top Paid Apps</h2>
      {status !== Status.LOADING && apps.length === 0 ? (
        <p>No apps found</p>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {apps.map((app: AppData) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};

export default TopPaidApps;
