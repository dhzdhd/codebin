<nav>
    <ul>
        <li>
            T
        </li>
        <li>
            T
        </li>
        <li>
            T
        </li>
        <li>
            T
        </li>
        <li>
            T
        </li>
        <li>
            T
        </li>
    </ul>
</nav>

<style lang="sass">
    nav
        position: absolute
        top: 50%
        transform: translate(0, -50%)
        width: 4rem
        margin-left: 1.5rem
        background-color: white
        border-radius: 2rem
        box-shadow: 10px 10px 1rem 1px #e3eef6

        ul
            display: flex
            flex-direction: column
            gap: 1rem
            align-items: center
            padding: 1rem 0

            li
                display: grid
                place-content: center
                background-color: white
                color: #7694c9
                aspect-ratio: 1
                width: 3rem
                border-radius: 100%

                &:hover
                    background-color: #00288a
                    color: white
                    box-shadow: 2px 2px 1rem #3655a2
</style>
