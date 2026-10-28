
import { useState } from 'react'
import './App.css'

const translations = {
  EN: {
    features: 'Features',
    faq: 'FAQ',
    login: 'Log in',
    signup: 'Sign Up',
    headline: 'Smarter offers.',
    highlight: 'Better opportunities.',
    description:
      'A smarter way to explore delivery opportunities. Understand your offers, review routes, and stay organized with one simple, powerful dashboard.',
    start: 'Start Today',
    note: 'BUILT FOR A SMARTER DELIVERY EXPERIENCE',
    eyebrow: 'THE NEXT-GEN DELIVERY DASHBOARD',
    toolkitLabel: 'THE TOOLKIT',
    toolkitTitle: 'Everything you need.',
    toolkitHighlight: 'Nothing you don’t.',
    toolkitDescription:
      'Explore a smarter, more organized delivery experience with powerful tools designed around clarity and control.',
    comparisonLabel: 'SIDE BY SIDE',
    comparisonTitle: 'A clearer way to work.',
    comparisonDescription:
      'See how an organized dashboard can simplify everyday delivery planning.',
    traditional: 'Without a dashboard',
    hyper: 'With Hyper Flex',
    calculatorLabel: 'EXPLORE THE NUMBERS',
    calculatorTitle: 'Plan your potential.',
    calculatorDescription:
      'Adjust the weeks to explore an illustrative earnings scenario.',
    estimated: 'ILLUSTRATIVE TOTAL',
    weeks: 'Weeks',
    weekly: 'Example weekly amount',
    calculatorNote:
      'Example only. Actual earnings vary and are not guaranteed.',
    faqLabel: 'QUICK ANSWERS',
    faqTitle: 'Before you ask.',
    finalTitle: 'Your workflow.',
    finalHighlight: 'Reimagined.',
    finalDescription:
      'Explore the next generation of delivery dashboard design.',
    finalButton: 'Explore Hyper Flex',
  },
  ES: {
    features: 'Funciones',
    faq: 'Preguntas',
    login: 'Iniciar sesión',
    signup: 'Registrarse',
    headline: 'Ofertas inteligentes.',
    highlight: 'Más oportunidades.',
    description:
      'Una forma más inteligente de explorar oportunidades de entrega. Consulta ofertas, revisa rutas y organiza todo desde un solo panel.',
    start: 'Empieza hoy',
    note: 'UNA EXPERIENCIA DE ENTREGA MÁS INTELIGENTE',
    eyebrow: 'EL PANEL DE ENTREGAS DE NUEVA GENERACIÓN',
    toolkitLabel: 'HERRAMIENTAS',
    toolkitTitle: 'Todo lo que necesitas.',
    toolkitHighlight: 'Sin complicaciones.',
    toolkitDescription:
      'Explora una experiencia de entrega más organizada, con herramientas diseñadas para ofrecer claridad y control.',
    comparisonLabel: 'COMPARACIÓN',
    comparisonTitle: 'Una forma más clara de trabajar.',
    comparisonDescription:
      'Descubre cómo un panel organizado simplifica la planificación.',
    traditional: 'Sin panel',
    hyper: 'Con Hyper Flex',
    calculatorLabel: 'EXPLORA LOS NÚMEROS',
    calculatorTitle: 'Planifica tus posibilidades.',
    calculatorDescription:
      'Ajusta las semanas para explorar un ejemplo de ingresos.',
    estimated: 'TOTAL ILUSTRATIVO',
    weeks: 'Semanas',
    weekly: 'Cantidad semanal de ejemplo',
    calculatorNote:
      'Solo un ejemplo. Los ingresos reales varían y no están garantizados.',
    faqLabel: 'RESPUESTAS RÁPIDAS',
    faqTitle: 'Antes de preguntar.',
    finalTitle: 'Tu trabajo.',
    finalHighlight: 'Reimaginado.',
    finalDescription:
      'Explora la próxima generación de diseño para entregas.',
    finalButton: 'Explorar Hyper Flex',
  },
  RU: {
    features: 'Возможности',
    faq: 'Вопросы',
    login: 'Войти',
    signup: 'Регистрация',
    headline: 'Умные предложения.',
    highlight: 'Больше возможностей.',
    description:
      'Удобный способ изучать предложения по доставке, просматривать маршруты и управлять настройками в одном приложении.',
    start: 'Начать сегодня',
    note: 'НОВЫЙ ПОДХОД К УПРАВЛЕНИЮ ДОСТАВКАМИ',
    eyebrow: 'ПАНЕЛЬ ДОСТАВКИ НОВОГО ПОКОЛЕНИЯ',
    toolkitLabel: 'ИНСТРУМЕНТЫ',
    toolkitTitle: 'Всё необходимое.',
    toolkitHighlight: 'Ничего лишнего.',
    toolkitDescription:
      'Изучайте удобные инструменты для анализа предложений, планирования и настройки интерфейса.',
    comparisonLabel: 'СРАВНЕНИЕ',
    comparisonTitle: 'Более удобный подход.',
    comparisonDescription:
      'Посмотрите, как единая панель помогает организовать информацию.',
    traditional: 'Без панели',
    hyper: 'С Hyper Flex',
    calculatorLabel: 'ПРИМЕР РАСЧЁТА',
    calculatorTitle: 'Планируйте возможности.',
    calculatorDescription:
      'Измените количество недель для просмотра примерного расчёта.',
    estimated: 'ПРИМЕРНАЯ СУММА',
    weeks: 'Недель',
    weekly: 'Пример суммы за неделю',
    calculatorNote:
      'Только пример. Реальный доход может отличаться и не гарантируется.',
    faqLabel: 'ОТВЕТЫ НА ВОПРОСЫ',
    faqTitle: 'Частые вопросы.',
    finalTitle: 'Ваша работа.',
    finalHighlight: 'Новый подход.',
    finalDescription:
      'Изучите современный интерфейс для управления доставками.',
    finalButton: 'Открыть Hyper Flex',
  },
}

