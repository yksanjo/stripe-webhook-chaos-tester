export async function outOfOrder(url: string, events: any[]): Promise<void> {
  const shuffled = [...events].sort(() => Math.random() - 0.5);
  for (const event of shuffled) {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
  }
}

