import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { Container } from 'react-bootstrap'
import { EventsCarousel } from '~components/carousels'
import { EventProps } from '~utils/props'

type Props = {
  events: Array<EventProps>
}

const EventsSection: React.FC<Props> = ({ events }) => {
  const { t } = useI18next()

  return (
    <div id="events" className="site-section">
      <Container>
        <h2 className="section-title-underline mb-5">
          <span>{t('research.events.title')}</span>
        </h2>
        <EventsCarousel nodes={events} />
      </Container>
    </div>
  )
}

export default EventsSection
