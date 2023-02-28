import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import tailwindStylesheetUrl from './styles/tailwind.css';
import { getUser } from './session.server';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Flingo',
  description:
    'Keep all your learned vocab in one place and practice your language skills more efficiently',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader({ request }: LoaderArgs) {
  // ! return the user’s data from our root route’s loader so that user is available everywhere (loaded once and cached)
  return json({
    user: await getUser(request),
  });
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
