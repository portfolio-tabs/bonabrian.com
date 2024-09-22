import type { Metadata } from 'next';

import Guestbook from '@/components/guestbook/guestbook';
import Container from '@/components/shared/container';
import PageHeader from '@/components/shared/page-header';
import { ROUTES } from '@/constants';
import { seo } from '@/lib/meta';

export const metadata: Metadata = seo({
  title: 'Guestbook',
  description:
    'Feel free to share your suggestions, appreciation, questions, or anything else on your mind.',
  url: ROUTES.guestbook,
});

const GuestbookPage = () => {
  return (
    <>
      <PageHeader
        title="Guestbook"
        description="Feel free to share your suggestions, appreciation, questions, or anything else on your mind."
      />
      <Container>
        <Guestbook />
      </Container>
    </>
  );
};

export default GuestbookPage;
