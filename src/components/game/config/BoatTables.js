import { starterBoatLootTable, rentalBoatLootTable, motorizedBoatLootTable } from '../config/LootTables';

export const allBoats = [
    {
        id: 0,
        name: "Starter Boat",
        tag: "starterBoat",
        lootTable: starterBoatLootTable,
        price: 48,
        fishingSpeed: 3,
        storage: 5,
    },
    {   
        id: 1,
        name: "Rental Boat",
        tag: "rentalBoat",
        lootTable: rentalBoatLootTable,
        price: 1,
        fishingSpeed: 7,
        storage: 7,
    },
    {
        id: 2,
        name: "Motorized Boat",
        tag: "motorizedBoat",
        lootTable: motorizedBoatLootTable,
        price: 250,
        fishingSpeed: 15,
        storage: 13,
    }
]