export default async function handler(req, res) {
  const sheetUrl = process.env.SHEET_CSV_URL;
  if (!sheetUrl) return res.status(404).send('Not configured');

  try {
    const response = await fetch(sheetUrl, { cache: 'no-store' });
    const csv = await response.text();
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(csv);
  } catch {
    res.status(500).send('Failed to fetch prices');
  }
}
