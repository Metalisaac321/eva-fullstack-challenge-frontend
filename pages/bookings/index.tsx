import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '../../components/Layout'
import { fetcher } from '../../utils/fetcher';
import BookingsTable from '../../components/bookings/BookingsTable';
import useBookings from '../../components/bookings/hooks';
import FilterBookingsSection from '../../components/bookings/FilterBookingsSection';
import Router from 'next/router';

const Bookings = ({ bookings, clinics, consumedMedications }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    data,
    handleOnClickFilterButton,
    filterBookingsSectionsProps,
    isLoading,
    page,
    changePage,
    isUserLogged,
  } = useBookings(bookings, clinics, consumedMedications);

  if (!isUserLogged) {
    Router.replace('/')
  }

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
  const auth = await fetcher('auth/login', {
    method: 'POST',
    body: {
      username: "admin",
      password: "admin"
    }
  })
  const access_token = auth.access_token;

  const bookings = await fetcher('bookings', {
    method: 'POST',
    access_token,
    body: {
      page: 1
    }
  });

  const consumedMedications = await fetcher('consumed-medications', {
    method: 'GET',
    access_token,
  });

  const clinics = await fetcher('clinics', {
    method: 'GET',
    access_token,
  });

  return {
    props: {
      bookings,
      consumedMedications,
      clinics,
    }
  }
}

export default Bookings;