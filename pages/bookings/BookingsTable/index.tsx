import { BOOKINGS, TABLE_HEAD_ITEMS } from '../constants';
import { Fragment } from 'react';
import { BookingTableRowProps } from './types';

const BookingsTable = () => {
    return (
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
    );
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

export default BookingsTable;