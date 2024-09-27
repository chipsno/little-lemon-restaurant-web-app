import React, { memo } from 'react'

import {
    Button,
    DatePicker,
    Form,
    InputNumber,
    Select,
} from 'antd';
import dayjs from 'dayjs';

import { fetchAPI, submitAPI } from "../../../../mock/fetchAPI";

import styles from './index.module.scss'


const BookingForm = memo(({ handleBooking }) => {

    const [ availableTimes, setAvailableTimes ] = React.useState([]);
    const [ form ] = Form.useForm();
    const currSelectedDate = Form.useWatch('selectedDate', form);

    React.useEffect(() => {
        if (currSelectedDate) {
            const d = new Date(currSelectedDate);
            const resAvailableTimes = fetchAPI(d);
            setAvailableTimes(resAvailableTimes);
        } else {
            setAvailableTimes([]);
        }
    }, [currSelectedDate])

    const handleFormFinish = (currFormData) => {
        const res = submitAPI(currFormData);
        handleBooking(res);
    }

    const guestsNumberValidation = async (_, value) => {
        try {
            const reg = /^\d+$/
            if (value === undefined || value === null) {
                return Promise.reject("Please input a valid number of guests!")
            } else if (!(reg.test(value))) {
                return Promise.reject("Please enter a number between 1 and 10")
            } else if (Number(value) < 1 || Number(value) > 10) {
                return Promise.reject("Please enter a number between 1 and 10")
            } else {
                return Promise.resolve("")
            }
        } catch(err) {
            return Promise.reject("Please input a valid number of guests!")
        }
    }

    return (
        <div className={styles["booking-form-wrapper"]}>
            <Form
                form={form}
                name="bookingForm"
                labelCol={{
                    flex: 1,
                }}
                wrapperCol={{
                    flex: 1,
                }}
                labelAlign="left"
                labelWrap
                layout="vertical"
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    selectedDate: dayjs(),
                    selectedTime: "",
                    numberOfGuests: 1,
                    occasion: "",
                }}
                onFinish={handleFormFinish}
            >
                <div className={styles["booking-form-items"]}>
                    <div>
                        <Form.Item
                            label="Date"
                            validateTrigger="onBlur"
                            name="selectedDate"
                            // hasFeedback
                            rules={[
                                { required: true, message: 'Please select the date you wish to book.' },
                            ]}
                        >
                            <DatePicker minDate={dayjs()} />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            label="Time"
                            validateTrigger="onBlur"
                            name="selectedTime"
                            // hasFeedback
                            rules={[
                                { required: true, message: 'Please select the time you wish to book.' },
                            ]}
                        >
                            <Select>
                                {
                                    availableTimes?.map((availableTime) => {
                                        return <Select.Option key={availableTime} value={availableTime}>{availableTime}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            label="Number of guests"
                            validateTrigger="onBlur"
                            name="numberOfGuests"
                            // hasFeedback
                            rules={[
                                { validator: guestsNumberValidation },
                            ]}>
                            <InputNumber
                                min={1}
                                max={10}
                                // defaultValue={1}
                            />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            label="Occasion"
                            validateTrigger="onBlur"
                            name="occasion"
                            // hasFeedback
                            rules={[
                                { required: true, message: 'Please select the occasion.' },
                            ]}
                        >
                            <Select
                                placeholder="Select a Occasion"
                                options={[
                                    {
                                      value: 'birthday',
                                      label: 'Birthday',
                                    },
                                    {
                                      value: 'anniversary',
                                      label: 'Anniversary',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </div>
                </div>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Button type="default" htmlType="submit" className={`${styles["button-primary"]}`}>
                        Reserve now!
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
});

export default BookingForm;
