import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
	const { provider, date } = request.body;

	const parseDate = startOfHour(parseISO(date));

	const findAppointmentInTheSameDate = appointments.find(appointment =>
		isEqual(parseDate, appointment.date)
	);

	if (findAppointmentInTheSameDate) {
		return response
			.status(400)
			.json({ message: 'This appointment is already booked' });
	}

	const appointment = new Appointment(provider, parseDate);

	appointments.push(appointment);

	return response.json(appointment);
});

export default appointmentsRouter;
