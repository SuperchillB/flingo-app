import { Combobox } from '@headlessui/react';
import { Form } from '@remix-run/react';
import type { ActionArgs } from '@remix-run/server-runtime';
import { json, redirect } from '@remix-run/server-runtime';
import { useState, useMemo } from 'react';
import languages from '~/data/languages.json';
import type { Language } from '~/_types/Languages';

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const languageId = formData.get('language[id]');
  const languageName = formData.get('language[name]');
  const languageNativeName = formData.get('language[nativeName]');
  // const english = formData.get('english');

  const selectedLang = {
    id: languageId,
    name: languageName,
    nativeName: languageNativeName,
  } as Language;

  console.log('selectedLang', selectedLang);

  if (typeof languageId !== 'string' || languageId.length === 0) {
    return json({ errors: { title: 'Target language is required', body: null } }, { status: 400 });
  }

  // TODO: update user in DB (set selectedLanguage)

  return redirect('/decks');
}

export default function LanguagePage() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [query, setQuery] = useState('');

  const filteredLanguages = useMemo(() => {
    return query === ''
      ? languages
      : languages.filter((lang) => {
          return lang.name.toLowerCase().includes(query.toLowerCase());
        });
  }, [query]);

  return (
    <div>
      <h1>Welcome to Flingo</h1>
      <Form method="post">
        <div className="w-full px-3 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-last-name"
          >
            I speak
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:outline-none"
            id="grid-last-name"
            name="english"
            readOnly
            type="text"
            value="English"
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-last-name"
          >
            I want to learn
          </label>
          <Combobox
            name="language"
            onChange={setSelectedLanguage}
            value={selectedLanguage}
          >
            <Combobox.Input
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              displayValue={(lang: Language) => (lang ? `${lang.name} | ${lang.nativeName}` : '')}
              id="grid-last-name"
              onChange={(event) => setQuery(event.target.value)}
              required
            />
            <Combobox.Options>
              {filteredLanguages.map((lang) => (
                <Combobox.Option
                  key={lang.id}
                  value={lang}
                >
                  {lang.name} | {lang.nativeName}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </div>

        <button
          className="flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 py-1 px-2 text-sm text-white hover:border-teal-700 hover:bg-teal-700"
          type="submit"
        >
          Let's go
        </button>
      </Form>
    </div>
  );
}
