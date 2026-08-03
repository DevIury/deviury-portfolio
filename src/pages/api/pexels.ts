import type { APIRoute } from 'astro';

const PEXELS_BASE = 'https://api.pexels.com/v1';

function getApiKey(): string {
  const key = import.meta.env.PEXELS_API_KEY;
  if (!key) throw new Error('PEXELS_API_KEY not set in environment');
  return key;
}

async function pexelsFetch(path: string) {
  const res = await fetch(`${PEXELS_BASE}${path}`, {
    headers: { Authorization: getApiKey() },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Pexels API error ${res.status}: ${text}`);
  }
  return res.json();
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const action = url.searchParams.get('action') || 'search';
    const query = url.searchParams.get('q') || 'nature';
    const perPage = Math.min(parseInt(url.searchParams.get('per_page') || '15'), 80);
    const page = parseInt(url.searchParams.get('page') || '1');
    const orientation = url.searchParams.get('orientation') || '';
    const size = url.searchParams.get('size') || '';
    const color = url.searchParams.get('color') || '';
    const photoId = url.searchParams.get('id') || '';

    let data: any;

    switch (action) {
      case 'search': {
        const params = new URLSearchParams({
          query,
          per_page: String(perPage),
          page: String(page),
          locale: 'pt-BR',
        });
        if (orientation) params.set('orientation', orientation);
        if (size) params.set('size', size);
        if (color) params.set('color', color);
        data = await pexelsFetch(`/search?${params.toString()}`);
        break;
      }
      case 'curated': {
        const params = new URLSearchParams({
          per_page: String(perPage),
          page: String(page),
        });
        data = await pexelsFetch(`/curated?${params.toString()}`);
        break;
      }
      case 'photo': {
        if (!photoId) {
          return new Response(JSON.stringify({ error: 'id is required for photo action' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        data = await pexelsFetch(`/photos/${photoId}`);
        break;
      }
      default:
        return new Response(JSON.stringify({ error: 'Unknown action. Use: search, curated, photo' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
