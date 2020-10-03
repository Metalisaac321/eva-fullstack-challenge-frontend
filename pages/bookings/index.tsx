import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '../../components/Layout'
import useSWR from 'swr'
import fetcher from '../../utils/fetcher';
import BookingsTable from './BookingsTable';

const Bookings = ({ items }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data, error } = useSWR('users', fetcher, { initialData: items })

  return (
    <Layout title="Bookings">
      <div className="flex flex-col">
        <BookingsTable />
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