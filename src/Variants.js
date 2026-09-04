
export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0, opacity: 0,

            y: direction === 'down' ? 10 : direction === 'up' ? -100 : 0, opacity: 0,

        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: .5,
                ease: [0.25, 0.25, 0.25, 0.75],

            }
        }
    }

}

export const fadeout = (direction, delay) => {
    return {
        hidden: {
            x: direction === 'right' ? 40 : direction === 'left' ? -40 : 0, opacity: 0,

            y: direction === 'down' ? 100 : direction === 'up' ? 0 : 0, opacity: 0,

        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: .5,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}
