<script lang="ts">
	import Header from '../components/Header.svelte';
	import Navbar from '../components/Navbar.svelte';
	import '../styles/main.sass';
</script>

<Header />
<Navbar />
<main>
	<slot />
</main>

<style lang="sass">
    @use 'sass:color'

    :root
        background-color: #ecf7ff

    :global(div)
        height: 100vh
        display: flex
        flex-direction: column
        padding: 1rem

    main
        width: 100%
        height: 100%
</style>
