/* eslint-disable @typescript-eslint/no-explicit-any */
import AppCard from "./AppCard";

const TopPaidApps = ({ apps }: { apps: any }) => {
  return (
    <section>
      <h2 className="text-3xl mb-4">Top Paid Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {apps.map((app: any) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};

export default TopPaidApps;
