const ICONS = {
    tile: (
        <>
            <rect x="3" y="3" width="8" height="8" rx="0.5" />
            <rect x="13" y="3" width="8" height="8" rx="0.5" />
            <rect x="3" y="13" width="8" height="8" rx="0.5" />
            <rect x="13" y="13" width="8" height="8" rx="0.5" />
        </>
    ),
    laminate: (
        <>
            <rect x="3" y="3" width="18" height="18" rx="0.5" />
            <path d="M3 9h18M3 15h18M10 3v6M16 9v6M7 15v6" />
        </>
    ),
    linoleum: (
        <>
            <circle cx="7" cy="7.5" r="3.5" />
            <circle cx="7" cy="7.5" r="1.2" />
            <path d="M7 4h13v16H10.5V7.5" />
        </>
    ),
    doors: (
        <>
            <rect x="5" y="2.5" width="14" height="19" rx="0.5" />
            <rect x="8" y="5.5" width="7" height="6" />
            <rect x="8" y="13.5" width="7" height="5" />
            <path d="M17 11.5v1.5" />
        </>
    ),
    entrance: (
        <>
            <path d="M3 21.5h18" />
            <rect x="5.5" y="2.5" width="13" height="19" rx="0.5" />
            <rect x="7.5" y="4.5" width="9" height="15" />
            <circle cx="12" cy="7.5" r="0.8" />
            <path d="M14.5 12.5h1.5" />
        </>
    ),
    hardware: (
        <>
            <circle cx="7" cy="12" r="3.2" />
            <path d="M7 10.6h12.6a1.4 1.4 0 010 2.8H7" />
        </>
    ),
}

// Фоновые узоры заглушек — у каждой категории свой «материал».
const PATTERNS = {
    tile: {
        backgroundImage: 'linear-gradient(rgba(202,138,4,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(202,138,4,0.14) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
    },
    laminate: {
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 35px, rgba(202,138,4,0.14) 35px 36px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 9px)',
    },
    linoleum: {
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(202,138,4,0.1) 0 1px, transparent 1px 22px)',
    },
    doors: {
        backgroundImage: 'repeating-linear-gradient(90deg, transparent 0 79px, rgba(202,138,4,0.14) 79px 80px)',
    },
    entrance: {
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(202,138,4,0.08) 0 1px, transparent 1px 7px), linear-gradient(90deg, transparent 0 48%, rgba(202,138,4,0.14) 48% 48.3%, transparent 48.3%)',
    },
    hardware: {
        backgroundImage: 'radial-gradient(rgba(202,138,4,0.22) 1.2px, transparent 1.6px)',
        backgroundSize: '22px 22px',
    },
}

export function CategoryIcon({ id, className = 'w-6 h-6' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {ICONS[id]}
        </svg>
    )
}

// Фото категории или фирменная заглушка, пока фото нет.
export default function CategoryVisual({ category, className = '', large = false }) {
    if (category.image) {
        return (
            <img
                src={category.image}
                alt={category.fullName}
                loading="lazy"
                className={`w-full h-full object-cover ${className}`}
            />
        )
    }

    return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 ${className}`} aria-hidden="true">
            <div className="absolute inset-0" style={PATTERNS[category.id]} />
            <div className="absolute -bottom-1/3 -right-1/4 w-2/3 h-2/3 bg-gold/10 rounded-full blur-[80px]" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${large ? 'w-32 h-32 sm:w-40 sm:h-40' : 'w-20 h-20'} rounded-full border border-gold/25 bg-stone-950/40 backdrop-blur-sm flex items-center justify-center text-gold transition-transform duration-700 group-hover:scale-110`}>
                    <CategoryIcon id={category.id} className={large ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-9 h-9'} />
                </div>
            </div>
        </div>
    )
}
