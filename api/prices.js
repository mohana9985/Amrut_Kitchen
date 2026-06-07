export default async function handler(req, res) {
  const sheetUrl = process.env.SHEET_CSV_URL;
  if (!sheetUrl) return res.status(404).send('Not configured');

  try {
    const response = await fetch(sheetUrl, { cache: 'no-store' });
    const csv = await response.text();
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0');
    res.setHeader('Surrogate-Control', 'no-store');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(csv);
  } catch {
    res.status(500).send('Failed to fetch prices');
  }
}