const featureData = [
  {
    icon: 'chart',
    title: {
      EN: 'Offer intelligence',
      ES: 'Análisis de ofertas',
      RU: 'Анализ предложений',
    },
    description: {
      EN: 'See estimated earnings, stops, distance, and route duration together in one easy-to-read view.',
      ES: 'Consulta ingresos estimados, paradas, distancias y duración de rutas en una sola vista.',
      RU: 'Просматривайте оплату, остановки, расстояние и время маршрута в одном месте.',
    },
    tag: 'OFFER INSIGHTS',
  },
  {
    icon: 'pin',
    title: {
      EN: 'Location workspace',
      ES: 'Gestión de ubicaciones',
      RU: 'Управление локациями',
    },
    description: {
      EN: 'Organize your preferred delivery areas and saved locations in a dedicated workspace.',
      ES: 'Organiza tus zonas de entrega y ubicaciones guardadas en un solo lugar.',
      RU: 'Сохраняйте предпочтительные районы доставки и нужные локации.',
    },
    tag: 'YOUR LOCATIONS',
  },
  {
    icon: 'clock',
    title: {
      EN: 'Time insights',
      ES: 'Análisis del tiempo',
      RU: 'Анализ времени',
    },
    description: {
      EN: 'Compare route estimates and understand how an opportunity fits into your schedule.',
      ES: 'Compara tiempos estimados y organiza mejor tu horario.',
      RU: 'Сравнивайте примерное время маршрутов и планируйте расписание.',
    },
    tag: 'SMART PLANNING',
  },
  {
    icon: 'sliders',
    title: {
      EN: 'Personalized filters',
      ES: 'Filtros personalizados',
      RU: 'Персональные фильтры',
    },
    description: {
      EN: 'Explore customizable earnings thresholds, delivery limits, and route preferences.',
      ES: 'Configura ingresos mínimos, límites de entregas y preferencias de rutas.',
      RU: 'Настраивайте минимальную оплату, ограничения и параметры маршрутов.',
    },
    tag: 'YOUR PREFERENCES',
  },
  {
    icon: 'layers',
    title: {
      EN: 'One connected view',
      ES: 'Todo en una vista',
      RU: 'Всё в одном окне',
    },
    description: {
      EN: 'Bring offer details, route summaries, and your preferences into one streamlined interface.',
      ES: 'Reúne ofertas, rutas y preferencias en una interfaz sencilla.',
      RU: 'Объединяйте предложения, маршруты и настройки в удобном интерфейсе.',
    },
    tag: 'ONE DASHBOARD',
  },
  {
    icon: 'shield',
    title: {
      EN: 'Designed for clarity',
      ES: 'Diseñado para ser claro',
      RU: 'Простой и понятный',
    },
    description: {
      EN: 'A responsive experience that makes complex information easier to understand.',
      ES: 'Una experiencia adaptable que facilita la comprensión de la información.',
      RU: 'Адаптивный дизайн, который помогает быстрее понимать информацию.',
    },
    tag: 'BUILT FOR YOU',
  },
]

const comparisonData = [
  {
    label: { EN: 'Offer details', ES: 'Ofertas', RU: 'Предложения' },
    before: {
      EN: 'Scattered information',
      ES: 'Información dispersa',
      RU: 'Разрозненная информация',
    },
    after: {
      EN: 'One clear overview',
      ES: 'Todo en una vista',
      RU: 'Единый обзор',
    },
  },
  {
    label: { EN: 'Route planning', ES: 'Rutas', RU: 'Маршруты' },
    before: {
      EN: 'Manual comparisons',
      ES: 'Comparación manual',
      RU: 'Ручное сравнение',
    },
    after: {
      EN: 'Organized route insights',
      ES: 'Rutas organizadas',
      RU: 'Удобный анализ маршрутов',
    },
  },
  {
    label: { EN: 'Preferences', ES: 'Preferencias', RU: 'Настройки' },
    before: {
      EN: 'Remember everything',
      ES: 'Recordar todo',
      RU: 'Держать всё в памяти',
    },
    after: {
      EN: 'Saved filter settings',
      ES: 'Filtros guardados',
      RU: 'Сохранённые фильтры',
    },
  },
  {
    label: { EN: 'Locations', ES: 'Ubicaciones', RU: 'Локации' },
    before: {
      EN: 'Separate notes',
      ES: 'Notas separadas',
      RU: 'Отдельные заметки',
    },
    after: {
      EN: 'Location workspace',
      ES: 'Gestión centralizada',
      RU: 'Единый список локаций',
    },
  },
  {
    label: { EN: 'Time estimates', ES: 'Tiempo', RU: 'Время' },
    before: {
      EN: 'Calculate separately',
      ES: 'Calcular por separado',
      RU: 'Считать отдельно',
    },
    after: {
      EN: 'Estimates together',
      ES: 'Estimaciones juntas',
      RU: 'Все оценки рядом',
    },
  },
]

const faqData = [
  {
    q: {
      EN: 'What exactly is Hyper Flex?',
      ES: '¿Qué es Hyper Flex?',
      RU: 'Что такое Hyper Flex?',
    },
    a: {
      EN: 'Hyper Flex is an interactive educational dashboard concept. It demonstrates how delivery offers, route information, and personal preferences can be presented in a clean, organized interface.',
      ES: 'Hyper Flex es un concepto educativo interactivo que muestra ofertas, rutas y preferencias en una interfaz organizada.',
      RU: 'Hyper Flex — интерактивный учебный прототип панели управления, который показывает предложения, маршруты и настройки в удобном интерфейсе.',
    },
  },
  {
    q: {
      EN: 'Can I customize the dashboard?',
      ES: '¿Puedo personalizar el panel?',
      RU: 'Можно ли настроить панель?',
    },
    a: {
      EN: 'The prototype includes examples of adjustable preferences, such as minimum earnings, maximum route duration, delivery stops, and saved locations.',
      ES: 'El prototipo incluye ejemplos de filtros para ingresos, duración de rutas, paradas y ubicaciones.',
      RU: 'Прототип предусматривает настройки минимальной оплаты, длительности маршрута, количества остановок и сохранённых локаций.',
    },
  },
  {
    q: {
      EN: 'Are the displayed offers real?',
      ES: '¿Las ofertas son reales?',
      RU: 'Предложения настоящие?',
    },
    a: {
      EN: 'No. The current version uses simulated information for educational and interface demonstration purposes.',
      ES: 'No. La versión actual utiliza información simulada con fines educativos.',
      RU: 'Нет. Текущая версия использует демонстрационные данные в учебных целях.',
    },
  },
  {
    q: {
      EN: 'How does the earnings calculator work?',
      ES: '¿Cómo funciona la calculadora?',
      RU: 'Как работает калькулятор?',
    },
    a: {
      EN: 'It multiplies an illustrative weekly amount by the number of selected weeks. It is not a forecast or earnings guarantee.',
      ES: 'Multiplica una cantidad semanal ilustrativa por las semanas seleccionadas. No es una garantía de ingresos.',
      RU: 'Он умножает условную недельную сумму на выбранное количество недель. Это не прогноз и не гарантия дохода.',
    },
  },
  {
    q: {
      EN: 'Is Hyper Flex affiliated with Amazon?',
      ES: '¿Hyper Flex está afiliado a Amazon?',
      RU: 'Hyper Flex связан с Amazon?',
    },
    a: {
      EN: 'No. Hyper Flex is an independent educational UI project and is not affiliated with or endorsed by Amazon or Amazon Flex.',
      ES: 'No. Hyper Flex es un proyecto educativo independiente sin afiliación con Amazon o Amazon Flex.',
      RU: 'Нет. Hyper Flex — независимый учебный UI-проект, не связанный с Amazon или Amazon Flex.',
    },
  },
  {
    q: {
      EN: 'Does it work on mobile?',
      ES: '¿Funciona en móviles?',
      RU: 'Работает ли на телефоне?',
    },
    a: {
      EN: 'The website is responsive and designed to adapt to desktop, tablet, and mobile screen sizes.',
      ES: 'El sitio está diseñado para adaptarse a ordenadores, tabletas y móviles.',
      RU: 'Сайт адаптируется под компьютеры, планшеты и мобильные устройства.',
    },
  },
]

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths = {
    chart: (
      <>
        <path d="m3 17 6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="9" cy="6" r="2" fill="#181025" />
        <circle cx="16" cy="12" r="2" fill="#181025" />
        <circle cx="8" cy="18" r="2" fill="#181025" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  }

  return <svg {...common}>{paths[name] || paths.chart}</svg>
}

