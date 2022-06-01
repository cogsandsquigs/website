import { dateOptions } from "$lib/info"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc.js"
import timezone from "dayjs/plugin/timezone.js"

dayjs.extend(utc)
dayjs.extend(timezone)

function dateSort(a, b) {
	return (
		new Date(b.metadata.date).getTime() -
		new Date(a.metadata.date).getTime()
	)
}

export async function posts() {
	// grab all of the post files
	const files = import.meta.glob("$posts/*.md")

	// holds all the posts
	let posts = []

	// puts all the posts in the pages array
	for (let file in files) {
		let p = await files[file]()
		posts.push({
			metadata: {
				...p.metadata,
				slug: file.slice(9, file.indexOf(".md")),
				date: dayjs.tz(p.metadata.date, dateOptions.timeZone).toDate(),
			},
			renderer: p.default,
		})
	}

	// Newest first
	posts.sort(dateSort)

	return posts
}
