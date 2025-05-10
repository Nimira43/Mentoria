export default {
  registerMentor(context, data) {
    const mentorData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyDate: data.rate,
      areas: data.areas
    }
  }
}