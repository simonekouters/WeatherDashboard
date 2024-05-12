export function getWeatherIcon(weatherCode) {
	const iconGroups = [
		["helder", 0],
		["bewolkt", 1, 2, 3],
		["mist", 45, 48],
		["motregen", 51, 53, 55, 56, 57],
		["regen", 61, 63, 65, 66, 67, 80, 81, 82],
		["sneeuw", 71, 73, 75, 77, 85, 86],
		["onweer", 95, 96, 99]
	];

	for (const group of iconGroups) {
		if (group.includes(weatherCode)) {
			return group[0];
		}
	}
	return "helder";
}

export function getFormattedDate(unformattedDate) {
	const daysOfWeek = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
	const months = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
	const date = new Date(unformattedDate);

	const dayOfWeek = daysOfWeek[date.getDay()];
	const dayOfMonth = date.getDate();
	const monthIndex = date.getMonth();
	const month = months[monthIndex];
	return dayOfWeek + " " + dayOfMonth + " " + month;
}

