import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '../../components/Layout'
import useSWR from 'swr'
import fetcher from '../../utils/fetcher';
import { BOOKINGS, TABLE_HEAD_ITEMS } from './constants';
import { Booking, BookingTableRowProps } from './types';
import { Fragment } from 'react';

const Bookings = ({ items }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data, error } = useSWR('users', fetcher, { initialData: items })

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <table className="table-auto">
        <thead>
          <tr>
            {
              TABLE_HEAD_ITEMS.map((tableHeadItem) => (
                <th key={tableHeadItem} className="px-4 py-2">{tableHeadItem}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            BOOKINGS.map(({ bookingId, ...booking }) => (
              <Fragment key={bookingId}>
                <BookingTableRow {...booking} />
              </Fragment>
            ))
          }
        </tbody>
      </table>
    </Layout>
  )
}

const BookingTableRow = ({ womenName, consumedMedications, clinicName, dateTimeBooking, womenEmail }: BookingTableRowProps) => (
  <tr>
    <td className="border px-4 py-2">{womenName}</td>
    <td className="border px-4 py-2">{womenEmail}</td>
    <td className="border px-4 py-2">{dateTimeBooking}</td>
    <td className="border px-4 py-2">{clinicName}</td>
    <td className="border px-4 py-2">{consumedMedications}</td>
  </tr>
)

export const getStaticProps: GetStaticProps = async () => {
  const items = await fetcher('users');

  return {
    props: { items }
  }
}

export default Bookings;