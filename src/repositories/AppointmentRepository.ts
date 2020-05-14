import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

class AppointmentRepository {
	private appointments: Appointment[];

	constructor() {
		this.appointments = [];
	}

	public findByDate(date: Date): Appointment | null {
		const findAppointmentInTheSameDate = this.appointments.find(appointment =>
			isEqual(date, appointment.date)
		);

		return findAppointmentInTheSameDate || null;
	}

	public create(provider: string, date: Date): Appointment {
		const appointment = new Appointment(provider, date);

		this.appointments.push(appointment);

		return appointment;
	}
}

export default AppointmentRepository;
