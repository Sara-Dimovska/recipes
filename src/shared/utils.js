export default {
  formatTime (time) {
    let timeFormated = ''
    if (time.indexOf(':') !== -1) {
      const timeSplit = time.split(':')

      // 2 => 02 hours
      if (timeSplit[0].length < 2) { timeSplit[0] = `0${timeSplit[0]}` }
      // 2 => 02 minutes
      if (timeSplit[1].length < 2) { timeSplit[1] = `0${timeSplit[1]}` }

      timeFormated = `${timeSplit[0]} hours ${timeSplit[1]} minutes`
    } if (time.length < 2) {
      time = `0${time}`
      timeFormated = `${time} minutes`
    } if (time.length === 2) {
      timeFormated = `${time} minutes`
    }

    return timeFormated
  }
}
