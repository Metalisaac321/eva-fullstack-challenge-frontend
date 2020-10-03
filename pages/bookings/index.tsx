import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import fetcher from '../../utils/fetcher';
import BookingsTable from '../../components/bookings/BookingsTable';

const Bookings = () => {
  return (
    <Layout title="Bookings">
      <div className="flex flex-col px-6">
        <FilterBookingsSection />
        <BookingsTable />
      </div>
    </Layout>
  )
}

const FilterBookingsSection = () => {
  return (
    <div className="mb-12 border p-3">
      <p className="text-3xl text-center mb-6">
        Filter Bookings
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p>
            Date Booking
          </p>
          <input
            className="border-2 border-purple-400"
            placeholder="Date Booking"
            onChange={() => { }}
            type="date"
            value=""
          />
        </div>
        <div>
          jkfldñs
        </div>
        <div>9</div>
      </div>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const items = await fetcher('users');

  return {
    props: { items }
  }
}

export default Bookings;