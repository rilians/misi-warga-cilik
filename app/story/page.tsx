import { redirect } from 'next/navigation';

export default function StoryIndexPage() {
  // redirect base /story to first page
  redirect('/story/1');
}
