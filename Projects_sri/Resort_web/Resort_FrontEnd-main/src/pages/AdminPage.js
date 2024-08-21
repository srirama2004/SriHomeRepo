import React from "react";
import NavBar from "../components/login_page/NavBar";
import Background from "../components/login_page/Background";
import Guests from "../tables/Guests";
import RoomTable from "../tables/RoomTable";
import FoodOrderedTable from "../tables/FoodOrderedTable";
import FoodTable from "../tables/FoodTable";
import ReservationsTable from "../tables/ReservationsTable";
import InvoicesTable from "../tables/InvoicesTable";
import PaymentsTable from "../tables/PaymentsTable";
import ServicesTable from "../tables/ServicesTable";
import StaffTable from "../tables/StaffTable";
import DepartmentsTable from "../tables/DepartmentsTable";
import ReviewsTable from "../tables/ReviewsTable";
import CabServicesTable from "../tables/CabServicesTable";
import OtherAmenitiesTable from "../tables/OtherAmenitiesTable";
import ResortsTable from "../tables/ResortsTable";

const AdminPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h1>Guest Table</h1>
        <Guests />
        <RoomTable />
        <FoodTable />
        <FoodOrderedTable />
        <ReservationsTable />
        <InvoicesTable />
        <PaymentsTable />
        <ServicesTable />
        <StaffTable />
        <DepartmentsTable />
        <ReviewsTable />
        <CabServicesTable />
        <OtherAmenitiesTable />
        <ResortsTable />
      </div>
    </div>
  );
};

export default AdminPage;
