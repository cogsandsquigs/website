<script lang="ts">
	import DateSpan from "./DateSpan.svelte";

	/**
	 * The cv that will be displayed.
	 */
	export let cv: any;
</script>

<h2>{cv.basics.name}</h2>

<p>
	Contact: <a href={`mailto:${cv.basics.email}`}>{cv.basics.email}</a>
</p>

<p class="m-0">{cv.basics.summary}</p>

{#if cv.work.length > 0}
	<h2 class="mb-0">Work</h2>

	<ul class="pl-0 list-none">
		{#each cv.work as work, index}
			{#if index > 0}
				<hr class="mx-10 my-10" />
			{/if}

			<li class="pl-0">
				<div class="flex items-baseline m-0 space-x-4">
					<p class="mb-0 font-bold">
						<a href={work.url}>{work.name}</a>
					</p>

					<p class="mb-0 font-bold opacity-75">{work.position}</p>

					<DateSpan startDate={work.startDate} endDate={work.endDate} />
				</div>

				<p class="my-0">{work.summary}</p>

				<p class="mb-0">Highlights:</p>

				<ul>
					{#each work.highlights as highlight}
						<li>{highlight}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
{/if}

{#if cv.volunteer.length > 0}
	<h2 class="mb-0">Volunteering</h2>

	<ul class="pl-0 list-none">
		{#each cv.volunteer as volunteer, index}
			{#if index > 0}
				<hr class="mx-10 my-10" />
			{/if}

			<li class="pl-0">
				<div class="flex items-baseline m-0 space-x-4">
					<p class="mb-0 font-bold">
						<a href={volunteer.url}>{volunteer.organization}</a>
					</p>

					<p class="mb-0 font-bold opacity-75">{volunteer.position}</p>

					<DateSpan startDate={volunteer.startDate} endDate={volunteer.endDate} />
				</div>

				<p class="my-0">{volunteer.summary}</p>

				<p class="mb-0">Highlights:</p>

				<ul>
					{#each volunteer.highlights as highlight}
						<li>{highlight}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
{/if}

{#if cv.education.length > 0}
	<h2 class="mb-0">Education</h2>

	<ul class="pl-0 list-none">
		{#each cv.education as education, index}
			{#if index > 0}
				<hr class="mx-10 my-10" />
			{/if}

			<li class="pl-0">
				<div class="flex items-baseline m-0 space-x-4">
					<p class="mb-0 font-bold">
						<a href={education.url}>{education.institution}</a>
					</p>

					<p class="mb-0 font-bold opacity-75">{education.area}</p>

					<DateSpan startDate={education.startDate} endDate={education.endDate} />
				</div>

				<p class="my-0">
					Achieved my {education.studyType} with a (weighted) GPA of {education.score}
				</p>

				{#if education.courses.length > 0}
					<p class="mb-0">Courses (not a full list):</p>

					<ul>
						{#each education.courses as course}
							<li>{course}</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
{/if}

{#if cv.awards.length > 0}
	<h2 class="mb-0">Awards</h2>

	<ul class="pl-0 list-none">
		{#each cv.awards as award, index}
			{#if index > 0}
				<hr class="mx-10 my-10" />
			{/if}

			<li class="pl-0">
				<div class="flex items-baseline m-0 space-x-4">
					<p class="mb-0 font-bold opacity-75">{award.title}</p>

					<DateSpan startDate={award.date} />
				</div>

				<p class="my-0">{award.summary}</p>
			</li>
		{/each}
	</ul>
{/if}

<!-- TODO: certificates, publications -->

<!-- TODO: Interests, skills -->

<!-- TODO: References -->
