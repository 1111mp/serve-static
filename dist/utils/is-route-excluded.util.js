"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRouteExcluded = void 0;
const path_to_regexp_1 = require("path-to-regexp");
const isRouteExcluded = (req, paths = []) => {
    return paths.some((path) => {
        const matcher = (0, path_to_regexp_1.match)(path, { decode: decodeURIComponent });
        const queryParamsIndex = req.originalUrl.indexOf('?');
        const pathname = queryParamsIndex >= 0
            ? req.originalUrl.slice(0, queryParamsIndex)
            : req.originalUrl;
        return matcher(pathname) !== false;
    });
};
exports.isRouteExcluded = isRouteExcluded;
