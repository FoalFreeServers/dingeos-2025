// Lootbag Global Objects (CREATE)
global.commonCreate = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/create_lootbag",Name:"Lootbag (Create)",Type:"COMMON"}')
global.rareCreate = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag",Name:"Rare Lootbag (Create)",Type:"RARE"}')
global.epicCreate = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag",Name:"Epic Lootbag (Create)",Type:"EPIC"}')
global.legendaryCreate = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/legendary_create_lootbag",Name:"Legendary Lootbag (Create)",Type:"LEGENDARY"}')
// XL Lootbag Global Objects (CREATE)
global.commonCreateXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/create_lootbag_xl",Name:"XL Lootbag (Create)",Type:"COMMON"}')
global.rareCreateXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag_xl",Name:"Rare XL Lootbag (Create)",Type:"RARE"}')
global.epicCreateXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag_xl",Name:"Epic XL Lootbag (Create)",Type:"EPIC"}')
global.legendaryCreateXL = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/legendary_create_lootbag_xl",Name:"Legendary XL Lootbag (Create)",Type:"LEGENDARY"}')

/*
        .weatherCheck({
            raining: true,
            thundering:true
        })
*/
	
LootJS.modifiers((event) => {
	
	// ____________________________CONTRAPTION ONLY______________________
	
	// CONTRAPTION DROP OF CREATE LOOTBAG - COMMON
    event
        .addBlockLootModifier("#c:ores")
		.not(n=>n.entityPredicate(() => true))
        .anyDimension("minecraft:overworld")
        .randomChance(0.0012)
        .dropExperience(50)
        //.matchMainHand(ItemFilter.hasEnchantment("silk_touch", 0, 0))
		.triggerLightningStrike(false)
		.addLoot(global.commonCreate)

	// CONTRAPTION DROP OF CREATE LOOTBAG - RARE
    event
        .addBlockLootModifier("#c:ores")
		.not(n=>n.entityPredicate(() => true))
        .anyDimension("minecraft:overworld")
        .randomChance(0.0008)
        .dropExperience(250)
        //.matchMainHand(ItemFilter.hasEnchantment("silk_touch", 0, 0))
		.triggerLightningStrike(false)
		.addLoot(global.rareCreate)
		
	// CONTRAPTION DROP OF CREATE LOOTBAG - COMMON XL
    event
        .addBlockLootModifier("#c:ores")
		.not(n=>n.entityPredicate(() => true))
        .anyDimension("minecraft:overworld")
        .randomChance(0.001)
        .weatherCheck({
            raining: true,
            thundering:true
        })
        .dropExperience(250)
        //.matchMainHand(ItemFilter.hasEnchantment("silk_touch", 0, 0))
		.triggerLightningStrike(false)
		.addLoot(global.commonCreateXL)
		
	// CONTRAPTION DROP OF CREATE LOOTBAG - RARE XL
    event
        .addBlockLootModifier("#c:ores")
		.not(n=>n.entityPredicate(() => true))
        .anyDimension("minecraft:overworld")
        .randomChance(0.00035)
        .weatherCheck({
            raining: true,
            thundering:true
        })
        .dropExperience(450)
        //.matchMainHand(ItemFilter.hasEnchantment("silk_touch", 0, 0))
		.triggerLightningStrike(false)
		.addLoot(global.rareCreateXL)
		
	// ____________________________PLAYER ONLY______________________
	
	// PLAYER DROP OF CREATE LOOTBAG - COMMON
    event
        .addBlockLootModifier("#c:ores")
        .anyDimension("minecraft:overworld")
		.entityPredicate(() => true)
        .not(n=>n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .randomChance(0.005)
        .dropExperience(50)
		.triggerLightningStrike(false)
		.addLoot(global.commonCreate)
		
	// PLAYER DROP OF CREATE LOOTBAG - RARE
    event
        .addBlockLootModifier("#c:ores")
        .anyDimension("minecraft:overworld")
		.entityPredicate(() => true)
        .not(n=>n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .randomChance(0.0005)
        .dropExperience(250)
		.triggerLightningStrike(false)
		.addLoot(global.rareCreate)

	// PLAYER DROP OF CREATE LOOTBAG - COMMON XL
    event
        .addBlockLootModifier("#c:ores")
        .anyDimension("minecraft:overworld")
		.entityPredicate(() => true)
        .not(n=>n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .randomChance(0.001)
        .weatherCheck({
            raining: true,
            thundering:true
        })
        .dropExperience(250)
		.triggerLightningStrike(false)
		.addLoot(global.commonCreateXL)
		
	// PLAYER DROP OF CREATE LOOTBAG - RARE XL
    event
        .addBlockLootModifier("#c:ores")
        .anyDimension("minecraft:overworld")
		.entityPredicate(() => true)
        .not(n=>n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .randomChance(0.0004)
        .weatherCheck({
            raining: true,
            thundering:true
        })
        .dropExperience(450)
		.triggerLightningStrike(false)
		.addLoot(global.rareCreateXL)
})


// 3 Common -> 1 Rare Lootbag
const createbagc = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/create_lootbag",Name:"Lootbag (Create)",Type:"COMMON"}').strongNBT();

ServerEvents.recipes(event => {
    event.shapeless(
      Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag",Name:"Rare Lootbag (Create)",Type:"RARE"}'), // arg 1: output
      [
        createbagc,
        createbagc,
		createbagc,
        createbagc
      ]
    )

// 3 Rare -> 1 Epic Lootbag
const createbagr = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag",Name:"Rare Lootbag (Create)",Type:"RARE"}').strongNBT();
    event.shapeless(
      Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag",Name:"Epic Lootbag (Create)",Type:"EPIC"}'), // arg 1: output
      [
        createbagr,
        createbagr,
		createbagr,
        createbagr
      ]
    )

// 3 Epic -> 1 Legendary Lootbag
const createbage = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag",Name:"Epic Lootbag (Create)",Type:"EPIC"}').strongNBT();
    event.shapeless(
      Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/legendary_create_lootbag",Name:"Legendary Lootbag (Create)",Type:"LEGENDARY"}'), // arg 1: output
      [
        createbage,
        createbage,
		createbage,
        createbage
      ]
    )
	
// 3 Common -> 1 Rare Lootbag (XL)
const createbagcxl = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/create_lootbag_xl",Name:"XL Lootbag (Create)",Type:"COMMON"}').strongNBT();
    event.shapeless(
      Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag_xl",Name:"Rare XL Lootbag (Create)",Type:"RARE"}'), // arg 1: output
      [
        createbagcxl,
        createbagcxl,
		createbagcxl,
        createbagcxl
      ]
    )

// 3 Rare -> 1 Epic Lootbag (XL)
const createbagrxl = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/rare_create_lootbag_xl",Name:"Rare XL Lootbag (Create)",Type:"RARE"}').strongNBT();
    event.shapeless(
      Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag_xl",Name:"Epic XL Lootbag (Create)",Type:"EPIC"}'), // arg 1: output
      [
        createbagrxl,
        createbagrxl,
		createbagrxl,
        createbagrxl
      ]
    )
	
// 3 Epic -> 1 Legendary Lootbag (XL)
const createbagexl = Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/epic_create_lootbag_xl",Name:"Epic XL Lootbag (Create)",Type:"EPIC"}').strongNBT();
    event.shapeless(
      Item.of('lootbags:loot_bag', '{Color:12221734,Loot:"loot_bags:loot_bags/legendary_create_lootbag_xl",Name:"Legendary XL Lootbag (Create)",Type:"LEGENDARY"}'), // arg 1: output
      [
        createbagexl,
        createbagexl,
		createbagexl,
        createbagexl
      ]
    )
})
