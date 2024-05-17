/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchTopFreeApps, fetchTopPaidApps } from "../features/apps/appsSlice";

import { RootState } from "../store";
import { useAppDispatch } from "../hooks";

import TopFreeApps from "@/components/TopFreeApps";
import TopPaidApps from "@/components/TopPaidApps";
import Loading from "@/components/Loading";

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
    <Loading />
  ) : (
    <div className="flex flex-col gap-6">
      <TopFreeApps apps={topFreeApps} />
      <TopPaidApps apps={topPaidApps} />
    </div>
  );
};

export default HomePage;
