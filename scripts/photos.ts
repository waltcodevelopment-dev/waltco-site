// Web copies of project photos for waltcodevelopment.com (owner, 5 Oct 2026). Runs on the Mac: macOS's built-in
// `sips` resizes, then this script strips EXIF/GPS (photos of clients' homes must not carry their location).
// Originals are never changed. No install needed.
//   node scripts/photos.ts <folder-of-originals> <name>      e.g. node scripts/photos.ts ~/Desktop/eagan eagan
// Writes public/images/<name>-NN-{1920,1200,600}.jpg, each ≤ 300 KB (addendum D), never upscaled, and appends
// one line per photo to public/images/captions.tsv for Walter to caption (only captioned photos are used).
import { execFileSync } from 'node:child_process';
import { appendFileSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const [src, name] = process.argv.slice(2);
if (!src || !name || !/^[a-z0-9-]+$/.test(name)) {
  console.error('usage: node scripts/photos.ts <folder-of-originals> <name: a-z 0-9 ->');
  process.exit(1);
}
const OUT = 'public/images';
const MAX = 300_000;
mkdirSync(OUT, { recursive: true });

/** Keep only what a browser needs: drop APP1 (EXIF/XMP, incl. GPS) and APP3–APP15 and comments; keep APP0, ICC (APP2). */
export function stripMetadata(jpg: Buffer): Buffer {
  if (jpg[0] !== 0xff || jpg[1] !== 0xd8) throw new Error('not a JPEG');
  const parts: Buffer[] = [jpg.subarray(0, 2)];
  let i = 2;
  while (i < jpg.length) {
    if (jpg[i] !== 0xff) throw new Error(`bad marker at ${i}`);
    const m = jpg[i + 1];
    if (m === 0xda) { parts.push(jpg.subarray(i)); break; } // start of scan: image data to the end
    const len = jpg.readUInt16BE(i + 2);
    const drop = m === 0xe1 || (m >= 0xe3 && m <= 0xef) || m === 0xfe;
    if (!drop) parts.push(jpg.subarray(i, i + 2 + len));
    i += 2 + len;
  }
  return Buffer.concat(parts);
}

const width = (f: string) => Number(/pixelWidth: (\d+)/.exec(execFileSync('sips', ['-g', 'pixelWidth', f], { encoding: 'utf8' }))?.[1] ?? 0);

const files = readdirSync(src).filter((f) => /\.(jpe?g|heic|png|tiff?)$/i.test(f)).sort();
let n = 0;
for (const f of files) {
  n += 1;
  const id = `${name}-${String(n).padStart(2, '0')}`;
  const orig = join(src, f);
  const w0 = width(orig);
  for (const w of [1920, 1200, 600]) {
    const dst = join(OUT, `${id}-${w}.jpg`);
    const target = Math.min(w, w0);
    let q = 80;
    for (;;) {
      execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', String(q), '--resampleWidth', String(target), orig, '--out', dst], { stdio: 'ignore' });
      writeFileSync(dst, stripMetadata(readFileSync(dst)));
      if (statSync(dst).size <= MAX || q <= 40) break;
      q -= 8;
    }
    console.log(`${basename(dst).padEnd(28)} ${target}px  ${Math.round(statSync(dst).size / 1024)} KB  q${q}`);
  }
  appendFileSync(join(OUT, 'captions.tsv'), `${id}\t${f}\t\n`);
}
console.log(`done: ${n} photos from ${src} → ${OUT}. Add a caption after each ${name}-NN line in ${OUT}/captions.tsv.`);
