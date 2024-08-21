import React from 'react'
import NavBar from '../../components/login_page/NavBar'
import Background from '../../components/login_page/Background'
import Guests from './Guests'
import RoomTable from './RoomTable'
import FoodOrderedTable from './FoodOrderedTable'
import FoodTable from './FoodTable'
import ReservationsTable from './ReservationsTable'
import InvoicesTable from './InvoicesTable'
import PaymentsTable from './PaymentsTable'
import ServicesTable from './ServicesTable'
import StaffTable from './StaffTable'
import DepartmentsTable from './DepartmentsTable'
import ReviewsTable from './ReviewsTable'
import CabServicesTable from './CabServicesTable'
import OtherAmenitiesTable from './OtherAmenitiesTable'
import ResortsTable from './ResortsTable'

const AdminPage = () => {
  return (
    <div>

      <NavBar></NavBar>
      <div>
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
  )
}

export default AdminPage

