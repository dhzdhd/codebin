<script lang="ts">
	import Navbar from "../components/Navbar.svelte";
    import '../styles.sass'
</script>

<header></header>
<Navbar />
<main><slot></slot></main>

<style lang="sass">
    @use 'sass:color'
    @use '../styles'

    :root
        background-color: #ecf7ff
</style>
