import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentRepository';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentRepository();

appointmentsRouter.post('/', (request, response) => {
	const { provider, date } = request.body;

	const parseDate = startOfHour(parseISO(date));

	const findAppointmentInTheSameDate = appointmentsRepository.findByDate(
		parseDate
	);

	if (findAppointmentInTheSameDate) {
		return response
			.status(400)
			.json({ message: 'This appointment is already booked' });
	}

	const appointment = appointmentsRepository.create(provider, parseDate);

	return response.json(appointment);
});

export default appointmentsRouter;
