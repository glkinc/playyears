export const metadata = {
  title: 'Giveaway',
  description:
    'Win 2 Play Years decks + $150 in curated baby books. Enter our baby library giveaway today.',
  openGraph: {
    title: 'Giveaway | Play Years',
    images: ['/images/giveaway-banner.png'],
  },
}

export default function GiveawayPage() {
  return (
    <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
      <div className="content">
        <div className="flex-container flex-col gap-xl items-center">
          <div className="col-lg-8">
            <div className="flex-container flex-col gap-lg">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xxs">
                  <h1 className="body-lg weight-500 text-highlight-secondary">The Play Years Giveaway</h1>
                  <span className="heading heading-xl">Babies learn through play</span>
                </div>
                <p className="body-lg">We're giving one lucky family <strong>2 Play Years decks + $150 in curated baby books</strong> to support your baby's growth in the first year.</p>
                <p className="body-lg">Each Play Years deck features</p>
                <ul>
                  <li>50 research-backed activities designed to support your baby's development.</li>
                  <li>Activities organized by skill area, so you can see how simple play encourages language, motor, cognitive, sensory, and social-emotional growth.</li>
                </ul>
              </div>
              
              <div className="padding-all-md bg-secondary border-radius-md">
                <h2 className="heading heading-md">The Giveaway is now closed</h2>
                <p>Thank you for everyone who participated!</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
