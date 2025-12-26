export async function duplicateEvents(url: string, payload: any, count: number = 2): Promise<void> {
  const promises = Array(count).fill(null).map(() => 
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  );
  await Promise.all(promises);
}

