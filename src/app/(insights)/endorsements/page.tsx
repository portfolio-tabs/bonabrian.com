import type { Metadata } from 'next'

import PageHeader from '@/components/page-header'
import { getMetadata } from '@/lib/metadata'

import Endorsements from './_components/endorsements'
import { getEndorsements } from './_lib/endorsements'

export const metadata: Metadata = getMetadata({
  title: 'Endorsements',
  description:
    'Please consider endorsing my technical skills and abilities based on your personal experience working with me. Your endorsement will be greatly appreciated.',
})

const EndorsementsPage = async () => {
  const fallbackData = await getEndorsements()

  return (
    <>
      <PageHeader
        title="Endorsements"
        description="Please consider endorsing my technical skills and abilities based on your personal experience working with me. Your endorsement will be greatly appreciated."
      />

      <div id="content">
        <Endorsements fallbackData={fallbackData} />
      </div>
    </>
  )
}

export default EndorsementsPage