import { readFile, writeFile } from 'fs/promises';

// Load items from JSON
const dataPath = new URL('./items.json', import.meta.url);
let data = JSON.parse(await readFile(dataPath));

// Function to get all items (for testing: all items are unlocked)
export async function getAllItems(req, res, next) {
  try {
    // Force all items to be unlocked
    const items = data.items.map(item => ({
      ...item,
      unlocked: true // Set all items to unlocked for testing
    }));

    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
}

// Function to get a single item by ID
export function getItemsId(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const rabbitItem = data.items.find(item => item.id === id);

  if (!rabbitItem) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.status(200).json(rabbitItem);
}

// Unlock an item (no change needed for testing)
export async function unlockItem(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const userLeaves = parseInt(req.body.leaves, 10);

  const item = data.items.find(item => item.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  if (userLeaves < item.cost) {
    return res.status(400).json({ error: 'Not enough leaves to unlock this item' });
  }

  // Update the unlock status
  item.unlocked = true;

  // Save the updated data to the file
  await writeFile(dataPath, JSON.stringify(data, null, 2));

  res.status(200).json({ message: 'Item unlocked', item });
}
