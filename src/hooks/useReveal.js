import { useEffect, useRef } from 'react'

// Плавное появление элементов .reveal внутри секции при прокрутке.
export default function useReveal(threshold = 0.1) {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold }
        )
        ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [threshold])

    return ref
}
