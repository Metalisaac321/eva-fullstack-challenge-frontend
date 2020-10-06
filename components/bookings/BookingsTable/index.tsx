import { TABLE_HEAD_ITEMS } from './constants';
import { Fragment, memo } from 'react';
import { BookingTableProps, BookingTableRowProps } from './types';
import moment from 'moment';

const BookingsTable = memo(({ bookings }: BookingTableProps) => {
    return (
        <table className="table-auto border">
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
                    bookings.map(({ bookingId, ...booking }) => (
                        <Fragment key={bookingId}>
                            <BookingTableRow {...booking} />
                        </Fragment>
                    ))
                }
            </tbody>
        </table>
    );
});

const BookingTableRow = ({ clinic, women, dateTime, consumedMedications }: BookingTableRowProps) => (
    <tr>
        <td className="border px-4 py-2">{women.name}</td>
        <td className="border px-4 py-2">{women.email}</td>
        <td className="border px-4 py-2">{moment(dateTime).utc().format('DD/MM/yyyy HH:mm')}</td>
        <td className="border px-4 py-2">{clinic.name}</td>
        <td className="border px-4 py-2">
            {consumedMedications.map((consumedMedication) => consumedMedication.name).join()}
        </td>
    </tr>
)

export default BookingsTable;