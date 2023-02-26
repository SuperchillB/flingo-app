export interface LanguageNames {
  name: string;
  nativeName: string;
}

export interface Language extends LanguageNames {
  id: string;
}

export interface LanguagesSource extends Record<string, LanguageNames> {}
