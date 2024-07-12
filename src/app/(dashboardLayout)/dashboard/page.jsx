"use client";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import OverView from "../../../components/overView/OverView";
import Orders from "../../../components/orders/Orders";
import ActivityOverview from "../../../components/activityOverview/ActivityOverview";
import Link from "next/link";

const DashboardPage = () => {
  const router = useRouter();
  const user = useAppSelector(useCurrentUser);

  useEffect(() => {
    if (!user) {
      router.push("/account/login");
    }
  }, [router, user]);

  return (
    <div className="p-10">
      <OverView></OverView>
      <Link href="dashboard/addProduct">
        <button>Add product</button>
      </Link>
      <div className="grid grid-cols-12 mt-16 gap-10">
        <div className="col-span-6">
          <ActivityOverview></ActivityOverview>
        </div>
        <div className="col-span-6">
          <Orders></Orders>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
