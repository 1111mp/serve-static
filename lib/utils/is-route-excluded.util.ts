import { match } from 'path-to-regexp';

export const isRouteExcluded = (req: any, paths: string[] = []) => {
  return paths.some((path) => {
    const matcher = match(path, { decode: decodeURIComponent });

    const queryParamsIndex = req.originalUrl.indexOf('?');
    const pathname =
      queryParamsIndex >= 0
        ? req.originalUrl.slice(0, queryParamsIndex)
        : req.originalUrl;

    return matcher(pathname) !== false;
  });
};
