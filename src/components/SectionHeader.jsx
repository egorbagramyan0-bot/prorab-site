export default function SectionHeader({ title, accent, text, dark = false, align = 'center', as: Heading = 'h2', className = '' }) {
    const centered = align === 'center'

    return (
        <div className={`reveal ${centered ? 'text-center mx-auto' : ''} max-w-3xl 2xl:max-w-4xl ${className}`}>
            <Heading className={`font-heading text-[1.6rem] sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl leading-[1.12] mb-4 sm:mb-5 ${dark ? 'text-stone-50' : 'text-stone-900'}`}>
                {title}
                {accent && (
                    <>
                        {' '}<br />
                        <span className={dark ? 'text-gradient' : 'text-gradient-dark'}>{accent}</span>
                    </>
                )}
            </Heading>
            {text && (
                <p className={`font-body text-base lg:text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'} ${dark ? 'text-stone-400' : 'text-stone-500'}`}>
                    {text}
                </p>
            )}
        </div>
    )
}
