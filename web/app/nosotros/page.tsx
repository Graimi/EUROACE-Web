import { redirect } from 'next/navigation';

// Partners now live in "Sobre el proyecto"; the old page is kept in code only.
export default function Page() {
  redirect('/observatorio#socios');
}
