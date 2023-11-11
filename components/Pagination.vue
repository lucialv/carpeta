<template>
	<div class="mx-4 mt-32 text-center md:mx-16">
		<div
			class="mx-auto flex w-[75%] items-center justify-center gap-x-8 bg-opacity-30 bg-gradient-to-r from-transparent via-purple-200 to-transparent py-3 text-center font-bold"
		>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="text-purple-500 opacity-50 hover:opacity-100"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
				>
					<path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z" />
				</svg>
			</button>
			<div class="flex gap-x-4 text-xs md:gap-x-4 md:text-sm">
				<!-- Genera dinámicamente los enlaces para los días -->
				<nuxt-link v-if="currentDayIndex >= 2" :to="days[currentDayIndex - 2]?.replace(/\.vue$/, '')" class="text-purple-500 opacity-50">{{
					days[currentDayIndex - 2]?.replace(/\.vue$/, '').replace('dia-', 'Día ')
				}}</nuxt-link>

				<nuxt-link v-if="currentDayIndex >= 1" :to="days[currentDayIndex - 1]?.replace(/\.vue$/, '')" class="text-purple-500 opacity-50">{{
					days[currentDayIndex - 1]?.replace(/\.vue$/, '').replace('dia-', 'Día ')
				}}</nuxt-link>

				<nuxt-link :to="days[currentDayIndex]?.replace(/\.vue$/, '')" class="text-purple-500">{{
					days[currentDayIndex]?.replace(/\.vue$/, '').replace('dia-', 'Día ')
				}}</nuxt-link>

				<nuxt-link
					v-if="currentDayIndex < days.length - 1"
					:to="days[currentDayIndex + 1]?.replace(/\.vue$/, '')"
					class="text-purple-500 opacity-50"
					>{{ days[currentDayIndex + 1]?.replace(/\.vue$/, '').replace('dia-', 'Día ') }}</nuxt-link
				>

				<nuxt-link
					v-if="currentDayIndex < days.length - 2"
					:to="days[currentDayIndex + 2]?.replace(/\.vue$/, '')"
					class="text-purple-500 opacity-50"
					>{{ days[currentDayIndex + 2]?.replace(/\.vue$/, '').replace('dia-', 'Día ') }}</nuxt-link
				>
			</div>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="text-purple-500 opacity-50 hover:opacity-100"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
				>
					<path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z" />
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';

const days = ref([]);
const currentDayIndex = ref(0);

onMounted(async () => {
	// Obtén la lista de archivos en la carpeta "pages"

	const files = await import.meta.glob('/pages/dia-*.vue');

	// Filtra y ordena los archivos por número de día
	const dayFiles = Object.keys(files)
		.map((file) => {
			const match = file.match(/dia-(\d+)\.vue$/);
			return match ? parseInt(match[1], 10) : null;
		})
		.filter((day) => day !== null)
		.sort((a, b) => a - b)
		.map((day) => `dia-${day}.vue`);

	// Asigna la lista de días
	days.value = dayFiles;

	// Encuentra el índice del día actual
	const currentPath = window.location.pathname;
	currentDayIndex.value = Math.max(
		0,
		dayFiles.findIndex((file) => currentPath.endsWith(file.split('/').pop()))
	);
	console.log(days[currentDayIndex]);
});
</script>
