import React from 'react';
import renderer from 'react-test-renderer';
import DateBookingInput from '.';
import { DateBookingInputProps } from './types'
import moment from 'moment'

describe('DateBookingInput', () => {
    const props: DateBookingInputProps = {
        dateBooking: new Date(),
        onInputChange: () => { }
    };
    it('Render actual date', () => {
        const component = renderer.create(<DateBookingInput {...props} />);
        const input = component.root.findByType('input')
        const actualDate = moment(new Date()).utc().format('DD/MM/yyyy');
        expect(input.props.value).toBe(actualDate);
    });

    it('Call onInputChange correctl correcly', () => {
        const props: DateBookingInputProps = {
            dateBooking: new Date(),
            onInputChange: jest.fn(),
        }
        const component = renderer.create(<DateBookingInput {...props} />);
        const input = component.root.findByType('input')
        input.props.onChange({ target: { value: new Date(1995, 11, 17) } });

        expect(props.onInputChange).toHaveBeenCalledTimes(1)
    });
});
