<script lang="ts">
	import { crossfade, fly, scale, slide } from "svelte/transition";

    let expand: boolean = false;

    const setExpand = () => expand = !expand;
</script>

<header>
	<div>
		<iconify-icon icon="fluent:clipboard-code-24-regular" />
		<button on:click={setExpand}>
			<iconify-icon icon="fluent:arrow-expand-24-regular" />
		</button>
	</div>
	{#if expand}
		<div in:slide out:slide class="popup">
			<iconify-icon icon="fluent:arrow-expand-24-regular" />
		</div>
	{/if}
</header>

<style lang="sass">
    @use '../styles/variables' as colors

    header
        div
            display: flex
            flex-direction: row
            justify-content: space-between
            // align-items: center
            height: 3rem
            padding: 0 0

            iconify-icon
                font-size: 3rem

        button
            background-color: colors.$dark-primary
            color: white
            border-radius: 1rem
            border: none
            cursor: pointer
            padding: 0.75rem 0.75rem
            z-index: 100

            iconify-icon
                font-size: 1.5rem

        .popup
            position: fixed
            display: flex
            flex-direction: column
            width: 50%
            height: auto
            top: 1rem
            bottom: 1rem
            right: 1rem
            border-radius: 1rem
            background-color: colors.$dark-primary



</style>
