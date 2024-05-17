import React, { useEffect } from "react";
import { fetchAllApps } from "../features/apps/appsSlice";

import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../hooks";

import TopFreeApps from "@/components/TopFreeApps";
import TopPaidApps from "@/components/TopPaidApps";
import Loading from "@/components/Loading";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { topFreeApps, topPaidApps, status } = useAppSelector(
    (state: RootState) => state.apps
  );

  useEffect(() => {
    if (topFreeApps.length > 0 || topPaidApps.length > 0) return;

    dispatch(fetchAllApps());
  }, [dispatch, topFreeApps, topPaidApps]);

  return status === "loading" ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-6">
      <TopFreeApps status={status} apps={topFreeApps} />
      <TopPaidApps status={status} apps={topPaidApps} />
    </div>
  );
};

export default HomePage;
