import { Client, Entity, Schema, Repository, EntityCreationData } from "redis-om";
import { Item } from "../types";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class InventoryItem extends Entity {}
let inventoryItemSchema = new Schema(
  InventoryItem,
  {
    signature: { type: "string" },
    address: { type: "string" },
    item: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

interface InventoryItemProps {
  signature: string;
  address: string;
  item: string;
}

export async function addIventoryItem(data: InventoryItemProps) {
  await connect();

  const repository = client.fetchRepository(inventoryItemSchema);

  let inventoryItemEntity: InventoryItem = repository.createEntity({
    signature: data.signature,
    address: data.address,
    item: data.item,
  });

  const redisID = await repository.save(inventoryItemEntity);

  return redisID;
}

export async function getInventoryItemByTxSignature(signature: string) {
  await connect();

  const repository = client.fetchRepository(inventoryItemSchema);

  const item = await repository.search().where("signature").equals(signature).first();

  if (item) return item;
  else return null;
}

export async function viewItemAmountByWalletAddress(address: string, item: Item) {
  await connect();

  const repository = client.fetchRepository(inventoryItemSchema);

  const itemAmount = await repository
    .search()
    .where("address")
    .equals(address)
    .where("item")
    .equals(item)
    .count();

  if (itemAmount > 0) return itemAmount;
  else return null;
}

export async function createIndex() {
  await connect();

  const repository = client.fetchRepository(inventoryItemSchema);
  await repository.createIndex();

  return true;
}
