/**
 * 튜플 타입
 * TypeScript에서만 존재하며 idx 갯수나 타입을 만족해야함
 */
const rgbColor: [number, string] = [1, "sdfasdf"];
type HttpResponse = [number, string];

const goodResponse: HttpResponse = [200, "Good Response"];
const badResponse: HttpResponse = [400, "Bad Response"];
