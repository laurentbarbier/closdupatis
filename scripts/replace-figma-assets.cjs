const fs = require('fs').promises;
const path = require('path');

const root = process.cwd();
const srcDir = path.join(root, 'src');
const assetsDir = path.join(srcDir, 'assets');

const placeholderBase64 =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII='; // 1x1 PNG

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    // ignore
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const res = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await walk(res)));
    } else if (/\.(js|jsx|ts|tsx)$/.test(e.name)) {
      files.push(res);
    }
  }
  return files;
}

async function writePlaceholder(dest) {
  try {
    await fs.access(dest);
    return false; // already exists
  } catch (e) {
    const buf = Buffer.from(placeholderBase64, 'base64');
    await fs.writeFile(dest, buf);
    return true;
  }
}

function toPosix(p) {
  return p.split(path.sep).join('/');
}

async function processFile(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  const regex = /(['"])figma:asset\/([^'"\n]+)\1/g;

  let match;
  let lastIndex = 0;
  let newContent = '';
  let changed = false;

  while ((match = regex.exec(content)) !== null) {
    changed = true;
    newContent += content.slice(lastIndex, match.index);

    const quote = match[1];
    const assetPath = match[2];
    const filename = path.basename(assetPath);
    const destPath = path.join(assetsDir, filename);

    await writePlaceholder(destPath);

    let rel = toPosix(path.relative(path.dirname(filePath), destPath));
    if (!rel.startsWith('.')) rel = './' + rel;

    newContent += quote + rel + quote;
    lastIndex = match.index + match[0].length;
  }

  if (!changed) return false;

  newContent += content.slice(lastIndex);
  await fs.writeFile(filePath, newContent, 'utf8');
  return true;
}

async function main() {
  const targetDir = path.join(root, 'src');
  try {
    await fs.access(targetDir);
  } catch (e) {
    console.error('No src/ directory found in project root.');
    process.exit(1);
  }

  await ensureDir(assetsDir);

  const files = await walk(srcDir);
  const changedFiles = [];

  for (const f of files) {
    try {
      const changed = await processFile(f);
      if (changed) changedFiles.push(f);
    } catch (e) {
      console.error('Error processing', f, e);
    }
  }

  console.log('\nSummary:');
  console.log('Processed files:', files.length);
  console.log('Files updated:', changedFiles.length);
  if (changedFiles.length) changedFiles.forEach((f) => console.log(' -', toPosix(path.relative(root, f))));
  console.log('\nPlaceholder assets written to src/assets/ (if they did not exist).\nReplace them with original images when available.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
