const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// POST route for creating a new appointment
router.post('/', async (req, res) => {
  try {
    const { name, number, email, date } = req.body;
    const newAppointment = new Appointment({ name, number, email, date });
    await newAppointment.save();
    res.status(201).send(newAppointment);
  } catch (error) {
    res.status(500).send({ message: 'Failed to book appointment', error });
  }
});

// GET route for retrieving all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).send(appointments);
  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve appointments', error });
  }
});

module.exports = router;
