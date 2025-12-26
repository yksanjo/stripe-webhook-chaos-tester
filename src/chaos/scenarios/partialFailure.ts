export async function partialFailure(url: string, payload: any): Promise<void> {
  const partial = { ...payload };
  delete partial.data.object.metadata;
  delete partial.data.object.customer;
  
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(partial),
  });
}

