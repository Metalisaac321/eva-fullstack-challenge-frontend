import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import fetcher from '../../utils/fetcher';
import BookingsTable from '../../components/bookings/BookingsTable';
import useBookings from '../../components/bookings/hooks';
import FilterBookingsSection from '../../components/bookings/FilterBookingsSection';

const Bookings = () => {
  const {
    bookings,
    setBookings,
  } = useBookings();

  return (
    <Layout title="Bookings">
      <div className="flex flex-col px-6">
        <FilterBookingsSection />
        <BookingsTable bookings={bookings} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const items = await fetcher('users');

  return {
    props: { items }
  }
}

export default Bookings;