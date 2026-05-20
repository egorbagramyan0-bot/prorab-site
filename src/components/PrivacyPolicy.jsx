export default function PrivacyPolicy() {
    return (
        <section className="relative min-h-screen bg-stone-950 noise py-16 sm:py-24 overflow-hidden">
            <div className="absolute inset-0 deco-grid opacity-15" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
                {/* Header actions */}
                <div className="mb-10 sm:mb-16">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 font-body text-sm font-medium text-stone-400 hover:text-gold transition-colors duration-300 cursor-pointer group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Вернуться на главную
                    </a>
                </div>

                {/* Content */}
                <div className="glass rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl shadow-black/40 text-stone-300 font-body text-sm sm:text-base leading-relaxed space-y-10 border border-white/5">

                    <div className="border-b border-white/10 pb-8 tracking-wide">
                        <h1 className="font-heading text-3xl sm:text-5xl font-bold text-stone-50 mb-2">Политика конфиденциальности</h1>
                        <p className="text-stone-500 font-light text-sm">Актуальная редакция</p>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">1. Общие положения</h2>
                        <p className="mb-4 font-light text-stone-400">
                            Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всех персональных данных, которые Оператор может получить от Пользователя во время использования сайта салона керамогранита «ПРОРАБ» (далее — Сайт).
                        </p>
                        <p className="mb-4 font-light text-stone-400">
                            Использование Сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональных данных. В случае несогласия с этими условиями Пользователь должен воздержаться от использования Сайта.
                        </p>
                        <p className="font-light text-stone-400">
                            Настоящая Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">2. Оператор персональных данных</h2>
                        <ul className="space-y-2 text-stone-400 font-light">
                            <li><strong className="text-stone-200 font-medium tracking-wide">Оператор:</strong> ИП Баграмян Е.С.</li>
                            <li><strong className="text-stone-200 font-medium tracking-wide">ИНН:</strong> 612202592170</li>
                            <li><strong className="text-stone-200 font-medium tracking-wide">ОГРНИП:</strong> 321619600064166</li>
                            <li><strong className="text-stone-200 font-medium tracking-wide">Адрес:</strong> Ростовская область, Мясниковский район, с. Крым, ул. Большесальская, 20</li>
                            <li><strong className="text-stone-200 font-medium tracking-wide">Email:</strong> <a href="mailto:prorab.skrym@yandex.ru" className="text-gold hover:text-gold-light transition-colors">prorab.skrym@yandex.ru</a></li>
                            <li><strong className="text-stone-200 font-medium tracking-wide">Телефон:</strong> +7 (989) 634-13-75</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">3. Персональные данные, подлежащие обработке</h2>
                        <p className="mb-3 font-light text-stone-400">Оператор может обрабатывать следующие персональные данные Пользователя:</p>
                        <ul className="list-disc list-inside space-y-1.5 mb-4 text-stone-400 font-light marker:text-gold/50">
                            <li className="pl-1">фамилия, имя, отчество;</li>
                            <li className="pl-1">номер телефона;</li>
                            <li className="pl-1">адрес электронной почты;</li>
                            <li className="pl-1">сведения, указанные Пользователем в сообщениях, заявках или при обращении через мессенджеры;</li>
                            <li className="pl-1">иные данные, добровольно предоставленные Пользователем.</li>
                        </ul>
                        <p className="font-light text-stone-400">Также на Сайте может происходить сбор и обработка обезличенных данных о посетителях, в том числе файлов cookies, с помощью сервисов интернет-статистики, включая Яндекс.Метрику и иные аналогичные сервисы.</p>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">4. Цели обработки персональных данных</h2>
                        <p className="mb-3 font-light text-stone-400">Персональные данные Пользователя обрабатываются в следующих целях:</p>
                        <ul className="list-disc list-inside space-y-1.5 text-stone-400 font-light marker:text-gold/50">
                            <li className="pl-1">обработка входящих запросов и заявок;</li>
                            <li className="pl-1">связь с Пользователем для уточнения деталей обращения;</li>
                            <li className="pl-1">предоставление информации о товарах, услугах, наличии, стоимости и условиях покупки;</li>
                            <li className="pl-1">запись Пользователя на посещение салона;</li>
                            <li className="pl-1">подготовка консультаций, подборок материалов и 3D-проектов;</li>
                            <li className="pl-1">заключение и исполнение договоров;</li>
                            <li className="pl-1">улучшение качества работы Сайта;</li>
                            <li className="pl-1">проведение статистических и аналитических исследований.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">5. Правовые основания обработки персональных данных</h2>
                        <p className="mb-3 font-light text-stone-400">Оператор обрабатывает персональные данные Пользователя на основании:</p>
                        <ul className="list-disc list-inside space-y-1.5 text-stone-400 font-light marker:text-gold/50">
                            <li className="pl-1">Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»;</li>
                            <li className="pl-1">согласия Пользователя на обработку персональных данных;</li>
                            <li className="pl-1">договора, стороной которого является субъект персональных данных;</li>
                            <li className="pl-1">законных интересов Оператора, связанных с обработкой обращений и улучшением качества обслуживания.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">6. Порядок сбора, хранения и обработки персональных данных</h2>
                        <p className="mb-3 font-light text-stone-400">Сбор персональных данных осуществляется следующими способами:</p>
                        <ul className="list-disc list-inside space-y-1.5 mb-4 text-stone-400 font-light marker:text-gold/50">
                            <li className="pl-1">заполнение форм на Сайте;</li>
                            <li className="pl-1">телефонные звонки;</li>
                            <li className="pl-1">обращения через электронную почту;</li>
                            <li className="pl-1">обращения через мессенджеры;</li>
                            <li className="pl-1">иные способы добровольной передачи данных Пользователем.</li>
                        </ul>
                        <p className="mb-4 font-light text-stone-400">Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, либо в течение срока, установленного законодательством Российской Федерации.</p>
                        <p className="font-light text-stone-400">Обработка персональных данных может осуществляться с использованием средств автоматизации и без использования таких средств.</p>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">7. Передача персональных данных третьим лицам</h2>
                        <p className="mb-3 font-light text-stone-400">Оператор не передаёт персональные данные третьим лицам, за исключением следующих случаев:</p>
                        <ul className="list-disc list-inside space-y-1.5 text-stone-400 font-light marker:text-gold/50">
                            <li className="pl-1">получение согласия Пользователя;</li>
                            <li className="pl-1">исполнение требований законодательства Российской Федерации;</li>
                            <li className="pl-1">защита прав и законных интересов Оператора;</li>
                            <li className="pl-1">использование сервисов, необходимых для работы Сайта, аналитики, связи с Пользователем и обработки заявок.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">8. Права Пользователя</h2>
                        <p className="mb-3 font-light text-stone-400">Пользователь имеет право:</p>
                        <ul className="list-disc list-inside space-y-1.5 mb-5 text-stone-400 font-light marker:text-gold/50">
                            <li className="pl-1">получать информацию об обработке своих персональных данных;</li>
                            <li className="pl-1">требовать уточнения, блокирования или уничтожения персональных данных;</li>
                            <li className="pl-1">отозвать согласие на обработку персональных данных;</li>
                            <li className="pl-1">обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке.</li>
                        </ul>
                        <p className="font-light text-stone-400">Для реализации своих прав Пользователь может направить запрос на email: <a href="mailto:prorab.skrym@yandex.ru" className="text-gold hover:text-gold-light transition-colors font-medium">prorab.skrym@yandex.ru</a></p>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">9. Защита персональных данных</h2>
                        <p className="font-light text-stone-400">Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.</p>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">10. Файлы cookies</h2>
                        <p className="mb-4 font-light text-stone-400">Сайт может использовать файлы cookies для улучшения работы Сайта, анализа посещаемости и повышения удобства Пользователя.</p>
                        <p className="font-light text-stone-400">Пользователь может отключить использование cookies в настройках своего браузера. При этом отдельные функции Сайта могут работать некорректно.</p>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">11. Изменение Политики конфиденциальности</h2>
                        <p className="mb-4 font-light text-stone-400">Оператор вправе вносить изменения в настоящую Политику. Новая редакция Политики вступает в силу с момента её размещения на Сайте, если иное не предусмотрено новой редакцией Политики.</p>
                        <p className="font-light text-stone-400">Актуальная редакция Политики всегда размещается на данной странице.</p>
                    </div>

                    <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-stone-100 mb-4">12. Контактная информация</h2>
                        <p className="mb-4 font-light text-stone-400">По всем вопросам, связанным с обработкой персональных данных, Пользователь может обратиться к Оператору:</p>
                        <ul className="space-y-2 text-stone-400 font-light">
                            <li><strong className="text-stone-200 font-medium tracking-wide">ИП:</strong> Баграмян Е.С.</li>
                            <li><strong className="text-stone-200 font-medium tracking-wide">Email:</strong> <a href="mailto:prorab.skrym@yandex.ru" className="text-gold hover:text-gold-light transition-colors font-medium">prorab.skrym@yandex.ru</a></li>
                            <li><strong className="text-stone-200 font-medium tracking-wide">Телефон:</strong> +7 (989) 634-13-75</li>
                            <li><strong className="text-stone-200 font-medium tracking-wide">Адрес:</strong> Ростовская область, Мясниковский район, с. Крым, ул. Большесальская, 20</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Added ambient glow at bottom */}
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />
        </section>
    )
}
