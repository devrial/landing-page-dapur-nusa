import { TabMenu } from 'primereact/tabmenu'
import { Button } from 'primereact/button'
import { ALL_MENU_CATEGORIES, IMAGES, BUSINESS, waLink } from '../data.js'

const CATEGORY_ICONS = {
  nasiBox: 'pi pi-box',
  riceBowl: 'pi pi-clock',
  geprek: 'pi pi-bolt',
  snackBox: 'pi pi-shopping-bag',
}

function PanelContent({ category }) {
  const orderThis = (dishName) =>
    waLink(
      `Halo ${BUSINESS.name}! Saya mau pesan *${dishName}*. Masih tersedia untuk besok?`
    )

  return (
    <div className="menu__panel">
      <div className="menu__panel-head">
        <img
          src={IMAGES.categories[category.id]}
          alt={`Aneka ${category.name}`}
          width="96"
          height="96"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h3>{category.name}</h3>
          <p>{category.caption}</p>
        </div>
      </div>

      <ul className="menu__list">
        {category.items.map((dish) => (
          <li key={dish.name} className="menu__item">
            <div className="menu__item-main">
              <img
                className="menu__item-photo"
                src={IMAGES.dishes[dish.name] || IMAGES.categories[category.id]}
                alt={dish.name}
                width="88"
                height="66"
                loading="lazy"
                decoding="async"
              />
              <div className="menu__item-info">
                <h4>{dish.name}</h4>
                <p>{dish.desc}</p>
              </div>
            </div>
            <div className="menu__item-action">
              <span className="menu__price">Rp {dish.price.toLocaleString('id-ID')}</span>
              <a href={orderThis(dish.name)} target="_blank" rel="noopener noreferrer">
                <Button
                  label="Pesan"
                  icon="pi pi-whatsapp"
                  severity="success"
                  outlined
                  size="small"
                />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="menu__note">
        <i className="pi pi-info-circle" /> Harga final dikonfirmasi di WhatsApp. Minimal pesan nasi
        box &amp; snack box: {BUSINESS.minOrderBox}. {BUSINESS.freeDeliveryNote}.
      </p>
    </div>
  )
}

export default function Menu({ active, onChange }) {
  const tabItems = ALL_MENU_CATEGORIES.map((c) => ({
    id: c.id,
    label: c.name,
    icon: CATEGORY_ICONS[c.id],
    command: () => onChange(c.id),
  }))

  const activeIndex = Math.max(
    0,
    ALL_MENU_CATEGORIES.findIndex((c) => c.id === active)
  )

  return (
    <section className="menu section" id="menu">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Menu Kami</span>
          <h2 className="section__title">Mau makan apa hari ini?</h2>
          <p className="section__subtitle">
            Semua menu dimasak saat pesanan masuk. Klik "Pesan" untuk chat WhatsApp dengan pesan
            otomatis.
          </p>
        </div>

        <TabMenu model={tabItems} activeIndex={activeIndex} className="menu__tabs" />

        {ALL_MENU_CATEGORIES.filter((c) => c.id === active).map((c) => (
          <PanelContent key={c.id} category={c} />
        ))}
      </div>
    </section>
  )
}
