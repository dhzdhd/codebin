<div>
	<textarea name="" id="" />
</div>

<style lang="sass">
    @use '../styles/variables' as colors

    div
        height: 100%
        margin-left: 8rem
        padding: 0 0

        textarea
            height: 100%
            width: 100%
            background-color: transparent
            resize: none
            border: solid
            border-width: 0.2rem
            border-color: transparent
            border-radius: 0.5rem
            font-size: 2rem
            margin-top: 1rem
            padding: 1rem
            outline: none

            &:hover, &:focus, &:active
                border-color: colors.$dark-primary
</style>