function LightningLogo() {
  return (
    <svg
      className="brand-icon"
      viewBox="0 0 64 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lightningGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F03CFF" />
          <stop offset="48%" stopColor="#A92BFF" />
          <stop offset="100%" stopColor="#6823FF" />
        </linearGradient>
        <filter id="lightningGlow">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <path
        d="M38 3 9 44h21l-6 33 33-48H35L38 3Z"
        fill="#A020FF"
        opacity=".55"
        filter="url(#lightningGlow)"
      />
      <path
        d="M38 3 9 44h21l-6 33 33-48H35L38 3Z"
        fill="url(#lightningGradient)"
      />
      <path
        d="M39 7 19 39h16l-5 27 20-32H30Z"
        fill="#FF66FA"
        opacity=".45"
      />
    </svg>
  )
}



// Hyper Flex UI-only account and workspace screens.
const workspaceItems = [
  { id: 'instant-offers', title: 'Instant Offers', eyebrow: 'LIVE WORKSPACE', description: 'Your dedicated space for offer insights and activity.', icon: 'bolt' },
  { id: 'earnings', title: 'Earnings', eyebrow: 'PERFORMANCE', description: 'A clearer perspective on your earning activity.', icon: 'wallet' },
  { id: 'requests', title: 'Requests', eyebrow: 'YOUR ACTIVITY', description: 'Keep your requests organized in one place.', icon: 'requests' },
  { id: 'referrals', title: 'Referrals', eyebrow: 'INVITE & GROW', description: 'Your invitation and referral workspace.', icon: 'users' },
  { id: 'inbox', title: 'Inbox', eyebrow: 'MESSAGES', description: 'Your notifications and messages, together.', icon: 'mail' },
  { id: 'settings', title: 'Settings', eyebrow: 'PREFERENCES', description: 'Make the workspace feel like yours.', icon: 'settings' },
]

function WorkspaceIcon({ name, size = 28 }) {
  const p = {
    bolt: <><path d="M13 2 4 13h7l-1 9 10-12h-7l0-8Z" /></>,
    wallet: <><rect x="3" y="6" width="18" height="15" rx="3"/><path d="M3 10V6a3 3 0 0 1 3-3h12"/><path d="M15 15h6"/><circle cx="15" cy="15" r="1"/></>,
    requests: <><rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 3.5h6M9 9h6M9 13h6M9 17h4"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v1"/></>,
    mail: <><rect x="2" y="5" width="20" height="14" rx="3"/><path d="m3 7 9 7 9-7"/></>,
    settings: <><path d="M10 2h4l.6 2.5 2.1.9 2.2-1.3 2.8 2.8-1.3 2.2.9 2.1L24 12v0l-2.7.8-.9 2.1 1.3 2.2-2.8 2.8-2.2-1.3-2.1.9L14 22h-4l-.6-2.5-2.1-.9-2.2 1.3-2.8-2.8 1.3-2.2-.9-2.1L0 12l2.7-.8.9-2.1-1.3-2.2 2.8-2.8 2.2 1.3 2.1-.9Z" transform="translate(1 0) scale(.92 1)"/><circle cx="12" cy="12" r="3"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{p[name]}</svg>
}

function WorkspaceBrand({ to = '/' }) {
  return <a href={to} className="hf-workspace-brand" aria-label="Hyper Flex home">
    <span className="hf-workspace-mark"><LightningLogo /></span>
    <span className="hf-workspace-wordmark">Hyper <strong>Flex</strong></span>
  </a>
}

function AccountPage({ login = false }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [notice, setNotice] = useState('')
  function submit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (!login && data.get('password') !== data.get('confirm')) {
      setNotice('Passwords do not match.')
      return
    }
    setNotice('UI preview only — account creation and sign-in are not connected yet.')
  }
  return <div className="hf-app-page hf-auth-page">
    <div className="hf-grid-background" aria-hidden="true" />
    <header className="hf-app-topbar"><a className="hf-back-link" href="/"><svg className="back-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg> Back to website</a><WorkspaceBrand /></header>
    <main className="hf-auth-center">
      <div className="hf-auth-intro"><div className="hf-auth-symbol"><LightningLogo /></div><span className="hf-overline">YOUR NEXT CHAPTER</span><h1>{login ? 'Welcome back.' : 'Get started with Hyper Flex.'}</h1><p>A smarter workspace begins here.</p></div>
      <form className="hf-auth-card" onSubmit={submit}>
        <div className="hf-auth-card-head"><h2>{login ? 'Log in' : 'Create your account'}</h2><p>{login ? 'Access your Hyper Flex workspace.' : 'Set up your workspace in just a few steps.'}</p></div>
        <label className="hf-form-label" htmlFor="hf-email">Email address</label><input id="hf-email" name="email" className="hf-form-input" type="email" autoComplete="email" placeholder="you@example.com" required />
        {!login && <><label className="hf-form-label" htmlFor="hf-phone">Phone number</label><input id="hf-phone" name="phone" className="hf-form-input" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" required /></>}
        <label className="hf-form-label" htmlFor="hf-password">Password</label><div className="hf-password-wrap"><input id="hf-password" name="password" className="hf-form-input" type={showPassword ? 'text' : 'password'} autoComplete={login ? 'current-password' : 'new-password'} placeholder="At least 8 characters" minLength={8} required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? 'Hide' : 'Show'}</button></div>
        {!login && <><label className="hf-form-label" htmlFor="hf-confirm">Confirm password</label><div className="hf-password-wrap"><input id="hf-confirm" name="confirm" className="hf-form-input" type={showConfirm ? 'text' : 'password'} autoComplete="new-password" placeholder="Repeat your password" minLength={8} required /><button type="button" onClick={() => setShowConfirm(!showConfirm)} aria-label={showConfirm ? 'Hide confirmation' : 'Show confirmation'}>{showConfirm ? 'Hide' : 'Show'}</button></div></>}
        <button className="hf-auth-submit" type="submit">{login ? 'Log in' : 'Create account'} <span>↗</span></button>
        {notice && <p className="hf-form-notice" role="status">{notice}</p>}
        <p className="hf-auth-switch">{login ? 'New to Hyper Flex?' : 'Already have an account?'} <a href={login ? '/signup' : '/login'}>{login ? 'Sign up' : 'Log in'}</a></p>
      </form>
      <p className="hf-auth-footnote">INTERFACE PREVIEW · NO INFORMATION IS SUBMITTED</p>
    </main>
  </div>
}

