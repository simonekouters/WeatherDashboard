export function getWeatherIcon(weatherCode) {
    const iconGroups = [
      ["clear"],
      ["cloudy", 1, 2, 3],
      ["fog", 45, 48],
      ["drizzle", 51, 53, 55, 56, 57],
      ["rain", 61, 63, 65, 66, 67, 80, 81, 82],
      ["snow", 71, 73, 75, 77, 85, 86]
    ];

    for (const group of iconGroups) {
      if (group.includes(weatherCode)) {
          return group[0];
      }
    }
    return "clear";
}

export function getFormattedDate(unformattedDate) {
    const daysOfWeek = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    const date = new Date(unformattedDate); 

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    return dayOfWeek + " " + dayOfMonth + " " + month;
}

