<script setup lang="ts">
import {
	Pagination,
	PaginationEllipsis,
	PaginationFirst,
	PaginationLast,
	PaginationList,
	PaginationListItem,
	PaginationNext,
	PaginationPrev
} from '@/components/ui/pagination';

import { Button } from '@/components/ui/button';
</script>

<template>
	<div class="mx-auto mt-56">
		<Pagination v-slot="{ page }" :total="80" :sibling-count="1" show-edges :default-page="1">
			<PaginationList v-slot="{ items }" class="flex items-center gap-1">
				<PaginationFirst />
				<PaginationPrev />

				<template v-for="(item, index) in items">
					<PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
						<a :href="`/dia-${item.value}`">
							<Button class="h-10 w-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
								{{ item.value }}
							</Button>
						</a>
					</PaginationListItem>
					<PaginationEllipsis v-else :key="item.type" :index="index" />
				</template>

				<PaginationNext />
				<PaginationLast />
			</PaginationList>
		</Pagination>
	</div>
</template>
