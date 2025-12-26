export async function delayedDelivery(url: string, payload: any, delayMs: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, delayMs));
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

