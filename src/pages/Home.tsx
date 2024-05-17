/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchTopFreeApps, fetchTopPaidApps } from "../features/apps/appsSlice";

import { RootState } from "../store";
import { useAppDispatch } from "../hooks";
import AppCard from "../components/AppCard";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { topFreeApps, topPaidApps, status } = useSelector(
    (state: RootState) => state.apps
  );

  useEffect(() => {
    dispatch(fetchTopFreeApps());
    dispatch(fetchTopPaidApps());
  }, [dispatch]);

  return status === "loading" ? (
    <div>Loading</div>
  ) : (
    <div className="home-page">
      <section className="top-free-apps">
        <h2>Top Free Apps</h2>
        <div className="horizontal-scroll">
          {topFreeApps.map((app: any) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
      <section className="top-paid-apps">
        <h2>Top Paid Apps</h2>
        <div className="vertical-scroll">
          {topPaidApps.map((app: any) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
