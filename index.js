document.addEventListener('DOMContentLoaded', () => {
    // iOS Smart App Banner
    const meta = document.createElement('meta')
    meta.name = 'apple-itunes-app'
    meta.content = 'app-id=6462643679'

    document.head.append(meta)

    // Android App Banner (APK)
    if (
        navigator.userAgent.match(/Android/i) === null ||
        localStorage.getItem('androidAppBanner') === 'closed'
    )
        return

    const banner = document.createElement('div')
    banner.style.position = 'relative'
    banner.style.display = 'flex'
    banner.style.alignItems = 'center'
    banner.style.justifyContent = 'space-between'
    banner.style.gap = '0.75rem'
    banner.style.padding = '1rem'
    banner.style.borderBottom = '1px solid hsla(215, 31%, 85%, 0.6)'
    banner.style.backgroundColor = 'white'

    const icon = document.createElement('img')
    icon.style.width = '3rem'
    icon.style.height = '3rem'
    icon.style.borderRadius = '0.75rem'
    icon.style.border = '1px solid hsla(215, 31%, 85%, 0.25)'
    icon.src = 'https://lk.ttk.ru/icon-192.png'
    icon.alt = 'Иконка приложения ТТК'

    const textWrapper = document.createElement('div')
    textWrapper.style.display = 'grid'

    const title = document.createElement('span')
    title.style.fontSize = '0.875rem'
    title.style.lineHeight = '1.25rem'
    title.style.fontWeight = 500
    title.innerText = 'ТТК – Личный кабинет'

    const descr = document.createElement('span')
    descr.style.fontSize = '0.75rem'
    descr.style.lineHeight = '1rem'
    descr.style.color = 'hsla(211, 11%, 57%, 1)'
    descr.innerText = 'Приложение для Android'

    const link = document.createElement('a')
    link.style.marginInlineStart = 'auto'
    link.style.padding = '0.375rem 0.75rem'
    link.style.borderRadius = '0.5rem'
    link.style.backgroundColor = 'rgb(0, 102, 255)'
    link.style.fontSize = '0.875rem'
    link.style.lineHeight = '1.25rem'
    link.style.color = 'white'
    link.href = 'https://lk.ttk.ru/ttk-app.apk'
    link.innerText = 'Скачать'

    const closeButton = document.createElement('button')
    closeButton.style.color = 'hsla(211, 11%, 57%, 1)'
    closeButton.style.position = 'absolute'
    closeButton.style.top = 0
    closeButton.style.right = 0
    closeButton.style.display = 'flex'
    closeButton.style.justifyContent = 'center'
    closeButton.style.width = '1.5rem'
    closeButton.style.height = '1.5rem'
    closeButton.style.fontSize = '1.5rem'
    closeButton.style.lineHeight = 1
    closeButton.innerText = '\u00D7'

    closeButton.addEventListener('click', () => {
        banner.remove()
        localStorage.setItem('androidAppBanner', 'closed')
    })

    textWrapper.append(title, descr)
    banner.append(icon, textWrapper, link, closeButton)

    document.body.prepend(banner)
})
