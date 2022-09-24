<script lang="ts">
    import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";
    import '../styles.sass'
	import Page from "./+page.svelte";
</script>

<Header />
<Navbar />
<main><slot></slot></main>

<style lang="sass">
    @use 'sass:color'
    @use '../styles'

    :root
        max-height: 100vh
        max-width: 100vw

        background-color: #ecf7ff
</style>
