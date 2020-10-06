import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '../../components/Layout'
import { fetcherBackend } from '../../utils/fetcher';
import BookingsTable from '../../components/bookings/BookingsTable';
import useBookings from '../../components/bookings/hooks';
import FilterBookingsSection from '../../components/bookings/FilterBookingsSection';

const Bookings = ({ bookings, clinics, consumedMedications }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    data,
    handleOnClickFilterButton,
    filterBookingsSectionsProps,
    isLoading,
    page,
    changePage,
  } = useBookings(bookings, clinics, consumedMedications);

  return (
    <Layout title="Bookings">
      <div className="flex flex-col px-6">
        <FilterBookingsSection
          handleOnClickFilterButton={handleOnClickFilterButton}
          {...filterBookingsSectionsProps}
        />
        {!isLoading ? <BookingsTable bookings={data} /> : <p className="text-3xl">Loading...</p>}
      </div>
      <div className="flex flex-row justify-center my-4">
        <button className="text-2xl focus:outline-none" onClick={changePage(-1)}>
          {'<'}
        </button>
        <p className="mx-10 text-center text-2xl">
          {page}
        </p>
        <button className="text-2xl focus:outline-none" onClick={changePage(1)}>
          {'>'}
        </button>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const bookings = await fetcherBackend('bookings', {
    method: 'POST',
    body: JSON.stringify({
      page: 1
    })
  });

  const consumedMedications = await fetcherBackend('consumed-medications');
  const clinics = await fetcherBackend('clinics');

  return {
    props: {
      bookings,
      consumedMedications,
      clinics,
    }
  }
}

export default Bookings;