// Interactive workspace prototypes. No external requests or account connections.
const demoDays = Array.from({ length: 31 }, (_, i) => {
  const day = i + 1
  const instant = (day * 7 + 3) % 5
  const blocks = (day * 3 + 1) % 4
  const base = instant * (27 + (day % 4) * 7) + blocks * (68 + (day % 3) * 14)
  const tips = instant * (9 + day % 8) + blocks * (13 + day % 10)
  return { day, date: `2026-10-${String(day).padStart(2, '0')}`, instant, blocks, base, tips, missedInstant: day % 4 === 0 ? 2 : day % 3 === 0 ? 1 : 0, missedBlocks: day % 5 === 0 ? 1 : 0 }
})
const demoMonths = ['May', 'June', 'July', 'August', 'September', 'October'].map((month, i) => ({
  month, base: 2150 + i * 215 + (i % 2) * 190, tips: 350 + i * 76, instant: 25 + i * 4, blocks: 18 + i * 3, missedInstant: 7 + i, missedBlocks: 4 + (i % 4)
}))
const money = n => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
const sum = (items, field) => items.reduce((total, item) => total + item[field], 0)
function DemoSwitch({ checked, onChange, label }) {
  return <button type="button" className={`hf-toggle ${checked ? 'is-on' : ''}`} role="switch" aria-checked={checked} aria-label={label} onClick={() => onChange(!checked)}><span>{checked ? 'ON' : 'OFF'}</span><i /></button>
}
function ServicePanel({ title, note, children, action }) {
  return <section className="hf-tool-panel"><div className="hf-tool-panel-head"><div><h3>{title}</h3>{note && <p>{note}</p>}</div>{action}</div>{children}</section>
}
function Metric({ label, value, sub, icon }) {
  return <div className="hf-metric"><div className="hf-metric-label">{icon && <WorkspaceIcon name={icon} size={16}/>} {label}</div><strong>{value}</strong>{sub && <span>{sub}</span>}</div>
}
function InstantOffersTool() {
  const [enabled, setEnabled] = useState(false)
  const [city, setCity] = useState('Seattle, WA')
  const [locations, setLocations] = useState(['47.774210, -122.419280','47.748590, -122.358720','47.793640, -122.305110','47.735610, -122.284940','47.701330, -122.405660'])
  const [draft, setDraft] = useState('')
  const [editing, setEditing] = useState(-1)
  const [message, setMessage] = useState('')
  function addLocation(e) {
    e.preventDefault()
    const v = draft.trim()
    if (!/^[-+]?\d{1,2}\.\d+\s*,\s*[-+]?\d{1,3}\.\d+$/.test(v)) { setMessage('Enter coordinates like 47.774210, -122.419280'); return }
    if (editing >= 0) setLocations(list => list.map((item, i) => i === editing ? v : item))
    else setLocations(list => [...list, v])
    setDraft(''); setEditing(-1); setMessage('Location saved in this preview.')
  }
  return <div className="hf-tool-stack">
    <div className="hf-tool-two"><ServicePanel title="Instant Offer Brain" note="Monitor your workspace at a glance."><div className="hf-status-line"><span className="hf-tool-icon"><WorkspaceIcon name="bolt" size={25}/></span><div><b>Bot Status</b><small className={enabled ? 'hf-positive' : ''}><span className="hf-live-dot" /> {enabled ? 'Running · Demo mode' : 'Paused'}</small></div><DemoSwitch checked={enabled} onChange={setEnabled} label="Toggle demo Instant Offers" /></div><p className="hf-small-note">Preview control only. No offers are monitored or accepted.</p></ServicePanel>
    <ServicePanel title="Select Location" note="Choose your delivery area."><label className="hf-tool-field">Active region<select value={city} onChange={e => setCity(e.target.value)}><option>Seattle, WA</option><option>Bellevue, WA</option><option>Tacoma, WA</option><option>Everett, WA</option></select></label><div className="hf-location-summary"><WorkspaceIcon name="pin" size={18}/> {city} <span>Selected region</span></div></ServicePanel></div>
    <ServicePanel title="Location overview" note="Saved points visualized on a stylized preview map."><div className="hf-map"><div className="hf-map-water hf-map-water-a"/><div className="hf-map-water hf-map-water-b"/><div className="hf-map-roads"/><span className="hf-map-city">{city.split(',')[0]}</span>{locations.slice(0, 8).map((loc, i) => <div key={i} className="hf-map-pin" style={{left:`${[14,65,30,78,49,24,70,52][i]}%`,top:`${[18,19,51,55,76,79,39,35][i]}%`}}><WorkspaceIcon name="pin" size={21}/><span>{loc}</span></div>)}</div><p className="hf-small-note">Illustrative map layout — markers are not geographically plotted.</p></ServicePanel>
    <ServicePanel title={`Saved Locations (${locations.length})`} note="Manage the coordinates shown in your workspace." action={<button className="hf-outline-btn" type="button" onClick={() => {setEditing(-1);setDraft('');document.getElementById('hf-add-location')?.focus()}}>＋ Add Location</button>}><form onSubmit={addLocation} className="hf-inline-form"><input id="hf-add-location" aria-label="Coordinates" placeholder="Latitude, longitude" value={draft} onChange={e => setDraft(e.target.value)}/><button className="hf-solid-btn" type="submit">{editing >= 0 ? 'Save changes' : 'Add point'}</button></form>{message && <p className="hf-tool-feedback" role="status">{message}</p>}<div className="hf-location-list">{locations.map((loc,i) => <div className="hf-location-row" key={i}><span className="hf-location-number">{i+1}</span><WorkspaceIcon name="pin" size={19}/><span className="hf-location-coords">{loc}</span><button aria-label={`Edit location ${i+1}`} onClick={() => {setEditing(i);setDraft(loc);document.getElementById('hf-add-location')?.focus()}}>✎</button><button className="hf-danger-action" aria-label={`Remove location ${i+1}`} onClick={() => setLocations(list => list.filter((_,j)=>j!==i))}>×</button></div>)}</div></ServicePanel>
  </div>
}
function EarningsTool() {
  const [view,setView] = useState('daily')
  const [month,setMonth] = useState('October')
  const [selectedDay,setSelectedDay] = useState('all')
  const days = month === 'October' ? demoDays : demoDays.map(d => ({...d,base:Math.round(d.base*.82),tips:Math.round(d.tips*.9)}))
  const selected = view === 'daily' ? selectedDay === 'all' ? days : days.filter(d => d.day === Number(selectedDay)) : demoMonths
  const totals = {base:sum(selected,'base'),tips:sum(selected,'tips'),instant:sum(selected,'instant'),blocks:sum(selected,'blocks'),missedInstant:sum(selected,'missedInstant'),missedBlocks:sum(selected,'missedBlocks')}
  const max = Math.max(...selected.map(d => d.base+d.tips),1)
  return <div className="hf-tool-stack"><div className="hf-toolbar"><div className="hf-segmented"><button className={view==='daily'?'active':''} onClick={()=>setView('daily')}>Daily</button><button className={view==='monthly'?'active':''} onClick={()=>setView('monthly')}>Monthly</button></div>{view==='daily'&&<><select aria-label="Month" value={month} onChange={e=>setMonth(e.target.value)}>{demoMonths.map(m=><option key={m.month}>{m.month}</option>)}</select><select aria-label="Day" value={selectedDay} onChange={e=>setSelectedDay(e.target.value)}><option value="all">All days</option>{days.map(d=><option value={d.day} key={d.day}>Day {d.day}</option>)}</select></>}<span className="hf-demo-tag">SAMPLE DATA</span></div>
  <div className="hf-metrics-grid"><Metric label="Total earnings" value={money(totals.base+totals.tips)} sub="Base pay + tips" icon="wallet"/><Metric label="Base pay" value={money(totals.base)} sub="Before tips" icon="chart"/><Metric label="Tips" value={money(totals.tips)} sub="Customer tips" icon="bolt"/><Metric label="Completed deliveries" value={totals.instant+totals.blocks} sub="Instant offers + blocks" icon="requests"/></div>
  <ServicePanel title="Earnings performance" note={view==='daily' ? `Daily breakdown · ${month} 2026` : 'Monthly earnings overview · 2026'}><div className="hf-chart-legend"><span><i className="hf-legend-base"/> Base pay</span><span><i className="hf-legend-tips"/> Tips</span></div><div className="hf-bar-chart">{selected.map((d,i)=><div className="hf-bar-col" key={i} title={`${view==='daily'?d.date:d.month}: ${money(d.base+d.tips)}`}><div className="hf-bar-stack" style={{height:`${Math.max(4,((d.base+d.tips)/max)*100)}%`}}><div className="hf-bar-tips" style={{flex:d.tips}}/><div className="hf-bar-base" style={{flex:d.base}}/></div><small>{view==='daily' ? (selected.length>15 ? (i%3===0?d.day:'') : d.day) : d.month.slice(0,3)}</small></div>)}</div><div className="hf-performance-foot"><span>Average per {view==='daily'?'day':'month'}</span><strong>{money((totals.base+totals.tips)/selected.length)}</strong></div></ServicePanel>
  <div className="hf-metrics-grid"><Metric label="Instant offers completed" value={totals.instant} sub="Accepted & completed"/><Metric label="Blocks completed" value={totals.blocks} sub="Requested blocks"/><Metric label="Instant offers missed" value={totals.missedInstant} sub="Missed opportunities"/><Metric label="Blocks missed" value={totals.missedBlocks} sub="Unfulfilled requests"/></div>
  <ServicePanel title="Activity breakdown" note="Individual earning records and delivery counts."><div className="hf-table-scroll"><table className="hf-data-table"><thead><tr><th>{view==='daily'?'Date':'Month'}</th><th>Base pay</th><th>Tips</th><th>Total</th><th>Instant</th><th>Blocks</th><th>Missed IO</th><th>Missed blocks</th></tr></thead><tbody>{[...selected].reverse().map((d,i)=><tr key={i}><td>{view==='daily'?d.date:d.month+' 2026'}</td><td>{money(d.base)}</td><td>{money(d.tips)}</td><td className="hf-table-total">{money(d.base+d.tips)}</td><td>{d.instant}</td><td>{d.blocks}</td><td>{d.missedInstant}</td><td>{d.missedBlocks}</td></tr>)}</tbody></table></div></ServicePanel></div>
}
const stations = ['Seattle - SWA1','Seattle - DSE4','Bellevue - DWA5','Everett - DSE5','Renton - DWA2','Tacoma - DWA9']
function RequestsTool() {
  const [on,setOn] = useState(false)
  const [scheduled,setScheduled] = useState(false)
  const [start,setStart] = useState('06:00')
  const [end,setEnd] = useState('10:00')
  const [days,setDays] = useState(['Mon','Tue','Wed','Thu','Fri'])
  const [selectedStations,setSelectedStations] = useState(stations.slice(0,3))
  const [minPay,setMinPay] = useState(80)
  const [duration,setDuration] = useState('Any duration')
  return <div className="hf-tool-stack"><ServicePanel title="Block requests" note="Set up your request preferences in this preview."><div className="hf-status-line"><span className="hf-tool-icon"><WorkspaceIcon name="requests" size={26}/></span><div><b>Request blocks</b><small>{on?'Enabled · Demo mode':'Currently disabled'}</small></div><DemoSwitch checked={on} onChange={setOn} label="Toggle request block preview"/></div><p className="hf-small-note">No real blocks are requested. This switch only changes the interface.</p></ServicePanel>
  <div className="hf-tool-two"><ServicePanel title="Scheduled requests" note="Choose when the preview would start requesting."><div className="hf-setting-row"><div><b>Enable schedule</b><small>Use a selected time window</small></div><DemoSwitch checked={scheduled} onChange={setScheduled} label="Toggle request schedule"/></div><div className="hf-form-grid"><label className="hf-tool-field">Start time<input type="time" value={start} onChange={e=>setStart(e.target.value)} disabled={!scheduled}/></label><label className="hf-tool-field">End time<input type="time" value={end} onChange={e=>setEnd(e.target.value)} disabled={!scheduled}/></label></div><div className="hf-weekdays">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=><button type="button" disabled={!scheduled} className={days.includes(d)?'active':''} key={d} onClick={()=>setDays(old=>old.includes(d)?old.filter(x=>x!==d):[...old,d])}>{d}</button>)}</div><p className="hf-small-note">{scheduled?`Preview schedule: ${start}–${end} on ${days.join(', ')||'no days selected'}.`:'Schedule is off.'}</p></ServicePanel>
  <ServicePanel title="Request filters" note="Choose the kind of blocks you prefer."><label className="hf-tool-field">Minimum base pay <strong>{money(minPay)}</strong><input type="range" min="30" max="200" step="5" value={minPay} onChange={e=>setMinPay(Number(e.target.value))}/></label><label className="hf-tool-field">Block duration<select value={duration} onChange={e=>setDuration(e.target.value)}>{['Any duration','2 hours','3 hours','3.5 hours','4 hours','5 hours'].map(x=><option key={x}>{x}</option>)}</select></label><div className="hf-filter-summary"><WorkspaceIcon name="sliders" size={18}/> Filters ready <span>{money(minPay)} minimum · {duration}</span></div></ServicePanel></div>
  <ServicePanel title="Station filter" note="Select the stations you want included in the request preview." action={<span className="hf-demo-tag">{selectedStations.length} SELECTED</span>}><div className="hf-station-grid">{stations.map(s=><label className="hf-station" key={s}><input type="checkbox" checked={selectedStations.includes(s)} onChange={e=>setSelectedStations(old=>e.target.checked?[...old,s]:old.filter(x=>x!==s))}/><span><WorkspaceIcon name="pin" size={18}/>{s}</span></label>)}</div></ServicePanel></div>
}
function ReferralsTool() {
  const [copied,setCopied] = useState('')
  const code='HYPER-7X42'
  const url=`https://hyperflex.example/invite/${code}`
  async function copy(value,label) {try{await navigator.clipboard.writeText(value);setCopied(`${label} copied!`)}catch{setCopied(`Copy manually: ${value}`)}}
  return <div className="hf-tool-stack"><div className="hf-referral-hero"><span className="hf-tool-icon"><WorkspaceIcon name="users" size={32}/></span><span className="hf-overline">GROW TOGETHER</span><h2>Better together.</h2><p>Share your personal invitation with a friend and introduce them to Hyper Flex.</p></div><div className="hf-tool-two"><ServicePanel title="Your referral code" note="A sample invitation code for your profile."><div className="hf-copy-row"><strong>{code}</strong><button className="hf-solid-btn" onClick={()=>copy(code,'Code')}>Copy code</button></div></ServicePanel><ServicePanel title="Invite link" note="Send this link to someone you know."><div className="hf-copy-row"><span className="hf-copy-url">{url}</span><button className="hf-solid-btn" onClick={()=>copy(url,'Link')}>Copy link</button></div></ServicePanel></div>{copied&&<p className="hf-tool-feedback" role="status">{copied}</p>}<div className="hf-metrics-grid hf-three-metrics"><Metric label="Invitations sent" value="12" sub="Example activity"/><Metric label="Friends joined" value="4" sub="Example signups"/><Metric label="Pending invites" value="8" sub="Awaiting response"/></div><ServicePanel title="How referrals work" note="Three simple steps to share your workspace."><div className="hf-steps">{['Copy your invitation code or link','Share it with friends','Follow invitation activity here'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></ServicePanel><p className="hf-small-note">Referral details are placeholders; no invitations or rewards are currently tracked.</p></div>
}
const seedNotifications=[{id:1,type:'update',title:'Welcome to Hyper Flex',body:'Your new workspace is ready to explore.',time:'Today · 9:15 AM',read:false},{id:2,type:'info',title:'New analytics preview',body:'Explore daily and monthly earnings charts with sample data.',time:'Today · 8:40 AM',read:false},{id:3,type:'notice',title:'Request preferences',body:'Station filters and scheduling options are now available in the Requests preview.',time:'Yesterday · 6:30 PM',read:false},{id:4,type:'update',title:'Workspace update',body:'We refreshed the dashboard layout and service navigation.',time:'Oct 20 · 11:10 AM',read:true},{id:5,type:'info',title:'Security reminder',body:'Never share your account password or verification codes.',time:'Oct 18 · 10:00 AM',read:true}]
function InboxTool(){const [items,setItems]=useState(seedNotifications);const [filter,setFilter]=useState('all');const filtered=items.filter(x=>filter==='all'||(filter==='unread'?!x.read:x.type===filter));const unread=items.filter(x=>!x.read).length;return <div className="hf-tool-stack"><div className="hf-toolbar"><div className="hf-segmented">{['all','unread','update','info'].map(x=><button key={x} className={filter===x?'active':''} onClick={()=>setFilter(x)}>{x==='all'?'All':x==='unread'?'Unread':x==='update'?'Updates':'Info'}</button>)}</div><button className="hf-outline-btn" onClick={()=>setItems(old=>old.map(x=>({...x,read:true})))}>Mark all read</button></div><div className="hf-metrics-grid hf-three-metrics"><Metric label="All messages" value={items.length}/><Metric label="Unread" value={unread}/><Metric label="Updates" value={items.filter(x=>x.type==='update').length}/></div><ServicePanel title="Notification center" note="Product messages and workspace announcements."><div className="hf-inbox-list">{filtered.length===0?<p className="hf-empty-state">You're all caught up. No messages in this view.</p>:filtered.map(n=><button className={`hf-inbox-item ${n.read?'':'unread'}`} key={n.id} onClick={()=>setItems(old=>old.map(x=>x.id===n.id?{...x,read:true}:x))}><span className="hf-inbox-icon"><WorkspaceIcon name={n.type==='update'?'bolt':n.type==='info'?'mail':'requests'} size={22}/></span><span className="hf-inbox-copy"><strong>{n.title}</strong><span>{n.body}</span><small>{n.time}</small></span>{!n.read&&<span className="hf-unread-indicator"/>}</button>)}</div></ServicePanel></div>}
function SettingsTool(){const [linked,setLinked]=useState(false);const [email,setEmail]=useState(true);const [sms,setSms]=useState(false);const [timezone,setTimezone]=useState('America/Los_Angeles');const [flexArea,setFlexArea]=useState('Seattle, WA');const [showPass,setShowPass]=useState(false);const [message,setMessage]=useState('');return <div className="hf-tool-stack"><ServicePanel title="Connected accounts" note="Manage your account connection status."><div className="hf-setting-row"><div className="hf-setting-with-icon"><span className="hf-tool-icon"><WorkspaceIcon name="shield" size={23}/></span><div><b>Amazon Flex account</b><small>Status: <span className={linked?'hf-positive':''}>{linked?'Linked (preview)':'Not linked'}</span></small></div></div><button className="hf-solid-btn" onClick={()=>{setLinked(x=>!x);setMessage('Demo status updated. No account credentials were used.')}}>{linked?'Unlink account':'Link your Amazon account'}</button></div><p className="hf-small-note">This is a simulated connection. Do not enter Amazon credentials here.</p></ServicePanel><div className="hf-tool-two"><ServicePanel title="Security" note="Manage your sign-in preferences."><button className="hf-setting-link" onClick={()=>setShowPass(x=>!x)}><span>Change password</span><span>{showPass?'−':'↗'}</span></button>{showPass&&<form className="hf-settings-form" onSubmit={e=>{e.preventDefault();setMessage('Password change is a UI preview only.');setShowPass(false)}}><input type="password" placeholder="Current password" required/><input type="password" placeholder="New password" minLength={8} required/><button className="hf-solid-btn">Save password</button></form>}<div className="hf-setting-row"><div><b>Account protection</b><small>Security reminders enabled</small></div><span className="hf-demo-tag">ACTIVE</span></div></ServicePanel><ServicePanel title="Notifications" note="Choose how you want to hear from us."><div className="hf-setting-row"><div><b>Email notifications</b><small>Updates and important notices</small></div><DemoSwitch checked={email} onChange={setEmail} label="Email notifications"/></div><div className="hf-setting-row"><div><b>SMS notifications</b><small>Text message updates</small></div><DemoSwitch checked={sms} onChange={setSms} label="SMS notifications"/></div></ServicePanel></div><div className="hf-tool-two"><ServicePanel title="Region & timezone" note="Customize your local workspace."><label className="hf-tool-field">Timezone<select value={timezone} onChange={e=>setTimezone(e.target.value)}><option value="America/Los_Angeles">Pacific Time (PT)</option><option value="America/Denver">Mountain Time (MT)</option><option value="America/Chicago">Central Time (CT)</option><option value="America/New_York">Eastern Time (ET)</option></select></label><label className="hf-tool-field">Flex location<select value={flexArea} onChange={e=>setFlexArea(e.target.value)}><option>Seattle, WA</option><option>Bellevue, WA</option><option>Tacoma, WA</option><option>Everett, WA</option></select></label><button className="hf-outline-btn" onClick={()=>setMessage('Region preferences saved for this preview.')}>Update preferences</button></ServicePanel><ServicePanel title="Hyper Flex on your phone" note="Add the web app to your home screen."><div className="hf-app-install"><span className="hf-tool-icon"><LightningLogo/></span><div><b>Hyper Flex web app</b><small>Works on iOS and Android · No install needed</small></div></div><button className="hf-solid-btn" onClick={()=>setMessage('On iPhone: tap Share, then Add to Home Screen. On Android: open the menu, then Add to Home screen.')}>Add to Home Screen</button><p className="hf-small-note">Hyper Flex runs in your browser. Add it to your home screen for a full-screen shortcut on any device. No app store, no download.</p></ServicePanel></div>{message&&<p className="hf-tool-feedback" role="status">{message}</p>}</div>}
function ServiceContent({ id }) {switch(id){case 'instant-offers':return <InstantOffersTool/>;case 'earnings':return <EarningsTool/>;case 'requests':return <RequestsTool/>;case 'referrals':return <ReferralsTool/>;case 'inbox':return <InboxTool/>;case 'settings':return <SettingsTool/>;default:return null}}

function DashboardPage() {
  const [active, setActive] = useState(null)
  const selected = workspaceItems.find(item => item.id === active)
  return <div className="hf-app-page hf-dashboard-page">
    <div className="hf-grid-background" aria-hidden="true" />
    <header className="hf-app-topbar hf-dashboard-topbar"><a href="/" className="hf-back-link"><svg className="back-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg> Website</a><WorkspaceBrand /></header>
    <main className="hf-dashboard-main">
      <div className="hf-dashboard-kicker"><span className="hf-dashboard-pulse" /> HYPER FLEX / WORKSPACE</div>
      <div className="hf-dashboard-heading"><div><h1>Your space. <span>Your flow.</span></h1><p>Everything you need, in one beautifully simple place.</p></div><span className="hf-preview-pill">● UI PREVIEW</span></div>
      {!selected ? <><div className="hf-dashboard-section-title"><span>YOUR TOOLKIT</span><span>06 SERVICES</span></div><div className="hf-service-grid">
        {workspaceItems.map((item, index) => <button type="button" key={item.id} className={'hf-service-card hf-service-' + item.id} onClick={() => setActive(item.id)}>
          <span className="hf-service-card-top"><span className="hf-service-icon"><WorkspaceIcon name={item.icon} size={28}/></span><span className="hf-service-index">0{index + 1}</span></span>
          <span className="hf-service-card-body"><span className="hf-service-eyebrow">{item.eyebrow}</span><strong>{item.title}</strong><span className="hf-service-description">{item.description}</span></span>
          <span className="hf-service-card-bottom"><span>OPEN WORKSPACE</span><span className="hf-service-arrow">↗</span></span>
        </button>)}
      </div></> : <div className="hf-tool-detail"><button type="button" className="hf-detail-back" onClick={() => setActive(null)}><svg className="back-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg> All services</button><div className="hf-tool-heading"><div className="hf-detail-icon"><WorkspaceIcon name={selected.icon} size={30}/></div><div><span className="hf-overline">{selected.eyebrow}</span><h2>{selected.title}</h2><p>{selected.description}</p></div></div><ServiceContent key={active} id={active}/></div>}
      <footer className="hf-dashboard-footer"><span>© {new Date().getFullYear()} Hyper Flex</span><span>INDEPENDENT UI CONCEPT</span></footer>
    </main>
  </div>
}

function LandingPage() {
  const [language, setLanguage] = useState('EN')
  const [menuOpen, setMenuOpen] = useState(false)
  const [weeks, setWeeks] = useState(4)
  const [weeklyAmount, setWeeklyAmount] = useState(1000)
  const [openFaq, setOpenFaq] = useState(0)

  const t = translations[language]
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  return (
    <div className="site">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <div className="header-wrap">
        <header className="navbar">
          <a className="brand" href="/">
            <LightningLogo />
            <span className="brand-name">
              Hyper <b>Flex</b>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              {t.features}
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              {t.faq}
            </a>
          </nav>

          <div className="nav-actions">
            <select
              aria-label="Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="EN">EN · English</option>
              <option value="ES">ES · Español</option>
              <option value="RU">RU · Русский</option>
            </select>

            <a className="login" href="/login">
              {t.login}
            </a>

            <a className="signup" href="/signup">
              {t.signup}
            </a>

            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              ☰
            </button>
          </div>
        </header>
      </div>

      {/* ORIGINAL HOMEPAGE */}

      <main id="home" className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" />
            {t.eyebrow}
          </span>

          <h1>
            {t.headline}
            <span className="glow-text">{t.highlight}</span>
          </h1>

          <p>{t.description}</p>

          <a className="primary-button" href="/signup">
            <span className="button-label">{t.start}</span>
            <span className="button-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg></span>
          </a>

          <div className="hero-note">{t.note}</div>
        </div>
      </main>

      {/* FEATURES */}

      <section id="features" className="content-section features-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-kicker">
              <span className="status-dot" />
              {t.toolkitLabel}
            </span>
            <h2>
              {t.toolkitTitle}
              <span className="gradient-heading">{t.toolkitHighlight}</span>
            </h2>
            <p>{t.toolkitDescription}</p>
          </div>

          <div className="feature-grid">
            {featureData.map((feature, index) => (
              <article className="feature-card" key={feature.tag}>
                <div className="feature-icon">
                  <Icon name={feature.icon} />
                </div>
                <span className="feature-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{feature.title[language]}</h3>
                <p>{feature.description[language]}</p>
                <div className="feature-bottom">
                  <span>{feature.tag}</span>
                  <span className="feature-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}

      <section className="content-section comparison-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-kicker">{t.comparisonLabel}</span>
            <h2>{t.comparisonTitle}</h2>
            <p>{t.comparisonDescription}</p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>{t.traditional}</th>
                  <th className="hyper-column">
                    <span className="mini-bolt">ϟ</span> Hyper Flex
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index}>
                    <td className="comparison-label">
                      {item.label[language]}
                    </td>
                    <td className="comparison-muted">
                      <span className="minus">−</span>
                      {item.before[language]}
                    </td>
                    <td className="hyper-column comparison-positive">
                      <span className="check">✓</span>
                      {item.after[language]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}

      <section className="content-section calculator-section">
        <div className="section-container calculator-layout">
          <div className="calculator-copy">
            <span className="section-kicker">{t.calculatorLabel}</span>
            <h2>
              {t.calculatorTitle}
              <span className="gradient-heading">
                {currency.format(weeklyAmount * weeks)}
              </span>
            </h2>
            <p>{t.calculatorDescription}</p>
            <div className="calculator-disclaimer">
              <span>ⓘ</span>
              {t.calculatorNote}
            </div>
          </div>

          <div className="calculator-card">
            <div className="calculator-card-header">
              <span className="section-kicker">
                <span className="status-dot" />
                {t.estimated}
              </span>
              <span className="calculator-decoration">↗</span>
            </div>

            <div className="calculator-total">
              {currency.format(weeklyAmount * weeks)}
            </div>

            <p className="calculator-subtitle">
              {currency.format(weeklyAmount)} × {weeks} {t.weeks.toLowerCase()}
            </p>

            <div className="calculator-field">
              <div className="calculator-field-heading">
                <label htmlFor="weekly-amount">{t.weekly}</label>
                <strong>{currency.format(weeklyAmount)}</strong>
              </div>
              <input
                id="weekly-amount"
                type="range"
                min="250"
                max="2500"
                step="50"
                value={weeklyAmount}
                onChange={(e) => setWeeklyAmount(Number(e.target.value))}
                style={{
                  '--progress': `${((weeklyAmount - 250) / 2250) * 100}%`,
                }}
              />
            </div>

            <div className="calculator-field">
              <div className="calculator-field-heading">
                <label htmlFor="weeks">{t.weeks}</label>
                <strong>{weeks}</strong>
              </div>
              <input
                id="weeks"
                type="range"
                min="1"
                max="12"
                value={weeks}
                onChange={(e) => setWeeks(Number(e.target.value))}
                style={{
                  '--progress': `${((weeks - 1) / 11) * 100}%`,
                }}
              />
              <div className="range-labels">
                <span>1</span>
                <span>12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section id="faq" className="content-section faq-section">
        <div className="section-container faq-container">
          <div className="section-heading">
            <span className="section-kicker">{t.faqLabel}</span>
            <h2>{t.faqTitle}</h2>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                key={index}
              >
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                >
                  <span>{item.q[language]}</span>
                  <span className="faq-toggle">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{item.a[language]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="final-section">
        <div className="final-glow" aria-hidden="true" />

        <div className="final-content">
          <div className="final-symbol">
            <LightningLogo />
          </div>

          <h2>
            {t.finalTitle}
            <span className="gradient-heading">{t.finalHighlight}</span>
          </h2>

          <p>{t.finalDescription}</p>

          <a href="/signup" className="primary-button">
            <span>{t.finalButton}</span>
            <span className="button-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg></span>
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-inner">
          <a className="brand footer-brand" href="#home">
            <LightningLogo />
            <span className="brand-name">
              Hyper <b>Flex</b>
            </span>
          </a>

          <span>© {new Date().getFullYear()} Hyper Flex</span>

          <a className="footer-disclaimer" href="/terms">Terms and Conditions</a>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/signup') return <AccountPage />
  if (path === '/login') return <AccountPage login />
  if (path === '/dashboard') return <DashboardPage />
  return <LandingPage />
}

export default App
