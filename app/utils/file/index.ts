import { readFileSync } from 'fs';
// const dataPath = `${process.cwd()}/app/data/books.json`;

type ReadProps = {
  returnJSON?: boolean;
  path: string;
  encoding?: BufferEncoding | null | undefined;
};

/**
 * `read` is a function that reads file contents
 * @param {ReadProps}
 * @returns the data or null.
 */
export const read = ({ returnJSON = false, path = '', encoding = 'utf-8' }: ReadProps) => {
  try {
    let data = readFileSync(path, { encoding });
    return returnJSON ? data : JSON.parse(data as string);
  } catch (error) {
    console.log({ error });
    return null;
  }
};
