<script lang="ts">
	import DateSpan from "./DateSpan.svelte";

	/**
	 * The resume that will be displayed.
	 */
	export let resume: any;
</script>

<h2>{resume.basics.name}</h2>

<p>
	Contact: <a href={`mailto:${resume.basics.email}`}>{resume.basics.email}</a>
</p>

<p class="m-0">{resume.basics.summary}</p>

{#if resume.work.length > 0}
	<h2 class="mb-0">Work</h2>

	<ul class="pl-0 list-none">
		{#each resume.work as work, index}
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

{#if resume.volunteer.length > 0}
	<h2 class="mb-0">Volunteering</h2>

	<ul class="pl-0 list-none">
		{#each resume.volunteer as volunteer, index}
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

{#if resume.education.length > 0}
	<h2 class="mb-0">Education</h2>

	<ul class="pl-0 list-none">
		{#each resume.education as education, index}
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

				<p class="mb-0">Courses (not a full list):</p>

				<ul>
					{#each education.courses as course}
						<li>{course}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
{/if}

{#if resume.awards.length > 0}
	<h2 class="mb-0">Awards</h2>

	<ul class="pl-0 list-none">
		{#each resume.awards as award, index}
			{#if index > 0}
				<hr class="mx-10 my-10" />
			{/if}

			<li class="pl-0">
				<div class="flex items-baseline m-0 space-x-4">
					<p class="mb-0 font-bold opacity-75">{award.title}</p>

					<DateSpan startDate={award.startDate} />
				</div>

				<p class="my-0">{award.summary}</p>
			</li>
		{/each}
	</ul>
{/if}

<!-- TODO: certificates, publications -->

<!-- TODO: Interests, skills -->

<!-- TODO: References -->
